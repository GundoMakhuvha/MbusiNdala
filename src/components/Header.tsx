import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import logo from "figma:asset/9c956bcca755cd6332e1ed950e4124cbc78306ea.png";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export function Header({ currentPage, setCurrentPage, theme, toggleTheme }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center">
          {/* Left: Theme Toggle */}
          <div className="w-1/4 flex justify-start">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-gray-200 dark:hover:bg-white/10 text-gray-800 dark:text-white"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>

          {/* Center: Navigation (Centered) */}
          <div className="w-1/2 flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage("home")}
              className="transition-opacity hover:opacity-80 mr-8 hidden md:block"
            >
              <img 
                src={logo} 
                alt="Mbusi Ndala Funeral Parlour" 
                className="h-10 w-auto invert dark:invert-0"
              />
            </button>
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? "text-black dark:text-white"
                      : "text-gray-500 dark:text-white/60 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            {/* Mobile Logo centered */}
            <button
              onClick={() => setCurrentPage("home")}
              className="transition-opacity hover:opacity-80 md:hidden"
            >
              <img 
                src={logo} 
                alt="Mbusi Ndala" 
                className="h-8 w-auto invert dark:invert-0"
              />
            </button>
          </div>

          {/* Right: Mobile Menu Button or Empty space for balance */}
          <div className="w-1/4 flex justify-end">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-800 dark:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-white/10 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left py-2 text-lg font-medium transition-colors ${
                    currentPage === item.id
                      ? "text-black dark:text-white"
                      : "text-gray-500 dark:text-white/60 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
