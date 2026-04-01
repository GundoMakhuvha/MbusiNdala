import { Phone, Mail, MapPin, Facebook, Instagram, Music2 } from "lucide-react";
import logo from "figma:asset/9c956bcca755cd6332e1ed950e4124cbc78306ea.png";

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & About */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-6">
              <button onClick={() => setCurrentPage("home")}>
                <img 
                  src={logo} 
                  alt="Mbusi Ndala Funeral Parlour" 
                  className="h-12 w-auto invert dark:invert-0"
                />
              </button>
            </div>
            <p className="text-gray-500 dark:text-white/70 text-sm leading-relaxed max-w-xs">
              Providing compassionate and dignified funeral services to families in their time of need. Mbusi Ndala - Honor, Dignity, and Peace.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-black dark:text-white mb-6 font-medium font-serif">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => {
                      const id = link.toLowerCase() === "about" ? "about" : link.toLowerCase();
                      setCurrentPage(id);
                      window.scrollTo(0, 0);
                    }}
                    className="text-gray-500 dark:text-white/70 hover:text-black dark:hover:text-white text-sm transition-colors text-left"
                  >
                    {link === "About" ? "About Us" : link === "Contact" ? "Contact Us" : link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-black dark:text-white mb-6 font-medium font-serif">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500 dark:text-white/70 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+27 (011) 123 4567</span>
              </li>
              <li className="flex items-start gap-3 text-gray-500 dark:text-white/70 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-xs" />
                <span className="break-all">info@mbusindala.co.za</span>
              </li>
              <li className="flex items-start gap-3 text-gray-500 dark:text-white/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>14149 Tsotetsi St<br />Kwa-Thema Phase 2, 1575</span>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-black dark:text-white mb-4 font-medium font-serif">Operating Hours</h4>
            <p className="text-gray-500 dark:text-white/70 text-sm mb-6">
              Available 24 hours a day<br />
              7 days a week
            </p>
            <h4 className="text-black dark:text-white mb-4 font-medium font-serif">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                aria-label="TikTok"
              >
                <Music2 className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 dark:text-white/60 text-xs">
              © {new Date().getFullYear()} Mbusi Ndala Funeral Parlour. All rights reserved.
            </p>
            <div className="flex gap-8 text-xs">
              
              <a href="#" className="text-gray-400 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors uppercase tracking-widest">
                Developed By: Capvtal Innovations.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
