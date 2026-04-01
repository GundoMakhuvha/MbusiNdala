import { Phone, Mail, MapPin, Clock, Send, Check } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { useState, useEffect } from "react";
import { toast } from "sonner@2.0.3";

interface ContactPageProps {
  selectedPackage: string | null;
}

export function ContactPage({ selectedPackage }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: selectedPackage || "",
    message: "",
  });

  useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({ ...prev, package: selectedPackage }));
    }
  }, [selectedPackage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending email to info@mbusindala.co.za
    console.log("Sending message to info@mbusindala.co.za:", formData);
    toast.success("Message sent successfully! We will contact you at info@mbusindala.co.za shortly.");
    setFormData({ name: "", email: "", phone: "", package: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+27 (011) 123 4567", "Available 24/7"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@mbusindala.co.za", "support@mbusindala.co.za"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["14149 Tsotetsi St, Kwa-Thema Phase 2", "Springs, 1575"],
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: ["24 Hours a Day", "7 Days a Week"],
    },
  ];

  const packages = [
    "Forever in Our Hearts Package",
    "Senior Citizens Package",
    "Family Package",
    "General Inquiry"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-black to-gray-800">
        <div className="absolute inset-0 opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1767108497044-5e2a24e994ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMGNlbWV0ZXJ5JTIwbGFuZHNjYXBlJTIwbW9ybmluZyUyMG1pc3R8ZW58MXx8fHwxNzY5NTE4MzUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Cemetery morning mist"
            className="w-full h-full object-cover"
           />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-5xl mb-4 font-serif">Contact Us</h1>
          <p className="text-white/90 text-xl font-light italic">
            We're here for you 24/7. Reach out anytime.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 bg-white dark:bg-black transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-gray-50 dark:bg-black/40 border-gray-200 dark:border-white/10 text-center hover:shadow-md transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center">
                      <info.icon className="w-5 h-5 md:w-7 md:h-7 text-black dark:text-white" />
                    </div>
                  </div>
                  <h3 className="text-black dark:text-white mb-3 text-sm md:text-base font-medium">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 dark:text-white/70 text-xs md:text-sm">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="pb-20 px-4 bg-white dark:bg-black transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 dark:bg-white/5 p-6 md:p-10 rounded-xl border border-gray-200 dark:border-white/10 shadow-sm">
              <h2 className="text-black dark:text-white mb-6 text-2xl font-serif">Inquiry Form</h2>
              <p className="text-gray-600 dark:text-white/80 mb-8 font-light">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-black dark:text-white">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-white dark:bg-black/40 border-gray-300 dark:border-white/20 text-black dark:text-white"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-black dark:text-white">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="bg-white dark:bg-black/40 border-gray-300 dark:border-white/20 text-black dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-black dark:text-white">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-white dark:bg-black/40 border-gray-300 dark:border-white/20 text-black dark:text-white"
                      placeholder="+27 00 000 0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="package" className="text-black dark:text-white">
                      Selected Package
                    </Label>
                    <select
                      id="package"
                      value={formData.package}
                      onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                      className="w-full h-10 px-3 rounded-md bg-white dark:bg-black/40 border border-gray-300 dark:border-white/20 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white/20 transition-all text-sm"
                    >
                      <option value="" disabled>Select a package</option>
                      {packages.map((pkg) => (
                        <option key={pkg} value={pkg}>{pkg}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-black dark:text-white">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={4}
                    className="bg-white dark:bg-black/40 border-gray-300 dark:border-white/20 text-black dark:text-white resize-none"
                    placeholder="How can we help you today?"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-black dark:bg-white text-white dark:text-black hover:opacity-90 py-6 text-lg font-medium shadow-md transition-all group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Inquiry
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="flex flex-col gap-8">
              <div className="flex-1 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg relative min-h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4605.452092123222!2d28.40814457644016!3d-26.31591536853506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9526c0b26b1d6f%3A0x1a68bee501d1bb69!2s14149%20Tsotetsi%20St%2C%20Kwa-Thema%20Phase%202%2C%20Springs%2C%201575!5e1!3m2!1sen!2sza!4v1769518169211!5m2!1sen!2sza" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale dark:grayscale-0 contrast-125 dark:contrast-100"
                />
              </div>

              <Card className="bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-black dark:text-white mb-4 text-xl font-serif">Visit Our Facilities</h3>
                  <ul className="space-y-4 text-gray-600 dark:text-white/80">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center mt-1 flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm">Accessible facilities with ample parking.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center mt-1 flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm">Private viewing rooms and consultation areas.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center mt-1 flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm">Professional staff available 24/7 for walk-ins.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-white/5 transition-colors duration-300">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-black dark:text-white mb-4 text-2xl font-serif">Need Immediate Assistance?</h3>
          <p className="text-gray-600 dark:text-white/80 mb-6 font-light">
            Our compassionate team is standing by to help you 24 hours a day, 7 days a week.
          </p>
          <a
            href="tel:+27111234567"
            className="inline-flex items-center gap-3 px-10 py-4 bg-black dark:bg-white text-white dark:text-black rounded-md hover:opacity-90 shadow-lg transition-all font-medium"
          >
            <Phone className="w-5 h-5" />
            Call Us Now: +27 (011) 123 4567
          </a>
        </div>
      </section>
    </div>
  );
}
