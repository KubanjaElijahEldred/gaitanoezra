/**
 * Shared Instagram configuration used by both the frontend (src/data.ts)
 * and the Vercel API endpoint (api/instagram.js).
 *
 * Keeping defaults in one file guarantees the deployed API and the UI fall
 * back to the same numbers when no environment variables / API key is set.
 */

export const INSTAGRAM_CONFIG = {
  username: "geatano_ezra",
  reelShortcode: "DaNpsp2KCYF",
  reelUrl:
    "https://www.instagram.com/reel/DaNpsp2KCYF/?igsh=ZWlndTg3dmN3MGpj",
  defaults: {
    followers: 728,
    following: 0,
    posts: 0,
    reel: {
      views: 4_700_000,
      likes: 59_700,
      comments: 29,
    },
  },
};
