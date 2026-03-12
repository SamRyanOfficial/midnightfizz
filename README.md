# Musician Website Template

A ready-to-use website template for musicians. Add your photos, YouTube links, contact info, social media, reviews, and upcoming shows — then deploy to the web in minutes.

**Perfect for:** Solo artists, duos, bands, wedding musicians, and anyone who wants a professional online presence without coding from scratch.

---

## 🚀 Quick Start (3 Steps)

### Step 1: Get Your Own Copy

Click the green **"Use this template"** button on this repo (top right). This creates a new repository in your GitHub account with a copy of the template — ready for you to customize.

### Step 2: Deploy to Vercel (Free)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Click the **Deploy with Vercel** button above
2. Sign in with GitHub (free account)
3. **Import** — Select the repository you just created from the template (it will be in your GitHub account)
4. Click **Deploy**
5. In about 2 minutes, you'll get a live URL like `your-band.vercel.app`

### Step 3: Add Your Content

Edit the config files in your repo. Everything is in one place — no hunting through code.

| What to edit | File location |
|--------------|---------------|
| Band name, tagline, location | `src/config/site.ts` |
| Phone, email, social links | `src/config/contact.ts` |
| About section (bio, stats, quote) | `src/data/about.ts` |
| YouTube videos | `src/data/music.ts` |
| Upcoming shows | `src/data/shows.ts` |
| Gallery photos | `src/data/gallery.ts` |
| Reviews / testimonials | `src/data/reviews.ts` |
| FAQ questions | `src/config/faq.ts` |

---

## 📧 Contact Form Setup (Resend)

The contact form sends emails via [Resend](https://resend.com). It's free to start.

1. **Create a Resend account** at [resend.com](https://resend.com)
2. **Get your API key** from the Resend dashboard
3. **Add it to Vercel:**
   - Go to your project on [vercel.com](https://vercel.com)
   - Settings → Environment Variables
   - Add `RESEND_API_KEY` = your key
   - Add `CONTACT_EMAIL` = the email where you want form submissions (e.g. `you@email.com`)
4. **Redeploy** your site (Vercel → Deployments → ⋮ → Redeploy)

Until you add these, the contact form will show a friendly error asking visitors to email you directly.

---

## 🖼️ Adding Your Photos

1. Create a folder: `public/images/`
2. Add your images (e.g. `hero.jpg`, `logo.png`, `gallery-1.jpg`)
3. Edit `src/data/gallery.ts` — change the placeholder URLs to your images:
   ```ts
   { src: "/images/gallery-1.jpg", alt: "Description of photo" }
   ```
4. Edit `src/components/Hero.tsx` — replace the hero image URL with `/images/hero.jpg`

---

## 🎬 Adding YouTube Videos

1. Open your video on YouTube
2. Copy the video ID from the URL: `youtube.com/watch?v=**THIS_PART**`
3. Edit `src/data/music.ts` — add the ID to the `youtubeVideos` array
4. Update `youtubeChannelUrl` with your full channel link

---

## 🛠️ Running Locally (Optional)

If you want to preview changes before deploying:

1. **Install Node.js** from [nodejs.org](https://nodejs.org) (LTS version)
2. **Open a terminal** in the project folder
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

---

## 📁 Project Structure

```
src/
├── config/          ← Site-wide settings
│   ├── site.ts      (name, tagline, metadata)
│   ├── contact.ts   (phone, email, social links)
│   ├── contact-api.ts
│   └── faq.ts
├── data/            ← Your content
│   ├── about.ts
│   ├── gallery.ts
│   ├── music.ts     (YouTube)
│   ├── reviews.ts
│   └── shows.ts
├── components/      ← UI (edit only if customizing)
└── app/             ← Pages and API
```

---

## ❓ Common Questions

**Can I use my own domain?**  
Yes. In Vercel: Settings → Domains → Add your domain. You may need to update DNS at your domain provider.

**Can I remove sections I don't need?**  
Yes. Edit `src/app/page.tsx` and remove or comment out the component imports and usage for sections you don't want (e.g. FAQ, Shows).

**How do I change the colors?**  
The template uses neutral slate/gray. To customize: edit `src/app/globals.css` (CSS variables) and replace `slate-` with your preferred Tailwind color (e.g. `blue-`, `emerald-`) in the component files.

**Is this really free?**  
Yes. Vercel's free tier and Resend's free tier are enough for most musicians. You only pay if you outgrow them.

---

## 📄 License

MIT — use it for personal or commercial projects.

---

**Need help?** Open an issue on GitHub or check the [Next.js docs](https://nextjs.org/docs) for deeper customization.

---

## For Template Repository Owners

Before sharing this template:

1. **Push to GitHub** — Create a new repo and push this project
2. **Enable template** — Repo Settings → check "Template repository"
