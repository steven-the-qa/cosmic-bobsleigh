# Honeyz Adventures 🌟

A personal adventure tracking website built with Astro, where my wife and I document our travels, experiences, and collections as we explore the world together.

**🌐 Visit the site: <a href="https://cosmicbobsleigh.com" target="_blank" rel="noopener noreferrer">cosmicbobsleigh.com</a>**

## 🎯 What This Website Is For

**Honeyz Adventures** is our personal travel and experience documentation platform where we track our adventures together as collectible experiences across multiple categories. Think of it as our digital scrapbook where every visit, every meal, and every destination becomes part of our growing collection of shared memories.

### 🏞️ **Places & Attractions**
- **Lighthouses**: Our quest to visit every lighthouse, organized into Door County lighthouses and others we discover
- **Wisconsin State Parks**: Our mission to explore all 50 Wisconsin state parks together
- **Door County Parks**: Collecting visits to all 20 official Door County parks with our photos and experiences

### 🌍 **Travel Collections**
- **US States**: Our progress tracking through all 50 United States as a couple
- **Canadian Provinces**: Adventures we share across Canada's provinces and territories  
- **Countries**: Our international travel collection (Spain, Canada, Mexico)

### 🍽️ **Food & Dining Adventures**
- **Darden Restaurants**: Our fun quest to visit every Darden restaurant chain location together
- **Starbucks Reserve Roasteries**: Collecting visits to all 6 exclusive Starbucks Reserve Roasteries worldwide

## ✨ Key Features

- **📱 Responsive Design**: Perfect for viewing our adventures on any device
- **🖼️ Photo Galleries**: Rich visual documentation of our experiences with loading animations
- **📝 Blog Integration**: Detailed blog posts where we share stories from our adventures
- **🎨 Modern UI**: Dark theme with emerald accents and smooth animations
- **📊 Progress Tracking**: Visual cards showing our completion status as we collect experiences
- **🔍 Organized Navigation**: Dropdown menus categorizing our different adventure types

## 🛠️ Technical Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Language**: TypeScript for type safety
- **Content**: Markdown-based blog posts with frontmatter
- **Deployment**: Static site ready for any hosting platform

## 📁 Project Structure

```
/
├── public/                    # Static assets (our photos, favicon)
│   ├── lighthouses/          # Our lighthouse photos
│   ├── wisconsin-state-parks/ # Our state park photos
│   ├── darden/               # Our restaurant photos
│   └── starbucks-reserve-roasteries/ # Our coffee shop photos
├── src/
│   ├── content/
│   │   └── blog/             # Our markdown blog posts
│   ├── data/
│   │   └── collections.ts    # Our adventure collections data
│   ├── layouts/
│   │   └── MainLayout.astro  # Main page layout with navigation
│   ├── pages/
│   │   ├── index.astro       # Homepage with our collection grid
│   │   ├── blog/[id].astro   # Dynamic blog post pages
│   │   └── collections/[id].astro # Dynamic collection pages
│   ├── styles/
│   │   └── global.css        # Global styles
│   └── types.ts              # TypeScript type definitions
└── package.json
```

## 📝 Adding New Adventures

When we complete new adventures together:

1. **Add our photos** to the appropriate folder in `/public/`
2. **Update collections data** in `/src/data/collections.ts`
3. **Create blog posts** in `/src/content/blog/` for our detailed stories
4. **Build and deploy** to see our new adventures live

## 🌟 Collection Categories

We organize our adventures into three main navigation categories:

- **Places**: Location-based adventures we explore together (lighthouses, parks)
- **Travel**: Geographic exploration as a couple (states, provinces, countries)  
- **Food & Drink**: Our culinary adventures and restaurant chain collections

## 💕 Our Adventure Philosophy

Every experience we share becomes a collectible memory. Whether it's climbing a lighthouse, hiking through a state park, trying a new restaurant, or exploring a new country, we document it all as part of our growing collection of adventures together.

---

*Built with ❤️ by us, for us, to document and share our amazing adventures and experiences as a couple.*

