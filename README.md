# portfolio-site

## Overview

A personal portfolio site built with React + Vite that mimics the blocky aesthetic of Minecraft. The site includes a custom navigation bar, blocky panels, pixel-styled project cards, and a fun retro UI theme.

## Installation

To set up the project locally, follow these setps:

Clone the repository:
```
git clone https://github.com/JulianSellanes/portfolio-site/
cd ./portfolio-site/frontend
```
Install dependencies:
```
npm install
```
Run the development server:
```
npm run dev
```

## Features

+ Block sprites (32×32px) used to build navbars, panels, footers, and card borders.
+ Block grid background that adapts to screen size.
+ Content panels built with Blocks component, filling height with block rows.
+ Custom card component with borders and tech tags.
+ Styled toast that auto-adjusts position.
+ Columns and rows calculated based on screen breakpoints.
+ Custom SVG logo.

## Tech Stack

+ Frontend: React + Vite.
+ Styling: CSS (custom, pixel-art oriented).
+ Routing: React Router.
+ Other: Custom utilities (makeRow, calcCols) for blocky grids.