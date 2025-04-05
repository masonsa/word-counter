# Word Counter Tool

A modern, clean, and privacy-focused word counter web application built with React and Tailwind CSS.

## Features

- Real-time word, character, and sentence counting
- Character count with and without spaces
- Paragraph counting
- Estimated reading time calculation
- Copy text to clipboard
- Download text as .txt file
- Mobile-responsive design
- SEO-friendly
- AdSense-ready
- Privacy-focused (no backend, no tracking)

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Heroicons

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `dist` directory.

## Deployment

### Netlify Deployment

1. Create a Netlify account at [https://app.netlify.com](https://app.netlify.com)

2. Install Netlify CLI (optional):
   ```bash
   npm install -g netlify-cli
   ```

3. Deploy using one of these methods:

   A. **Using Netlify CLI**:
   ```bash
   # Login to Netlify
   netlify login
   
   # Initialize Netlify
   netlify init
   
   # Deploy to Netlify
   netlify deploy --prod
   ```

   B. **Using GitHub**:
   1. Push your code to GitHub
   2. In Netlify dashboard:
      - Click "New site from Git"
      - Choose your repository
      - Set build command: `npm run build`
      - Set publish directory: `dist`
      - Click "Deploy site"

   C. **Drag and Drop**:
   1. Build your project:
      ```bash
      npm run build
      ```
   2. Drag the `dist` folder to Netlify's deploy area

4. **Environment Variables** (if needed):
   - In Netlify dashboard, go to Site settings > Build & deploy > Environment
   - Add any required environment variables

5. **Custom Domain** (optional):
   - In Netlify dashboard, go to Domain settings
   - Add your custom domain
   - Follow the DNS configuration instructions

## Privacy

This application runs entirely in the browser. No data is sent to any server or stored anywhere. All text processing happens locally on your device.

## License

MIT "# word-counter" 
