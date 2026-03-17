# SwiftCanvas 🍎
**Build iOS apps visually — no Mac required.**

A browser-based iOS app builder with drag-and-drop components, live SwiftUI code generation, AI-powered canvas editing, and Xcode project export.

---

## Deploy to Netlify in 5 minutes

### Step 1 — Upload your files
1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. From your dashboard click **"Add new site"** → **"Deploy manually"**
3. Drag the entire `swiftcanvas` folder onto the upload area
4. Your site will be live at a URL like `https://rainbow-sunshine-abc123.netlify.app`

### Step 2 — Add your Anthropic API key

This is where you store your key so it never appears in your code:

1. In Netlify, go to your site dashboard
2. Click **"Site configuration"** in the left sidebar
3. Click **"Environment variables"**
4. Click **"Add a variable"**
5. Set:
   - **Key:** `ANTHROPIC_API_KEY`
   - **Value:** `sk-ant-api03-...` ← paste your actual key here
6. Click **Save**
7. Go to **Deploys** tab → click **"Trigger deploy"** → **"Deploy site"**

Your AI features are now live. 🎉

### Step 3 — Custom domain (optional)
1. In Netlify go to **Domain management**
2. Click **Add custom domain**
3. Enter your domain (e.g. `swiftcanvas.app`)
4. Follow DNS instructions

---

## File structure
```
swiftcanvas/
├── index.html              ← The entire app (single file)
├── netlify.toml            ← Netlify routing config
├── netlify/
│   └── edge-functions/
│       └── inject-key.js  ← Securely injects API key at runtime
└── README.md
```

---

## How the API key injection works

The edge function (`inject-key.js`) runs on Netlify's servers every time someone loads your site. It reads `ANTHROPIC_API_KEY` from your private Netlify environment and injects it into the HTML **at runtime** — it never touches your source code or GitHub repo.

This means:
- ✅ Your key is private (not in any file)
- ✅ Safe to push code to GitHub publicly
- ✅ Rotatable anytime via Netlify dashboard

---

## Getting your Anthropic API key

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign up or log in
3. Navigate to **API Keys** in the left menu
4. Click **Create Key**
5. Copy the key — it looks like `sk-ant-api03-xxxxxxxx...`
6. Paste it into Netlify (see Step 2 above)

> **Cost:** ~$0.01–0.03 per AI canvas generation. Very cheap.

---

## Adding Stripe payments (for credits)

When you're ready to charge for exports:

1. Sign up at [stripe.com](https://stripe.com)
2. Create a product: "SwiftCanvas Credits"
3. Create payment links for each credit pack
4. Replace the `btn-buy` button href in `index.html` with your Stripe payment link
5. Use Stripe webhooks to update credit balances

---

## Local development

Just open `index.html` in any browser — no build step needed.

To use AI locally, add your key directly in `index.html` (line ~60):
```javascript
const ANTHROPIC_API_KEY = 'sk-ant-api03-...'; // Remove before committing!
```

---

Built with ❤ using Claude + SwiftUI knowledge
