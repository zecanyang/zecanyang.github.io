# Academic Personal Website

A modern, responsive personal website designed for computer science researchers and academics. This website showcases research achievements, academic experience, and community service with a clean, professional design optimized for academic portfolios.

## Website Overview

This is a comprehensive academic personal website featuring cutting-edge research in robust and interpretable machine learning, probabilistic modeling, and tensor analysis, with applications in image processing, data prediction, and spatio-temporal data analysis.

## Key Features

### 🎨 Modern Design
- **Responsive Layout**: Perfectly adapted for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional academic-style design
- **Smooth Animations**: Fluid scrolling effects and interactive animations
- **Elegant Color Scheme**: Professional academic color palette

### 📱 Interactive Features
- **Smart Navigation**: Smooth scrolling navigation and mobile hamburger menu
- **Dynamic Effects**: Typing animations, counter animations, hover effects
- **Content Display**: Collapsible news and publications lists
- **Statistics Display**: Automatic calculation and display of academic statistics

### 🎓 Academic Content
- **Personal Profile**: Research interests, skill tags, and key statistics
- **Academic Experience**: Work experience and educational background timeline
- **Research Output**: Complete academic publications list with first author, corresponding author identification
- **Latest Updates**: Academic news and important updates
- **Community Service**: Academic service and review experience

## Website Structure

```
├── index.html              # Main page file
├── styles.css              # Stylesheet and responsive design
├── script.js               # Interactive features and animations
├── Fig/                    # Image resources folder
│   └── zecanyang.jpg      # Personal photo
├── sections/               # Page modules folder
│   ├── hero.html          # Homepage hero section
│   ├── about.html         # About section
│   ├── experience.html    # Experience & Education
│   ├── news.html          # News & Updates
│   ├── publications.html  # Academic Publications
│   ├── community.html     # Community Service
│   ├── contact.html       # Contact Information
│   └── footer.html        # Footer information
└── README.md              # Project documentation
```

## Technical Features

### Frontend Technologies
- **HTML5**: Semantic tags, SEO-friendly
- **CSS3**: Modern CSS features, Grid and Flexbox layouts
- **JavaScript ES6+**: Modular code, modern JavaScript features
- **Font Awesome**: Icon library support
- **Google Fonts**: Inter font for enhanced reading experience

### Performance Optimization
- **Lazy Loading**: Delayed loading of images and content
- **Intersection Observer**: Efficient scroll animations
- **CSS Optimization**: Minimal external dependencies
- **Code Splitting**: Modular HTML structure

### Responsive Design
- **Mobile First**: Design starting from mobile devices
- **Breakpoint Design**: Key breakpoints at 768px, 480px, etc.
- **Flexible Layout**: Flexible use of Grid and Flexbox
- **Touch Friendly**: Mobile interaction optimization

## Deployment Instructions

### GitHub Pages Deployment
1. **Create Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository settings page
   - Find "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Access Website**: `https://yourusername.github.io`

### Local Development
1. **Clone Project**:
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```

2. **Start Local Server**:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using Node.js
   npx serve .
   ```

3. **Access Local Website**: `http://localhost:8000`

## Customization Guide

### Personal Information Updates
1. **Basic Information**: Edit name, position, and introduction in `sections/hero.html`
2. **Personal Photo**: Replace `Fig/zecanyang.jpg` with your photo
3. **Contact Information**: Update contact details in `sections/contact.html`
4. **Social Media**: Add or modify social media links

### Academic Content Updates
1. **Research Interests**: Update skill tags in `sections/about.html`
2. **Academic Experience**: Update work experience and educational background in `sections/experience.html`
3. **Publications**: Add new academic papers in `sections/publications.html`
4. **News Updates**: Add latest academic news in `sections/news.html`

### Style Customization
- **Color Scheme**: Modify color variables in `styles.css`
- **Typography**: Change Google Fonts font links
- **Layout**: Adjust Grid and Flexbox layout parameters
- **Animations**: Customize CSS animation effects

## Browser Compatibility

- ✅ Chrome (Latest version)
- ✅ Firefox (Latest version)
- ✅ Safari (Latest version)
- ✅ Edge (Latest version)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Metrics

- **Loading Speed**: Optimized CSS and JavaScript for fast loading
- **Response Time**: Efficient Intersection Observer for smooth animations
- **Mobile Experience**: Touch interaction optimized for mobile devices
- **SEO Friendly**: Semantic HTML structure for better search engine ranking

## Features Showcase

### Interactive Elements
- **Smooth Scrolling**: Seamless navigation between sections
- **Typing Animation**: Dynamic text animation for hero title
- **Counter Animation**: Animated statistics counters
- **Hover Effects**: Interactive hover states for all elements
- **Mobile Menu**: Responsive hamburger menu for mobile devices

### Content Management
- **Dynamic Statistics**: Automatic calculation of publication counts
- **Collapsible Lists**: Show/hide functionality for news and publications
- **Featured Content**: Highlighted important publications and news
- **Responsive Images**: Optimized image loading and display

### Academic Focus
- **Publication Categories**: First author, corresponding author, co-author badges
- **Research Timeline**: Visual timeline for academic and professional experience
- **Community Service**: Organized display of academic service activities
- **Contact Integration**: Easy access to contact information and social links

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Issues and Pull Requests are welcome! If you have suggestions or find any issues, please feel free to contact us.

## Support

If you have any questions or need help customizing the website, please open an issue in the repository.

---

**Note**: This is an academic personal website template. Please customize all placeholder content with your actual information. All placeholder content needs to be replaced with your real information before deployment.
