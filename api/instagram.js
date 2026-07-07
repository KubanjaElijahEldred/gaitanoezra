/**
 * Vercel serverless function that returns live-ish Instagram stats for the
 * portfolio. It supports multiple data providers:
 *
 * 1. "manual" (default) – reads current numbers from environment variables.
 *    Update the env vars in the Vercel dashboard and the portfolio reflects
 *    the new values on the next request.
 *
 * 2. "rapidapi" – calls the Instagram Scraper API on RapidAPI. Set
 *    INSTAGRAM_API_PROVIDER=rapidapi and RAPIDAPI_KEY=your_key.
 *
 * Environment variables used:
 * - INSTAGRAM_API_PROVIDER   "manual" | "rapidapi"
 * - RAPIDAPI_KEY             RapidAPI subscription key
 * - RAPIDAPI_HOST            defaults to instagram-scraper-api2.p.rapidapi.com
 * - INSTAGRAM_USERNAME       defaults to geatano_ezra
 * - INSTAGRAM_FOLLOWERS      manual follower count
 * - INSTAGRAM_FOLLOWING      manual following count
 * - INSTAGRAM_POSTS          manual posts count
 * - REEL_VIEWS               manual reel views
 * - REEL_LIKES               manual reel likes
 * - REEL_COMMENTS            manual reel comments
 * - REEL_CAPTION             manual reel caption
 * - REEL_THUMBNAIL           manual reel thumbnail URL
 */

const REEL_SHORTCODE = "DaNpsp2KCYF";
const REEL_URL =
  "https://www.instagram.com/reel/DaNpsp2KCYF/?igsh=ZWlndTg3dmN3MGpj";
const DEFAULT_USERNAME = "geatano_ezra";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  try {
    const provider = (process.env.INSTAGRAM_API_PROVIDER || "manual").trim().toLowerCase();
    const username = (process.env.INSTAGRAM_USERNAME || DEFAULT_USERNAME).trim();
    const stats = await fetchStats(provider, username, REEL_SHORTCODE, REEL_URL);

    res.status(200).json({
      success: true,
      source: provider,
      username,
      ...stats,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      source: "error",
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

async function fetchStats(provider, username, shortcode, reelUrl) {
  if (provider === "rapidapi" && process.env.RAPIDAPI_KEY) {
    return fetchRapidAPIStats(username, shortcode, reelUrl);
  }

  // Default manual / fallback provider.
  return {
    followers: parseMetric(process.env.INSTAGRAM_FOLLOWERS),
    following: parseMetric(process.env.INSTAGRAM_FOLLOWING),
    posts: parseMetric(process.env.INSTAGRAM_POSTS),
    reel: {
      shortcode,
      url: reelUrl,
      views: parseMetric(process.env.REEL_VIEWS),
      likes: parseMetric(process.env.REEL_LIKES),
      comments: parseMetric(process.env.REEL_COMMENTS),
      caption: process.env.REEL_CAPTION || "",
      thumbnail: process.env.REEL_THUMBNAIL || "",
    },
  };
}

async function fetchRapidAPIStats(username, shortcode, reelUrl) {
  const host =
    (process.env.RAPIDAPI_HOST || "instagram-scraper-api2.p.rapidapi.com").trim();
  const key = process.env.RAPIDAPI_KEY.trim();
  const headers = {
    "X-RapidAPI-Key": key,
    "X-RapidAPI-Host": host,
  };

  const [profileRes, reelRes] = await Promise.allSettled([
    fetch(
      `https://${host}/v1/info?username_or_id_or_url=${encodeURIComponent(username)}`,
      { headers }
    ),
    fetch(
      `https://${host}/v1/post_info?code_or_id_or_url=${encodeURIComponent(shortcode)}`,
      { headers }
    ),
  ]);

  const profile =
    profileRes.status === "fulfilled" && profileRes.value.ok
      ? await profileRes.value.json()
      : {};
  const reel =
    reelRes.status === "fulfilled" && reelRes.value.ok
      ? await reelRes.value.json()
      : {};

  return {
    followers: extractNumber(profile, [
      "data.follower_count",
      "data.edge_followed_by.count",
      "follower_count",
      "result.follower_count",
    ]),
    following: extractNumber(profile, [
      "data.following_count",
      "data.edge_follow.count",
      "following_count",
      "result.following_count",
    ]),
    posts: extractNumber(profile, [
      "data.media_count",
      "data.edge_owner_to_timeline_media.count",
      "posts_count",
      "result.media_count",
    ]),
    reel: {
      shortcode,
      url: reelUrl,
      views: extractNumber(reel, [
        "data.play_count",
        "data.video_view_count",
        "data.view_count",
        "data.views",
        "result.play_count",
        "result.video_view_count",
      ]),
      likes: extractNumber(reel, [
        "data.like_count",
        "data.edge_media_preview_like.count",
        "data.likes",
        "result.like_count",
      ]),
      comments: extractNumber(reel, [
        "data.comment_count",
        "data.edge_media_to_comment.count",
        "data.comments",
        "result.comment_count",
      ]),
      caption: extractString(reel, [
        "data.caption.text",
        "data.edge_media_to_caption.edges.0.node.text",
        "data.caption",
        "result.caption",
      ]),
      thumbnail: extractString(reel, [
        "data.thumbnail_url",
        "data.display_url",
        "data.image_versions2.candidates.0.url",
        "thumbnail",
        "result.thumbnail_url",
      ]),
    },
  };
}

function parseMetric(value) {
  if (value === undefined || value === null || value === "") return 0;
  if (typeof value === "number") return value;
  const cleaned = String(value)
    .replace(/,/g, "")
    .replace(/\s/g, "")
    .toLowerCase();
  const multipliers = { k: 1e3, m: 1e6, b: 1e9 };
  const match = cleaned.match(/^([0-9.]+)([kmb]?)$/);
  if (!match) return Number(cleaned) || 0;
  const num = parseFloat(match[1]);
  const mult = multipliers[match[2]] || 1;
  return Math.round(num * mult);
}

function getPath(obj, path) {
  return path.split(".").reduce((acc, key) => {
    if (acc == null) return undefined;
    if (Array.isArray(acc) && /^\d+$/.test(key)) return acc[Number(key)];
    return acc[key];
  }, obj);
}

function extractNumber(obj, paths) {
  for (const path of paths) {
    const value = getPath(obj, path);
    if (value !== undefined && value !== null) {
      const num = Number(value);
      if (!Number.isNaN(num)) return num;
    }
  }
  return 0;
}

function extractString(obj, paths) {
  for (const path of paths) {
    const value = getPath(obj, path);
    if (typeof value === "string" && value.trim() !== "") return value.trim();
  }
  return "";
}
