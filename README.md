# Rise & Shine Counselling — Website

Website for Kendall Pruden, M.A., MCPC — Rise & Shine Counselling, Saskatoon, SK.

## Stack

- **Next.js 15** (App Router)
- **Tailwind CSS 3** (custom warm/sage/gold palette)
- **Playfair Display + Inter** (via next/font/google)
- **Resend** (optional — for email notifications on form submissions)

---

## Setup

### 1. Install dependencies

```bash
cd rise-and-shine-counselling
npm install
```

### 2. Add Kendall's photos

Place the following images in `public/images/`:

| File | Used On | Recommended Shot |
|------|---------|-----------------|
| `kendall-hero.jpg` | Home page hero | Sitting on steps photo |
| `kendall-about.jpg` | About page hero + home teaser | Leaning against wall photo |
| `kendall-2.jpg` | About page quote section | Second portrait photo |

Any JPG/PNG works. Aim for portrait orientation (3:4 or 4:5 ratio) for best results.

### 3. Enable email notifications (optional but recommended)

1. Sign up free at [resend.com](https://resend.com)
2. Create an API key
3. Copy `.env.local.example` to `.env.local` and paste your key:

```bash
cp .env.local.example .env.local
```

```
RESEND_API_KEY=re_your_key_here
```

Without this, forms still work — submissions are logged to the server console but no email is sent.

> **Note on the sender address:** Resend requires a verified sending domain. You can either verify `riseandshinecounselling.net` in Resend's dashboard, or temporarily use Resend's onboarding domain (`onboarding@resend.dev`) while testing by updating the `from` field in `app/api/contact/route.ts`.

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services overview, about teaser, workshop spotlight, CTA |
| `/about` | Full bio, therapy approaches (CBT/EFT), session formats, quote |
| `/services` | Who she works with, concerns, approaches, how to book |
| `/workshops` | Blossoming Workshop details + registration interest form |
| `/contact` | Booking request form — collects details so Kendall can call back |

---

## Deploying to Vercel

```bash
npm i -g vercel
vercel
```

On first run, Vercel will ask you to link or create a project. After that:

```bash
vercel env add RESEND_API_KEY   # add your Resend API key
vercel --prod                   # deploy to production
```

Or connect the GitHub repo in the Vercel dashboard for automatic deployments on push.

---

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| `sage-600` | `#3d7343` | Primary buttons, nav accent |
| `gold-500` | `#c49a3c` | Gold CTAs, highlights |
| `warm-50` | `#faf7f2` | Page background |
| `warm-900` | `#2e1e14` | Footer background, dark text |
