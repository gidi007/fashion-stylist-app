import React, { useState, useEffect } from 'react';
import { 
  Upload, Camera, Sparkles, ArrowRight, Clock, 
  Cloud, Calendar, Star, Github, Linkedin, Twitter,
  Code, Smile, Heart
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const FashionAdvisorLanding = () => {
  // State management
  const [selectedImage, setSelectedImage] = useState(null);
  const [showDemo, setShowDemo] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Animation trigger for developer card
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('developer-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Features data
  const features = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Smart Wardrobe Analysis",
      description: "Upload your clothing items and get AI-powered style recommendations"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Weather Integration",
      description: "Get outfit suggestions based on real-time weather forecasts"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Event-Based Planning",
      description: "Perfect outfits for every occasion in your calendar"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Style Learning",
      description: "AI learns your preferences and improves recommendations over time"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fashion Blogger",
      image: "/api/placeholder/64/64",
      quote: "This AI stylist has completely transformed how I plan my outfits. It's like having a personal fashion consultant!"
    },
    {
      name: "Michael Chen",
      role: "Professional Photographer",
      image: "/api/placeholder/64/64",
      quote: "The outfit recommendations are spot-on! The weather integration is particularly helpful for photoshoot planning."
    },
    {
      name: "Emma Williams",
      role: "Digital Influencer",
      image: "/api/placeholder/64/64",
      quote: "I love how the AI learns my style preferences. It gets better with every interaction!"
    }
  ];

  // Hero Section Component
  const HeroSection = () => (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-16 pb-20">
          <div className="text-center">
            <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight mb-8">
              Your AI Fashion Stylist
              <Sparkles className="inline-block ml-4 text-purple-500" size={40} />
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-10">
              Transform your wardrobe with AI-powered style recommendations. Get personalized outfit suggestions based on your style, the weather, and your upcoming events.
            </p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => setShowDemo(true)}
                className="px-8 py-4 bg-purple-600 text-white rounded-full font-semibold 
                         hover:bg-purple-700 transform hover:scale-105 transition-all
                         shadow-lg hover:shadow-purple-500/25"
              >
                Try Demo <ArrowRight className="inline-block ml-2" size={20} />
              </button>
              <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold 
                               border-2 border-purple-600 hover:bg-purple-50 
                               transform hover:scale-105 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Features Grid Component
  const FeaturesGrid = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  // Testimonials Section Component
  const TestimonialsSection = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
        <p className="text-xl text-gray-500">Join thousands of satisfied fashion enthusiasts</p>
      </div>
      
      <div className="relative">
        <div className="flex overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 transform transition-transform duration-500 ease-in-out ${
                index === activeTestimonial ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <Card className="mx-auto max-w-2xl border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 italic">{testimonial.quote}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeTestimonial ? 'bg-purple-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  // Developer Section Component
  const DeveloperSection = () => (
    <div id="developer-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Card className={`border-0 shadow-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm 
                     transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <CardContent className="p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 bg-purple-500 rounded-full animate-pulse opacity-20"></div>
                <img
                  src="/api/placeholder/256/256"
                  alt="Developer"
                  className="rounded-full w-full h-full object-cover relative z-10"
                />
                <div className="absolute -right-4 -bottom-4 bg-white p-3 rounded-full shadow-lg">
                  <Code className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <a href="#" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  <Github className="w-6 h-6 text-gray-700" />
                </a>
                <a href="#" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </a>
                <a href="#" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  <Twitter className="w-6 h-6 text-blue-400" />
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Meet the Developer</h2>
              <p className="text-lg text-gray-600">
                Passionate about creating beautiful, intelligent solutions that help people express their style.
                Combining AI with fashion to revolutionize personal styling.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-xl shadow-lg">
                  <div className="text-purple-600 mb-2">
                    <Code className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold">Tech Stack</h3>
                  <p className="text-sm text-gray-500">React + AI</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-lg">
                  <div className="text-purple-600 mb-2">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold">Passion</h3>
                  <p className="text-sm text-gray-500">UI/UX Design</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-lg">
                  <div className="text-purple-600 mb-2">
                    <Smile className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold">Focus</h3>
                  <p className="text-sm text-gray-500">User Experience</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // Demo Section Component
  const DemoSection = () => (
    showDemo && (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Camera className="text-purple-500" />
              Try Our AI Stylist
            </CardTitle>
            <CardDescription>
              Upload a photo of your wardrobe item to get personalized recommendations
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="relative h-96 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 
                          hover:border-purple-400 transition-colors group">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Uploaded wardrobe item"
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Upload className="w-16 h-16 text-gray-400 group-hover:text-purple-500 transition-colors" />
                  <label className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-full cursor-pointer 
                                  hover:bg-purple-700 transition-colors shadow-lg hover:shadow-purple-500/25">
                    Upload Your Photo
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => setSelectedImage(reader.result);
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                  <p className="mt-4 text-gray-500">or drag and drop your image here</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  );

  
   


  // Main component return
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <HeroSection />
      <FeaturesGrid />
      <TestimonialsSection />
      
      <DemoSection />
      <DeveloperSection />
    </div>
  );
};

export default FashionAdvisorLanding;