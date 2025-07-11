# CoreLink React System

> Professional IT solutions website built with React.js, featuring dark/light theme toggle, responsive design, and modern UI components

![CoreLink System](https://img.shields.io/badge/React-18.3.1-blue.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-yellow.svg)
![Vite](https://img.shields.io/badge/Vite-5.4.10-purple.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.11-blue.svg)

## 🌟 Features

### 🎨 **Modern Design & UI**
- **Professional IT Service Website** with clean, modern interface
- **Responsive Design** that works seamlessly across desktop, tablet, and mobile
- **Glassmorphism Effects** with backdrop blur and gradient overlays
- **Smooth Animations** and hover effects throughout the interface

### 🌙 **Advanced Theme System**
- **Dark/Light Mode Toggle** with smooth transitions
- **System Preference Detection** - automatically detects user's preferred theme
- **Theme Persistence** - remembers user's choice across browser sessions
- **Professional Color Palette** optimized for both light and dark themes

### 📱 **Enhanced Mobile Experience**
- **Improved Mobile Navigation** with animated hamburger menu
- **Consistent Spacing** - fixed gap issues with symmetrical padding
- **Touch-Friendly Interface** with appropriate button sizes
- **Mobile-Optimized Typography** that scales properly across screen sizes

### 🎯 **Core Sections**
- **Hero Section** - Compelling introduction with call-to-action buttons
- **About Us** - Company information with statistics and team details
- **Services** - IT solutions including hardware support, web development, and design
- **Contact** - Interactive contact form with multiple contact methods
- **Footer** - Company links and social media integration

### 🔧 **Technical Features**
- **React.js 18.3.1** with modern hooks and context API
- **JavaScript (ES2020)** - converted from TypeScript for simplicity
- **Vite Build System** for fast development and optimized production builds
- **Tailwind CSS** for utility-first styling
- **shadcn/ui Components** for consistent, accessible UI elements

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/corelink-react-system.git
   cd corelink-react-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 📁 Project Structure

```
corelink-react-system/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Navbar.jsx    # Enhanced navigation with theme toggle
│   │   ├── Hero.jsx      # Hero section component
│   │   ├── AboutUs.jsx   # About section component
│   │   ├── Services.jsx  # Services showcase
│   │   ├── Contact.jsx   # Contact form and info
│   │   ├── Footer.jsx    # Footer component
│   │   └── ThemeToggle.jsx # Theme switching component
│   ├── contexts/          # React contexts
│   │   └── ThemeContext.jsx # Theme management
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles and CSS variables
├── components.json        # shadcn/ui configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── package.json          # Project dependencies and scripts
```

## 🎨 Theme System

The application features a comprehensive dark/light theme system:

### Theme Toggle Usage
```jsx
import { useTheme } from './contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme, isDark } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
```

### CSS Custom Properties
The theme system uses CSS custom properties for seamless switching:

```css
:root {
  --primary: 217 91% 60%;
  --background: 0 0% 100%;
  /* ... other light theme variables */
}

.dark {
  --primary: 217 91% 65%;
  --background: 222 84% 4%;
  /* ... other dark theme variables */
}
```

## 📱 Mobile Enhancements

### Navbar Improvements
- **Enhanced Positioning**: Navbar positioned with top margin and rounded corners
- **Responsive Theme Toggle**: Properly positioned on both desktop and mobile
- **Improved Hamburger Menu**: Larger icons with smooth animations
- **Better Touch Targets**: Optimized button sizes for mobile interaction

### Responsive Design
- **Consistent Spacing**: Uniform padding across all screen sizes
- **Flexible Layouts**: Grid systems that adapt to different screen sizes
- **Mobile-First Approach**: Designed for mobile and enhanced for larger screens

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and proprietary to CoreLink System.

## 🤝 Contributing

This is a private repository. For internal development guidelines, please contact the development team.

---

**CoreLink System** - Empowering Your Digital Future
