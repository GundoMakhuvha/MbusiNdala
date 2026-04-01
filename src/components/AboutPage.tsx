import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Heart, Users, Clock } from "lucide-react";

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We treat every family with the care and respect they deserve during their most difficult moments.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in all aspects of our funeral services.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We are proud to serve our community with dedication and integrity.",
    },
    {
      icon: Clock,
      title: "Availability",
      description: "Our team is available 24/7 to provide support whenever you need us.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1544813545-4827b64fcacb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Chapel interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-5xl font-serif">About Us</h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-white dark:bg-black transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-black dark:text-white mb-6 text-3xl font-serif">Our Story</h2>
              <p className="text-gray-600 dark:text-white/80 mb-4 leading-relaxed">
                Mbusi Ndala Funeral Parlour was founded with a simple yet profound mission: to provide 
                families with compassionate, dignified funeral services during their most challenging times.
              </p>
              <p className="text-gray-600 dark:text-white/80 mb-4 leading-relaxed">
                For over two decades, we have been honored to serve our community, helping families create 
                meaningful tributes to their loved ones. Our experienced team understands that every life is 
                unique and deserves to be celebrated in a way that reflects their individual journey.
              </p>
              <p className="text-gray-600 dark:text-white/80 leading-relaxed">
                We combine traditional values with modern facilities to ensure that every service we provide 
                meets the highest standards of care and professionalism.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://distant-cyan-nhhwtwq6dn.edgeone.app/About%20image%20.jpg"
                alt="Funeral home interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-white/5 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-black dark:text-white text-center mb-12 text-3xl font-serif">The Founder</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="relative h-[600px] rounded-lg overflow-hidden group shadow-2xl">
                <ImageWithFallback
                  src="https://boiling-gray-ontmdfzvkt.edgeone.app/WhatsApp%20Image%202026-01-22%20at%2016.44.57%20(1).jpeg"
                  alt="Founder Mbusi Ndala"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                   <h3 className="text-2xl font-serif">Mbusi Ndala</h3>
                   <p className="text-white/80">Director</p>
                </div>
             </div>
             <div>
                <p className="text-gray-600 dark:text-white/80 text-lg leading-relaxed mb-6 italic">
                  "At Mbusi Ndala Funeral Parlour, we believe that every person's life deserves a dignified and respectful farewell. My vision for this parlour was born out of a deep desire to help families navigate their darkest hours with grace and support."
                </p>
                <p className="text-gray-600 dark:text-white/80 text-lg leading-relaxed mb-6">
                  Mbusi Ndala started this parlour with a commitment to transparency, empathy, and excellence. Under his leadership, the parlour has grown into a cornerstone of the community, known for its unwavering support for families across generations.
                </p>
                
             </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 bg-white dark:bg-black transition-colors duration-300">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-black dark:text-white mb-6 text-3xl font-serif">Our Mission</h2>
          <p className="text-gray-600 dark:text-white/80 text-xl leading-relaxed font-light">
            To honor the memory of those who have passed by providing exceptional funeral services that bring 
            comfort to families, celebrate lives lived, and create meaningful moments of remembrance. We are 
            dedicated to serving our community with compassion, integrity, and professionalism in every aspect 
            of our care.
          </p>
        </div>
      </section>
    </div>
  );
}
