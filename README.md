# AI Fashion Advisor Landing Page

A modern, responsive landing page for an AI-powered fashion styling application built with React, Tailwind CSS, and shadcn/ui components.

## 🌟 Features

- Responsive design with mobile-first approach
- Interactive UI components
- Image upload functionality
- Animated sections
- Testimonials carousel
- Developer profile section
- Modern gradient backgrounds
- Blur effects and smooth transitions

## 🚀 Tech Stack

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - React component library
- **Lucide React** - Icon library
- **TypeScript** - Type safety (optional)
- **clsx** - Conditional class names
- **tailwind-merge** - Tailwind class merging utility

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-fashion-advisor
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Install required packages:
```bash
npm install lucide-react clsx tailwind-merge
# or
yarn add lucide-react clsx tailwind-merge
```

4. Install shadcn/ui components:
```bash
npx shadcn-ui@latest init
```

5. During shadcn/ui initialization, select the following options:
   - Would you like to use TypeScript? › Yes
   - Which style would you like to use? › Default
   - Which color would you like to use as base color? › Slate
   - Where is your global CSS file? › › app/globals.css
   - Do you want to use CSS variables? › Yes
   - Where is your tailwind.config.js located? › tailwind.config.js
   - Configure the import alias for components? › @/components
   - Configure the import alias for utils? › @/lib/utils

6. Install required shadcn/ui components:
```bash
npx shadcn-ui@latest add card
```

## 📁 Project Structure

```
ai-fashion-advisor/
├── components/
│   └── FashionAdvisorLanding.tsx
├── lib/
│   └── utils.ts
├── public/
│   └── api/
│       └── placeholder/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🔧 Configuration

1. Create the utils file:
```bash
mkdir lib
touch lib/utils.ts
```

2. Add the following content to `lib/utils.ts`:
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

3. Update your `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 💻 Usage

1. Import the component in your page:
```typescript
// app/page.tsx
import FashionAdvisorLanding from '@/components/FashionAdvisorLanding'

export default function Home() {
  return <FashionAdvisorLanding />
}
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Colors
- The main color scheme uses purple as the primary color
- You can modify the colors in the component by changing the Tailwind classes
- Gradient backgrounds can be adjusted in the respective component sections

### Images
- The component uses placeholder images
- Replace `/api/placeholder/{width}/{height}` with your actual image paths
- Update the testimonial images and developer profile image

### Content
- Update the features array to modify the feature cards
- Modify the testimonials array to change testimonial content
- Customize the developer section with your own information

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚡ Performance Optimization

- Images use responsive sizes
- CSS animations are hardware-accelerated
- Lazy loading implemented for demo section
- Efficient state management
- Optimized image loading with blur placeholders

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Lucide](https://lucide.dev/) for the icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility classes

## 🤔 FAQ

**Q: Why are my styles not applying correctly?**
A: Make sure you have properly configured Tailwind CSS and imported the necessary style sheets.

**Q: The animations are not working?**
A: Check if your browser supports the CSS properties used and ensure JavaScript is enabled.

**Q: How do I change the colors?**
A: Update the color classes in the components or modify the color palette in your Tailwind config.

## 🐛 Troubleshooting

If you encounter any issues:

1. Ensure all dependencies are installed correctly
2. Check if shadcn/ui components are properly configured
3. Verify that your Tailwind configuration is correct
4. Make sure the utils file is in the correct location
5. Clear your browser cache and node modules if necessary

## 📞 Support

For support, please open an issue in the repository or contact the development team.