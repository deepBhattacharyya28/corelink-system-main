#!/bin/bash

# CoreLink System Deployment Script
echo "🚀 Building CoreLink React System for deployment..."

# Build the project
npm run build

echo "✅ Build completed successfully!"
echo "📁 Built files are in the 'dist' directory"
echo ""
echo "📋 Next steps for GitHub Pages deployment:"
echo "1. Copy the contents of the 'dist' folder to your GitHub Pages repository"
echo "2. Or use the GitHub Actions workflow in .github/workflows/deploy.yml"
echo "3. Make sure GitHub Pages is configured to serve from the correct branch/folder"
echo ""
echo "🌐 Your CoreLink System is ready for deployment!"
