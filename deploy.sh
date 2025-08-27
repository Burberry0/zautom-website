#!/bin/bash

# Manual Deployment Script for Zautom Website
# Usage: ./deploy.sh

echo "🚀 Starting deployment to cPanel..."

# Configuration
DEPLOYPATH="/home/zautom/public_html/"
BUILD_DIR="./build"

# Check if build directory exists
if [ ! -d "$BUILD_DIR" ]; then
    echo "❌ Build directory not found. Please run 'npm run build' first."
    exit 1
fi

echo "📁 Deployment path: $DEPLOYPATH"
echo "📦 Build directory: $BUILD_DIR"

# Clean old files
echo "🧹 Cleaning old website files..."
find $DEPLOYPATH -maxdepth 1 -type f -name "*.html" -delete 2>/dev/null
find $DEPLOYPATH -maxdepth 1 -type f -name "*.css" -delete 2>/dev/null
find $DEPLOYPATH -maxdepth 1 -type f -name "*.js" -delete 2>/dev/null
find $DEPLOYPATH -maxdepth 1 -type f -name "*.json" -delete 2>/dev/null
find $DEPLOYPATH -maxdepth 1 -type f -name "*.txt" -delete 2>/dev/null
find $DEPLOYPATH -maxdepth 1 -type f -name "*.ico" -delete 2>/dev/null
find $DEPLOYPATH -maxdepth 1 -type f -name "*.png" -delete 2>/dev/null
rm -rf $DEPLOYPATH/static 2>/dev/null
rm -rf $DEPLOYPATH/assets 2>/dev/null

# Copy new files
echo "📋 Copying new website files..."
cp -R $BUILD_DIR/* $DEPLOYPATH

# Copy .htaccess if it exists
if [ -f "$BUILD_DIR/.htaccess" ]; then
    echo "⚙️ Copying .htaccess file..."
    cp $BUILD_DIR/.htaccess $DEPLOYPATH
else
    echo "⚠️  No .htaccess file found in build directory"
fi

# Set permissions
echo "🔒 Setting file permissions..."
chmod 644 $DEPLOYPATH/*.html 2>/dev/null
chmod 644 $DEPLOYPATH/.htaccess 2>/dev/null
chmod -R 755 $DEPLOYPATH/static 2>/dev/null
chmod -R 755 $DEPLOYPATH/assets 2>/dev/null

echo "✅ Deployment completed successfully!"
echo "🌐 Your website should now be live at your domain." 