# Netlify Deployment Troubleshooting Guide

## Common Issues and Solutions

### 1. Blank Page After Deployment

**Most Common Cause: Missing Environment Variables**

Your app uses Supabase, which requires environment variables. If these aren't set in Netlify, the app will fail silently.

**Solution:**
1. Go to your Netlify site dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Add these variables:
   - `VITE_SUPABASE_URL` = `https://elqoohgpmfqyiliybkjk.supabase.co`
   - `VITE_SUPABASE_ANON_KEY` = `sb_publishable_vxolj2B74LUw07DJTUvVvQ_AEw9tNEp`
4. **Redeploy** your site after adding variables

### 2. Check Browser Console

Open your deployed site and check the browser console (F12) for errors:
- Red errors indicate JavaScript failures
- Network errors indicate missing files
- CORS errors indicate configuration issues

### 3. Verify Build Settings

In Netlify dashboard:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- These should match your `netlify.toml` file

### 4. Check Deploy Logs

1. Go to **Deploys** tab in Netlify
2. Click on the latest deploy
3. Check for:
   - Build errors
   - Missing dependencies
   - Environment variable warnings

### 5. Test Locally First

Before deploying, test the production build locally:
```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` and test all routes.

### 6. Clear Cache

Sometimes Netlify caches old builds:
1. Go to **Deploys**
2. Click **Trigger deploy** → **Clear cache and deploy site**

## Files That Should Be in Your Repo

- ✅ `netlify.toml` - Netlify configuration
- ✅ `public/_redirects` - Redirect rules for React Router
- ✅ Both files should be committed to git

## Quick Fix Checklist

- [ ] Environment variables set in Netlify
- [ ] `netlify.toml` is in the repo root
- [ ] `public/_redirects` exists and is committed
- [ ] Build completes successfully (check deploy logs)
- [ ] No JavaScript errors in browser console
- [ ] Cleared cache and redeployed

