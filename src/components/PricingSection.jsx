import React, { useState } from 'react';
import { Check, Star, Crown, Zap } from 'lucide-react';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      icon: <Star className="w-6 h-6 text-purple-500" />,
      price: isAnnual ? 99 : 9.99,
      description: "Perfect for fashion enthusiasts",
      features: [
        "Basic AI style recommendations",
        "Upload up to 50 items",
        "Weather-based suggestions",
        "Basic event planning"
      ],
      highlight: false,
      buttonClass: "bg-white text-purple-600 border-2 border-purple-600"
    },
    {
      name: "Pro",
      icon: <Crown className="w-6 h-6 text-purple-500" />,
      price: isAnnual ? 199 : 19.99,
      description: "For the style-conscious professional",
      features: [
        "Advanced AI recommendations",
        "Unlimited wardrobe items",
        "Priority style assistance",
        "Advanced event planning",
        "Seasonal trend analysis",
        "Style history tracking"
      ],
      highlight: true,
      buttonClass: "bg-purple-600 text-white"
    },
    {
      name: "Enterprise",
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      price: isAnnual ? 299 : 29.99,
      description: "For fashion businesses and stylists",
      features: [
        "All Pro features",
        "API access",
        "Team collaboration",
        "Custom branding",
        "Analytics dashboard",
        "24/7 priority support"
      ],
      highlight: false,
      buttonClass: "bg-white text-purple-600 border-2 border-purple-600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-xl text-gray-500 mb-8">Choose the perfect plan for your styling needs</p>
        
        {/* Pricing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-lg ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-8 w-16 rounded-full bg-purple-600 transition-colors"
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
                isAnnual ? 'translate-x-9' : 'translate-x-1'
              } mt-1`}
            />
          </button>
          <span className={`text-lg ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Annual
            <span className="ml-2 text-sm text-purple-600 font-medium">Save 20%</span>
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl transition-all duration-300 hover:scale-105 ${
              plan.highlight
                ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-2xl'
                : 'bg-white shadow-xl'
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${plan.highlight ? 'bg-white/20' : 'bg-purple-100'}`}>
                  {plan.icon}
                </div>
                <h3 className={`text-2xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
              </div>
              
              <p className={`${plan.highlight ? 'text-white/80' : 'text-gray-500'} mb-6`}>
                {plan.description}
              </p>
              
              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  ${plan.price}
                </span>
                <span className={`${plan.highlight ? 'text-white/80' : 'text-gray-500'}`}>
                  {isAnnual ? '/year' : '/month'}
                </span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.highlight ? 'text-white' : 'text-purple-500'}`} />
                    <span className={plan.highlight ? 'text-white/80' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all 
                           hover:shadow-lg ${plan.buttonClass} ${
                  plan.highlight ? 'hover:bg-white hover:text-purple-600' : 'hover:bg-purple-600 hover:text-white'
                }`}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;