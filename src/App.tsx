import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ServicesPage } from "./components/ServicesPage";
import { GalleryPage } from "./components/GalleryPage";
import { ContactPage } from "./components/ContactPage";
import { Footer } from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const navigateToContact = (packageName?: string) => {
    if (packageName) {
      setSelectedPackage(packageName);
    }
    setCurrentPage("contact");
    window.scrollTo(0, 0);
  };

  const navigateToServices = () => {
    setCurrentPage("services");
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage 
            onNavigateToServices={navigateToServices} 
            onNavigateToContact={navigateToContact} 
          />
        );
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage onSelectPackage={navigateToContact} />;
      case "gallery":
        return <GalleryPage />;
      case "contact":
        return <ContactPage selectedPackage={selectedPackage} />;
      default:
        return <HomePage 
          onNavigateToServices={navigateToServices} 
          onNavigateToContact={navigateToContact} 
        />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <Header 
        currentPage={currentPage} 
        setCurrentPage={(page) => {
          setCurrentPage(page);
          window.scrollTo(0, 0);
        }} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="pt-0">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
