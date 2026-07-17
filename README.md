# WDD 331R Practice Site

**Student:** Ellie Talbot
**Semester:** Spring 2026
**Live Site:** [View Site](https://github.com/Ellietalbot/wdd331-practice.git)

## About

This repository is my Practice Site for WDD 331R: Advanced CSS.
Each week I add new pages and styles as I work through the course
assignments. The site deploys automatically to GitHub Pages on
every push to main.

This site supports dark mode, with color tokens in `css/tokens/colors.css`.

## How the Portfolio Is Organized

`index.html` is the front door. It opens with a hero banner (name,
tagline, and a "View CSS Teaching Videos" button linking to my video
index), followed by a Featured Projects section highlighting my three
strongest assignments with preview screenshots. Below that, a "View all
Work" toggle expands the full assignment list so every page stays
reachable without cluttering the landing view. A short bio section and
footer close out the page.

Every unit assignment is linked either directly from Featured Projects
or from the full list behind the toggle, so nothing is orphaned. Every
deep page also carries a matching "&larr; Home" link and footer so
visitors can always get back to the front door.

## Build Tool & Instructions for Build

Lightning CSS
Install the dependencies with: `npm install`
Run the build: `npm run build`

## Typography System

Typography tokens are stored in:
`css/tokens/variables.css`

Custom Font:
- Inter (Google Fonts)
- font-display strategy: swap

## Pages

- [Home](index.html)
- [Resume](resume.html)
- [CSS Teaching Videos](css-teaching-videos.html)
- [Custom Properties and Nesting](unit-1/custom-properties/index.html)
- [Layered Components](unit-2/layered-components/index.html)
- [Lightning CSS](unit-2/lightning-css-demo/index.html)
- [Filter Performance Demo](unit-3/filter-performance/demo.html)
- [Visual Effects](unit-3/visual-effects/index.html)
- [Cards](unit-4/grid-layouts/cards.html)
- [Editorial](unit-4/grid-layouts/editorial.html)
- [Container Demo](unit-4/advanced/container-demo.html)
- [Sticky Demo](unit-4/advanced/sticky-demo.html)
- [Scroll Snap Demo](unit-4/grid-layouts/scroll-snap.demo/index.html)
- [Motion Path Demo](unit-6/motion-path/index.html)
- [SVG Fundamentals](unit-6/svg-fundamentals/index.html)
