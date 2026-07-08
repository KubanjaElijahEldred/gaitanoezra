

# Gaitano Ezra — Portfolio

A React + Vite portfolio for Gaitano Ezra, a Kampala-based digital creator.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env.local` and fill in any required values.
3. Run the app:
   ```bash
   npm run dev
   ```

## Featured Reel & Live Instagram Stats

The portfolio includes a live stats panel for the featured reel:
`https://www.instagram.com/reel/DaNpsp2KCYF/`

Stats refresh automatically every 30 seconds and can be refreshed manually.

### Data providers

The `/api/instagram` endpoint supports two providers, controlled by `INSTAGRAM_API_PROVIDER`:

#### 1. Manual (default)

Set the current numbers as environment variables in your Vercel dashboard:

- `INSTAGRAM_FOLLOWERS`
- `REEL_VIEWS`
- `REEL_LIKES`
- `REEL_COMMENTS`
- `REEL_THUMBNAIL` (optional)

Values like `12.5K`, `3.8M`, or `45,678` are supported.

#### 2. RapidAPI (true real-time)

For automatic real-time updates, subscribe to an Instagram scraper API on RapidAPI (e.g. `instagram-scraper-api2`) and set:

- `INSTAGRAM_API_PROVIDER=rapidapi`
- `RAPIDAPI_KEY=your_rapidapi_key`
- `RAPIDAPI_HOST=instagram-scraper-api2.p.rapidapi.com`

### Deploy on Vercel

This project is configured for Vercel. Serverless functions live in the `api/` directory

```bash
vercel
```

For local testing of the API route, use:

```bash
vercel dev
```
