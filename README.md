# Academic Personal Website

A modern, responsive personal website designed for computer science researchers and academics. This website features a clean, professional design with smooth animations and is optimized for GitHub Pages deployment.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Academic Focus**: Sections specifically designed for researchers including:
  - About section with research interests
  - Research areas showcase
  - Publications list with links
  - Contact information and social media links
- **Interactive Elements**: 
  - Smooth scrolling navigation
  - Hover effects and animations
  - Mobile-friendly hamburger menu
  - Typing animation for hero title
  - Counter animations for statistics
- **SEO Optimized**: Semantic HTML structure for better search engine visibility
- **Fast Loading**: Optimized CSS and JavaScript for quick page loads

## Sections

1. **Hero Section**: Introduction with your name, title, and call-to-action buttons
2. **About**: Personal information, research interests, and key statistics
3. **Research**: Showcase of your main research areas with icons and descriptions
4. **Publications**: List of your academic publications with links to PDFs, code, and citations
5. **Contact**: Contact information and social media links

## Customization

### Personal Information
Edit the following in `index.html`:

- Replace "Your Name" with your actual name
- Update the hero subtitle and description
- Add your actual photo URL (replace the placeholder)
- Update contact information (email, location, phone)
- Add your social media links

### Research Areas
In the research section, update:
- Research area titles and descriptions
- Icons (using Font Awesome classes)
- Add or remove research items as needed

### Publications
For each publication, update:
- Publication title
- Author list
- Venue/journal name
- Publication year
- Links to PDF, code, and citation

### Styling
The website uses a modern color scheme with:
- Primary color: #4f46e5 (Indigo)
- Secondary color: #7c3aed (Purple)
- Accent color: #fbbf24 (Amber)

You can customize colors in `styles.css` by updating the CSS custom properties.

## Deployment on GitHub Pages

1. **Create a GitHub repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Your website will be available at**: `https://yourusername.github.io`

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized CSS with minimal external dependencies
- Efficient JavaScript with intersection observers
- Responsive images and lazy loading
- Fast loading times on all devices

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this project and customize it for your own use. If you make improvements that could benefit others, pull requests are welcome!

## Support

If you have any questions or need help customizing the website, please open an issue in the repository.

---

**Note**: Remember to replace all placeholder content with your actual information before deploying your website.
