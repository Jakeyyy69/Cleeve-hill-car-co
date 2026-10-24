# Setup (one time)
1. Install Node (nodejs.org). Make a free account at sanity.io and create a project (dataset: production). Copy its Project ID.
2. Copy `.env.local.example` to `.env.local` and paste the Project ID in.
3. In sanity.io/manage > your project > API > CORS origins, add http://localhost:3000 (tick "Allow credentials").
4. In the VS Code terminal: `npm install` then `npm run dev`. Open http://localhost:3000/studio, log in, add your cars.
5. Edit `lib/site.ts` with your real phone, WhatsApp, email and address. Put a wide photo at `public/hero.jpg`.
# Go live (free)
Put the folder on GitHub, import it at vercel.com, add the 3 variables from `.env.local` (set NEXT_PUBLIC_SITE_URL to your live address), deploy.
Then add your live address to the Sanity CORS origins (with credentials), so /studio works there.
# Adding a car from your phone
Open yourdomain/studio, log in, Create > Car, fill in details, tap Photos > Upload (pick from camera roll), Publish. Live in about a minute.
