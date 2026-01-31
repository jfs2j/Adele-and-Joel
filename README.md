
# Joel & Adele Wedding Website

An elegant, production-quality React single-page wedding website designed for Joel Sop and Adele Guessom.

## Features
- **Responsive Design**: Mobile-first layout using Tailwind CSS..
- **Interactive Forms**: RSVP and Accommodation forms with client-side validation.
- **Animations**: Subtle scroll-triggered fade-ins using Framer Motion.
- **Accessibility**: Semantic HTML and WCAG AA considerations.
- **Custom Aesthetic**: Sage green, gold, and white palette with botanical accents.

## Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

## Deployment to GitHub Pages

1. **Update `package.json`**:
   Add a `homepage` field:
   ```json
   "homepage": "https://username.github.io/repo-name"
   ```

2. **Install `gh-pages`**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add Deploy Scripts**:
   In `package.json`, add:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. **Run Deployment**:
   ```bash
   npm run deploy
   ```

## Customization
- **Our Story**: Located in `App.tsx` within the `#story` section.
- **Timeline/FAQ**: Managed in `constants.tsx` for easy updates.
- **Colors**: Hex codes are defined globally in `index.html` and `constants.tsx`.
