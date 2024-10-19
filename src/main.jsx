import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LazyMotion, domAnimation } from 'framer-motion'
import './index.css'

// Define Tailwind base styles
const TailwindStyles = `
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-white text-gray-900 antialiased;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    @apply bg-gray-100;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-purple-500/50 rounded-full hover:bg-purple-500/70 transition-colors;
  }

  /* Loading spinner animation */
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .loading-spinner {
    animation: spin 1s linear infinite;
  }

  /* Smooth appearance for elements */
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  }

  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Custom utility classes */
@layer components {
  .btn-primary {
    @apply px-6 py-3 bg-purple-600 text-white rounded-full font-semibold
           hover:bg-purple-700 transform hover:scale-105 transition-all
           shadow-lg hover:shadow-purple-500/25;
  }

  .btn-secondary {
    @apply px-6 py-3 bg-white text-purple-600 rounded-full font-semibold
           border-2 border-purple-600 hover:bg-purple-50
           transform hover:scale-105 transition-all;
  }

  .card {
    @apply rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300;
  }
}
`

// Create style element with Tailwind styles
const style = document.createElement('style')
style.textContent = TailwindStyles
document.head.appendChild(style)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LazyMotion features={domAnimation}>
      <App />
    </LazyMotion>
  </React.StrictMode>,
)