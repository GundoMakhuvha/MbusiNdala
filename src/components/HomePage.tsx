import { Heart, Users, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useState, useEffect } from "react";

interface HomePageProps {
  onNavigateToServices: () => void;
  onNavigateToContact: () => void;
}

export function HomePage({ onNavigateToServices, onNavigateToContact }: HomePageProps) {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Honoring Lives, Celebrating Memories";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  const services = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We provide dignified and respectful services with the utmost compassion for your loved ones.",
    },
    {
      icon: Users,
      title: "Family Support",
      description: "Our dedicated team supports families through every step of the funeral planning process.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "We are available around the clock to assist you during your time of need.",
    },
    {
      icon: Shield,
      title: "Trusted Service",
      description: "With years of experience, we are committed to providing professional and reliable funeral services.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <iframe 
            src="https://www.youtube.com/embed/mYNLyFqllWE?autoplay=1&mute=1&loop=1&playlist=mYNLyFqllWE&controls=0&showinfo=0&modestbranding=1&rel=0" 
            frameBorder="0" 
            allow="autoplay; fullscreen"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ 
              transform: 'scale(1.5)',
              objectFit: 'cover'
            }}
          />
        </div>
        
        
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4 bg-white dark:bg-black transition-colors duration-300">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-gray mb-6 text-4xl md:text-6xl min-h-[60px] font-serif">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h1>
          
          <p className="text-gray-600 dark:text-white/80 text-lg leading-relaxed mb-4">
            At Mbusi Ndala, we understand that losing a loved one is one of life's most difficult experiences. 
            Our mission is to provide families with the support, guidance, and compassionate care they need during 
            this challenging time.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={onNavigateToServices}
              className="px-8 py-3 bg-white text-black rounded-md hover:bg-gray-100 transition-all font-medium"
            >
              Our Services
            </button>
            
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-white/5 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-black dark:text-white text-center mb-12 text-3xl font-serif">What We Offer</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-white dark:bg-black/40 border-gray-200 dark:border-white/10 hover:shadow-lg dark:hover:bg-black/60 transition-all duration-300">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 md:w-8 md:h-8 text-black dark:text-white" />
                    </div>
                  </div>
                  <h3 className="text-black dark:text-white mb-3 text-base md:text-xl font-medium">{service.title}</h3>
                  <p className="text-gray-600 dark:text-white/70 text-xs md:text-base leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-white dark:bg-black transition-colors duration-300">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-black dark:text-white mb-6 text-3xl font-serif">We're Here to Help</h2>
          <p className="text-gray-600 dark:text-white/80 text-lg mb-8">
            Our compassionate team is available 24/7 to assist you. Please don't hesitate to reach out.
          </p>
          <button
            onClick={onNavigateToContact}
            className="inline-block px-10 py-4 bg-black dark:bg-white text-white dark:text-black rounded-md hover:opacity-90 transition-all font-medium"
          >
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}
