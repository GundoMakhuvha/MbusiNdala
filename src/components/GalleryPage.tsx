import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import galleryImage1 from "figma:asset/06cf0dc390caf4df8439d2ef81c7cc4b12da9e88.png";
import galleryImage2 from "figma:asset/20c1db3fafa27fdd80b3848a2b6055166b4eb41e.png";
import galleryImage3 from "figma:asset/148040122327d3c22ac900264ae81fcfc043c784.png";
import galleryImage4 from "figma:asset/1e6677a96c257971f3fc4e5734e0a36453b0b612.png";

export function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const galleryImages = [
    {
      src: galleryImage1,
      title: "Compassionate Service",
      description: "Supporting families through every moment with dignity and care.",
    },
    {
      src: galleryImage2,
      title: "Professional Facilities",
      description: "Elegant and comfortable spaces for memorial services.",
    },
    {
      src: galleryImage3,
      title: "Community Focused",
      description: "Dedicated team members providing comprehensive support.",
    },
    
  ];

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1647102460267-09593bca8daf?q=80&w=1082&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Memorial gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-5xl font-serif">Gallery</h1>
          <p className="text-white/90 mt-4 text-xl font-light italic">
            Dignified Facilities & Compassionate Service
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 bg-white dark:bg-black transition-colors duration-300">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-square bg-gray-100 dark:bg-white/5 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
                onClick={() => openLightbox(index)}
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="text-center p-4">
                     <Maximize2 className="w-8 h-8 text-white mx-auto mb-2" />
                     <p className="text-white text-sm font-medium">{image.title}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors p-2"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-4 rounded-full"
            onClick={prevImage}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="max-w-5xl max-h-[80vh] relative group" onClick={(e) => e.stopPropagation()}>
            <img 
              src={galleryImages[selectedImageIndex].src} 
              alt={galleryImages[selectedImageIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-sm"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-6 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-center">
               <h3 className="text-white text-xl font-serif mb-1">{galleryImages[selectedImageIndex].title}</h3>
               <p className="text-white/70 text-sm">{galleryImages[selectedImageIndex].description}</p>
            </div>
          </div>

          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-4 rounded-full"
            onClick={nextImage}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="absolute bottom-10 text-white/50 text-sm">
            {selectedImageIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </div>
  );
}