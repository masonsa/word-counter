GOOGLE ADSENSE AND ANALYTICS CONFIGURATION GUIDE
============================================

1. GOOGLE ANALYTICS SETUP
------------------------
1. Go to https://analytics.google.com/
2. Create a new property or select an existing one
3. Get your Measurement ID (starts with "G-")
4. Replace "G-XXXXXXXXXX" in index.html with your actual Measurement ID:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```

2. GOOGLE ADSENSE SETUP
----------------------
1. Go to https://www.google.com/adsense/
2. Sign up for an AdSense account if you don't have one
3. Get your publisher ID (starts with "ca-pub-")
4. Create ad units for:
   - Top banner ad
   - Inline content ad
   - Sticky footer ad

5. Replace the following in index.html:
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXX"
    crossorigin="anonymous"></script>
   ```
   Replace "ca-pub-XXXXXXXXXXXX" with your actual publisher ID

6. For each ad unit in App.tsx, replace:
   - "ca-pub-XXXXXXXXXXXX" with your publisher ID
   - "XXXXXXXXXX" with your ad slot ID

   Example:
   ```html
   <ins className="adsbygoogle"
     style={{ display: 'block' }}
     data-ad-client="ca-pub-XXXXXXXXXXXX"
     data-ad-slot="XXXXXXXXXX"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
   ```

3. DOMAIN CONFIGURATION
----------------------
1. Update all instances of "wordcounter.example.com" with your actual domain
2. Update the sitemap.xml with your domain
3. Update robots.txt with your domain
4. Update Open Graph and Twitter card meta tags with your actual images

4. VERIFICATION
--------------
1. Verify your domain in Google Search Console
2. Submit your sitemap.xml to Google Search Console
3. Wait 24-48 hours for AdSense approval
4. Monitor your Analytics dashboard for traffic data

5. TROUBLESHOOTING
-----------------
1. If ads don't appear:
   - Check if your AdSense account is approved
   - Verify ad code is correctly placed
   - Check browser console for errors

2. If Analytics doesn't track:
   - Verify Measurement ID is correct
   - Check if gtag.js is loading
   - Test with Google Tag Assistant

3. Common issues:
   - AdSense: "AdSense code needs to be updated"
   - Analytics: "No data in view"
   - SEO: "Page not indexed"

6. BEST PRACTICES
----------------
1. Place ads where they don't interfere with content
2. Monitor ad performance and adjust placement
3. Keep ad density below 30% of page content
4. Ensure mobile responsiveness
5. Regularly update sitemap.xml
6. Monitor Analytics for user behavior

7. CONTACT SUPPORT
-----------------
- Google AdSense Help: https://support.google.com/adsense
- Google Analytics Help: https://support.google.com/analytics
- Google Search Console Help: https://support.google.com/webmasters

Remember to:
- Keep your ad codes secure
- Follow AdSense policies
- Monitor performance regularly
- Update configurations as needed 

WORD COUNTER TOOL - LOCAL DEVELOPMENT AND DEPLOYMENT
================================================

1. GETTING STARTED
----------------
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:5173 in your browser

2. BUILDING FOR PRODUCTION
------------------------
To create a production build:
```bash
npm run build
```
The build files will be in the `dist` directory.

3. LOCAL HOSTING OPTIONS
----------------------
A. Development Server:
   ```bash
   npm run dev
   ```
   Access at http://localhost:5173

B. Production Build with Local Server:
   ```bash
   # Build the project
   npm run build
   
   # Install global server
   npm install -g serve
   
   # Serve production build
   serve -s dist
   ```
   Access at http://localhost:3000

C. Docker Option:
   Create Dockerfile:
   ```dockerfile
   # Build stage
   FROM node:18-alpine as build
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build

   # Production stage
   FROM nginx:alpine
   COPY --from=build /app/dist /usr/share/nginx/html
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

   Run Docker commands:
   ```bash
   docker build -t word-counter .
   docker run -p 8080:80 word-counter
   ```
   Access at http://localhost:8080

4. GITHUB DEPLOYMENT
------------------
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/word-counter.git
git push -u origin main
```

5. TECH STACK
-----------
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Heroicons

6. PRIVACY NOTE
-------------
This application runs entirely in the browser. No data is sent to any server or stored anywhere. All text processing happens locally on your device.

7. LICENSE
--------
MIT