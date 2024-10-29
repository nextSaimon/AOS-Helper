# AOS Suggestions VSCode Extension

A lightweight Visual Studio Code extension that provides suggestions for [Animate on Scroll (AOS)](https://michalsnik.github.io/aos/) animations and attributes in HTML, CSS, JavaScript, JSX, and TSX files. This extension enhances productivity by offering autocompletion for AOS attributes, easing functions, and animations, allowing you to quickly add scroll-triggered animations to your projects.

## Get Extension

You can download the AOS Helper extension from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=nextsaimon.aos-helper).


## Video Tutorial

[Download/View Video](./image/video.mp4)


## Features
- **Full HTML Template with AOS Setup**: Type `$aos` to insert a full HTML boilerplate with AOS setup, including the necessary CSS and JavaScript files.


![HTML Template](/image/1.png)

- **Auto-Completion for AOS Animations**: Type `fade-....` to see a list of AOS animations like `data-aos="fade-up"`, `data-aos="fade-right"`, etc.

![Auto-Completion](/image/2.png)

- **Easing Function Suggestions**: Type `data-aos-easing` or `ease` to see a list of easing options like `data-aos-easing="ease"`, `data-aos-easing="linear"`, `data-aos-easing="ease-in-out"`, and more.

![Easing Function](/image/3.png)

- **Anchor Placement Suggestions**: Type `data-aos-anchor-placement` or `placement` to select anchor placement options like `data-aos-anchor-placement="top-center"`, `data-aos-anchor-placement="center-bottom"`, etc.

![Anchor Placement](/image/4.png)




## Usage

1. **Full HTML Template**:
   - Type `$aos` to insert a full HTML template with AOS setup:
     ```html
     <!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Your Page</title>
       <!-- AOS CSS -->
       <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
     </head>
     <body>
       <!-- Your content here -->
       <!-- AOS Script -->
       <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
       <script>AOS.init();</script>
     </body>
     </html>
     ```

2. **Attribute Suggestions**:
   - Type `fade` to see animation options such as `fade`, `zoom-in`, `flip-left`, etc.
   - Type `data-aos-easing` to view easing functions like `ease`, `ease-in-out`, etc.
   - Type `data-aos-anchor-placement` to select anchor placement options like `top-center`, `center-bottom`, etc.

## Supported AOS Options

### Animations

- `fade`, `fade-up`, `fade-down`, `fade-left`, `fade-right`
- `slide-up`, `slide-down`, `slide-left`, `slide-right`
- `flip-up`, `flip-down`, `flip-left`, `flip-right`
- `zoom-in`, `zoom-in-up`, `zoom-out`, and more!

### Easing Functions

- `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`
- `ease-in-back`, `ease-out-back`, `ease-in-out-back`
- `ease-in-sine`, `ease-out-sine`, `ease-in-out-sine`

### Anchor Placements

- `top-bottom`, `top-center`, `center-center`, `bottom-top`, etc.
