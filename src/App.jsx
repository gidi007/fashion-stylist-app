import React, { useEffect } from 'react';
import FashionAdvisorLanding from './components/FashionAdvisorLanding';
import PricingSection from './components/PricingSection';
import MetricsSection from './components/MetricsSection';
import AIRecommendationSystem from './components/AIRecommendationSystem';
import { AnimatePresence, motion } from 'framer-motion';
import Footer from './components/Footer'
// Framer Motion variants for animations
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const staggeredChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const App = () => {
  useEffect(() => {
    // Smooth scroll behavior
    const smoothScroll = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    };

    // Add smooth scroll to all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', smoothScroll);
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="overflow-hidden">
        {/* Navigation */}
        <motion.nav 
          className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 shadow-sm"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <a href="#" className="text-2xl font-bold text-purple-600">
                FashionAI
              </a>
              <div className="flex gap-8">
                <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Features
                </a>
                <a href="#metrics" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Metrics
                </a>
                <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Pricing
                </a>
                <a href="#demo" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Try Demo
                </a>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <motion.section
          id="hero"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          exit="exit"
          className="pt-24"
        >
          <FashionAdvisorLanding />
        </motion.section>

        {/* Metrics Section */}
        <motion.section
          id="metrics"
          variants={staggeredChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <MetricsSection />
        </motion.section>

        {/* AI Recommendation System */}
        <motion.section
          id="demo"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <AIRecommendationSystem />
        </motion.section>

        {/* Pricing Section */}
        <motion.section
          id="pricing"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <PricingSection />
        </motion.section>

        {/* Footer */}
        <motion.section
          id="pricing"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Footer />
        </motion.section>
      </div>
    </AnimatePresence>
  );
};

export default App;