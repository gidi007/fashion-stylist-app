import React, { useState, useCallback, memo } from 'react';
import { Camera, Sun, Cloud, CloudRain, Sparkles, Calendar, UploadCloud } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Memoized weather type button component for better performance
const WeatherTypeButton = memo(({ type, active, onClick }) => (
  <button
    onClick={onClick}
    className={`p-4 rounded-xl border-2 transition-all ${
      active
        ? 'border-purple-500 bg-purple-50'
        : 'border-gray-200 hover:border-purple-300'
    }`}
  >
    <div className="flex flex-col items-center gap-2">
      {type.icon}
      <span className="text-sm font-medium">{type.label}</span>
    </div>
  </button>
));

// Memoized recommendation card component
const RecommendationCard = memo(({ recommendation }) => (
  <Card className="bg-gradient-to-br from-purple-50 to-blue-50">
    <CardContent className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">{recommendation.outfitType}</h3>
        <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
          {recommendation.confidence}% Match
        </span>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Recommended Items</h4>
          <ul className="space-y-3">
            {recommendation.items.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-purple-500 rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-xl">
            <div className="flex items-center gap-2 text-gray-700">
              <Sun className="text-purple-500" />
              Weather Suitable
            </div>
          </div>
          <div className="p-4 bg-white rounded-xl">
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar className="text-purple-500" />
              {recommendation.occasion}
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
));

const AIRecommendationSystem = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [weatherType, setWeatherType] = useState('sunny');
  const [isGenerating, setIsGenerating] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  const weatherTypes = [
    { id: 'sunny', icon: <Sun className="w-6 h-6" />, label: 'Sunny' },
    { id: 'cloudy', icon: <Cloud className="w-6 h-6" />, label: 'Cloudy' },
    { id: 'rainy', icon: <CloudRain className="w-6 h-6" />, label: 'Rainy' }
  ];

  const handleImageUpload = useCallback((event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
        setTimeout(() => setActiveStep(1), 500);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const generateRecommendation = useCallback(() => {
    setIsGenerating(true);
    // Simulate AI processing
    setTimeout(() => {
      setRecommendation({
        outfitType: 'Smart Casual',
        items: [
          'Light blue oxford shirt',
          'Navy chinos',
          'Brown leather sneakers',
          'Silver watch'
        ],
        confidence: 92,
        weatherSuitable: true,
        occasion: 'Office meeting'
      });
      setIsGenerating(false);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            AI Style Recommendations
            <Sparkles className="text-purple-500" size={32} />
          </h2>
          <p className="text-xl text-gray-500">
            Get personalized outfit suggestions based on your wardrobe and preferences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Input Section */}
          <div className="space-y-8">
            <Card className={`transition-all duration-300 ${activeStep === 0 ? 'ring-2 ring-purple-500' : ''}`}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Camera className="text-purple-500" />
                  Upload Your Item
                </h3>
                
                <div className="relative h-64 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 
                              hover:border-purple-400 transition-colors group">
                  {uploadedImage ? (
                    <img
                      src={uploadedImage}
                      alt="Uploaded item"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <UploadCloud className="w-12 h-12 text-gray-400 group-hover:text-purple-500 transition-colors" />
                      <label className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-full cursor-pointer 
                                      hover:bg-purple-700 transition-colors">
                        Choose File
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                      </label>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className={`transition-all duration-300 ${activeStep === 1 ? 'ring-2 ring-purple-500' : ''}`}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Sun className="text-purple-500" />
                  Select Weather
                </h3>
                
                <div className="grid grid-cols-3 gap-4">
                  {weatherTypes.map((type) => (
                    <WeatherTypeButton
                      key={type.id}
                      type={type}
                      active={weatherType === type.id}
                      onClick={() => {
                        setWeatherType(type.id);
                        setActiveStep(2);
                      }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <button
              onClick={generateRecommendation}
              disabled={!uploadedImage || isGenerating}
              className={`w-full py-4 rounded-xl font-semibold transition-all ${
                isGenerating
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/25'
              }`}
            >
              {isGenerating ? (
                <span className="flex items-center justify-center gap-2">
                  <Sparkles className="animate-spin" />
                  Generating...
                </span>
              ) : (
                'Get Recommendations'
              )}
            </button>
          </div>

          {/* Right Column - Results Section */}
          <div className={`transition-all duration-500 ${recommendation ? 'opacity-100' : 'opacity-0'}`}>
            {recommendation && <RecommendationCard recommendation={recommendation} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRecommendationSystem;