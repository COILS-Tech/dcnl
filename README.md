# Dominion City Netherlands Website

Modern church website for Dominion City Amsterdam and Rotterdam branches.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit: `http://localhost:3000`  
Studio (CMS): `http://localhost:3000/studio`

## 🔑 Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=d5txu8px
NEXT_PUBLIC_SANITY_DATASET=production
```

## 📦 Deployment to Vercel

### 1. Push to GitHub (Already Done ✅)

### 2. Import to Vercel
- Go to [vercel.com](https://vercel.com)
- Click "Add New Project"
- Import from GitHub: `COILS-Tech/dcnl`

### 3. Configure Environment Variables
In Vercel project settings, add:

**Environment Variables:**
```
NEXT_PUBLIC_SANITY_PROJECT_ID=d5txu8px
NEXT_PUBLIC_SANITY_DATASET=production
```

### 4. Deploy
- Vercel will auto-deploy on every push to `main`
- Production URL: `dominioncitynl.org`

### 5. Add Custom Domain
In Vercel project settings:
- Domains → Add Domain
- Add: `dominioncitynl.org`
- Add: `www.dominioncitynl.org`

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **CMS:** Sanity Studio
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel

## 📝 Content Management

Access the CMS at `/studio` to manage:
- ✅ Branch information (Amsterdam, Rotterdam)
- ✅ Events and announcements
- ✅ Leadership team
- ✅ Sermons
- ✅ Instagram highlights

## 🌐 CORS Configuration

Production domains already configured:
- ✅ `https://dominioncitynl.org`
- ✅ `https://www.dominioncitynl.org`

## 📱 Features

- Modern River Church-inspired design
- Responsive mobile-first layout
- Auto-rotating hero carousels
- Branch-specific pages
- Google Maps integration
- Instagram photo galleries
- Sanity CMS for easy content updates

---

Built with ❤️ for Dominion City Netherlands
