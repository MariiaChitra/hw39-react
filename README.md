# Course Catalog — React + Vite (`js-hw39-react`)

A modular React single-page application built with Vite that displays a catalog of courses, complete with reusable card layouts and dynamic availability badges.

## Features

- **Component-Based Architecture:** Clean separation of layout (`Header`, `Footer`), list rendering (`CourseList`), and item presentation (`CourseCard`, `Card`).
- **Dynamic Availability Status:** Displays real-time course enrollment/availability indicators via the `AvailabilityBadge` component.
- **Structured Data Layer:** Decouples course information from UI components using local data modules inside `src/data/`.
- **Fast Development & Build:** Powered by Vite with Hot Module Replacement (HMR) and Oxlint for code quality.

## Project Structure

```text
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Project images, icons, and media
│   ├── components/         # Reusable UI components
│   │   ├── AvailabilityBadge.jsx
│   │   ├── Card.jsx
│   │   ├── CourseCard.jsx
│   │   ├── CourseList.jsx
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   ├── data/               # Course catalog data files
│   ├── App.css             # Root component styles
│   ├── App.jsx             # Main application layout
│   ├── index.css           # Global styles
│   └── main.jsx            # React DOM entry point
├── .oxlintrc.json          # Oxlint configuration
├── HW_39_TEXT.md           # Assignment specification / notes
├── index.html              # HTML entry template
├── package.json            # Dependencies and npm scripts
└── vite.config.js          # Vite bundler configuration
```
## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher recommended) installed on your machine.

### Installation & Running Locally

1. **Navigate to the project directory:**

   ```bash
   cd my-library
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   Visit the local URL shown in the terminal (typically `http://localhost:5174`).

### Build for Production

To create an optimized production bundle:

```bash
npm run build
```