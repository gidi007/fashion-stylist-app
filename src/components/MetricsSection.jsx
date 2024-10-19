import React, { useState, useEffect } from 'react';
import { Users, Shirt, Calendar, Star, TrendingUp } from 'lucide-react';
import { Card } from '../components/ui/card';

const MetricsSection = () => {
  const [counters, setCounters] = useState({
    users: 0,
    outfits: 0,
    events: 0,
    rating: 0
  });

  const targetNumbers = {
    users: 50000,
    outfits: 250000,
    events: 100000,
    rating: 4.9
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds for the animation
    const steps = 60; // 60 frames for smooth animation
    const interval = duration / steps;

    const animate = () => {
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounters({
          users: Math.floor(targetNumbers.users * progress),
          outfits: Math.floor(targetNumbers.outfits * progress),
          events: Math.floor(targetNumbers.events * progress),
          rating: Number((targetNumbers.rating * progress).toFixed(1))
        });

        if (currentStep === steps) {
          clearInterval(timer);
        }
      }, interval);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('metrics-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const metrics = [
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      label: "Active Users",
      value: counters.users.toLocaleString(),
      trend: "+27% this month",
      gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
      icon: <Shirt className="w-8 h-8 text-blue-500" />,
      label: "Outfits Generated",
      value: counters.outfits.toLocaleString(),
      trend: "+45% this month",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <Calendar className="w-8 h-8 text-cyan-500" />,
      label: "Events Styled",
      value: counters.events.toLocaleString(),
      trend: "+32% this month",
      gradient: "from-cyan-500/20 to-teal-500/20"
    },
    {
      icon: <Star className="w-8 h-8 text-teal-500" />,
      label: "User Rating",
      value: counters.rating.toFixed(1),
      trend: "Based on 10k+ reviews",
      gradient: "from-teal-500/20 to-green-500/20"
    }
  ];

  return (
    <div id="metrics-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Trusted by Fashion Enthusiasts
        </h2>
        <p className="text-xl text-gray-500">
          Empowering personal style through AI innovation
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((metric, index) => (
          <Card
            key={index}
            className="relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-50`} />
            <div className="relative p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white rounded-xl shadow-lg">
                  {metric.icon}
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center gap-1 text-sm font-medium text-gray-600">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    {metric.trend}
                  </div>
                </div>
              </div>
              
              <h3 className="text-4xl font-bold text-gray-900 mb-2">
                {metric.value}
              </h3>
              <p className="text-gray-600">{metric.label}</p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MetricsSection;