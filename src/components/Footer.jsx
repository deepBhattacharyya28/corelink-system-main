import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-card backdrop-blur-sm border-t border-primary/20 dark:border-primary/30 py-12 sm:py-16">
      {/* Consistent container with same padding as other sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">CoreLink System</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your trusted IT partner providing professional hardware support, printer solutions, 
              and web development services. We're here to keep your technology running smoothly.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-primary/10 hover:bg-primary hover:text-white p-3 rounded-xl transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-primary/10 hover:bg-primary hover:text-white p-3 rounded-xl transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-primary/10 hover:bg-primary hover:text-white p-3 rounded-xl transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <span>info@corelinksystem.com</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <span>123 Tech Street, Digital City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  About Us
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Our Services
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Support
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 CoreLink System. All rights reserved. Built with passion for technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
