# OncoInnovate - AI-Powered Oncology Solutions Portfolio

## 🚀 Quick Start

```bash
# Navigate to project
cd /Users/nickylasecki/Desktop/onco-innovate

# Install dependencies (if needed)
npm install

# Start development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Location
- **Full Path**: `/Users/nickylasecki/Desktop/onco-innovate`
- **Desktop Shortcut**: Look for the `onco-innovate` folder on your Desktop

## 🎯 Available Pages

### Main Pages
- **Homepage**: [http://localhost:3000](http://localhost:3000)
- **Contact**: [http://localhost:3000/contact](http://localhost:3000/contact)

### Product Pages
1. **NFC-Enabled Dynamic Sell Sheets**: [http://localhost:3000/products/nfc-sell-sheets](http://localhost:3000/products/nfc-sell-sheets)
2. **AI-Powered Contract Analyzer**: [http://localhost:3000/products/contract-analyzer](http://localhost:3000/products/contract-analyzer)
3. **OncoChat**: [http://localhost:3000/products/oncochat](http://localhost:3000/products/oncochat)
4. **Clinical Trial Simulator**: [http://localhost:3000/products/trial-simulator](http://localhost:3000/products/trial-simulator)

## 🛠️ Tech Stack
- **Frontend**: React.js, Next.js 15.4.6, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: Lucide React icons, Radix UI
- **Forms**: React Hook Form, Zod validation
- **Database**: SQLite (for demo requests)
- **Email**: Nodemailer (configured for demo requests)

## 📝 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for linting issues
npm run lint
```

## 🔧 Troubleshooting

### If the server won't start:
1. Make sure you're in the right directory:
   ```bash
   cd /Users/nickylasecki/Desktop/onco-innovate
   ```

2. Kill any existing processes:
   ```bash
   pkill -f "next-server"
   ```

3. Restart the server:
   ```bash
   npm run dev
   ```

### If you see module errors:
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to link to your Vercel account

### Deploy to Other Platforms
The project is configured to work with most Node.js hosting platforms. See `vercel.json` for configuration details.

## 📂 Project Structure

```
onco-innovate/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── contact/           # Contact page
│   ├── products/          # Product pages
│   │   ├── nfc-sell-sheets/
│   │   ├── contract-analyzer/
│   │   ├── oncochat/
│   │   └── trial-simulator/
│   └── api/               # API routes
│       └── demo-request/  # Demo request handler
├── components/            # React components
├── public/               # Static assets
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
└── package.json          # Dependencies

```

## 🎨 Customization

### To change colors:
Edit the color palette in `tailwind.config.ts`

### To add new products:
1. Create a new page in `app/products/[product-name]/page.tsx`
2. Add the product to the homepage grid in `components/ProductGrid.tsx`

### To modify content:
All product pages are in the `app/products/` directory and can be edited directly.

## 💾 Backup & Version Control

Your project is now saved with Git! To save future changes:

```bash
git add .
git commit -m "Your message about what changed"
```

To push to GitHub (optional):
1. Create a new repository on GitHub
2. Add the remote: `git remote add origin YOUR_GITHUB_URL`
3. Push: `git push -u origin main`

## 📞 Support

If you need to return to this project:
1. Open Terminal
2. Run: `cd /Users/nickylasecki/Desktop/onco-innovate`
3. Run: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

---

**Created with ❤️ for OncoInnovate - Revolutionizing Oncology Through AI**