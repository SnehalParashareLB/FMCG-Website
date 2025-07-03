
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ChefHat } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/70 pt-16 pb-8 spice-pattern relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <ChefHat className="h-10 w-10 text-primary transition-transform duration-300 group-hover:rotate-[-15deg]" />
              <span className="text-2xl font-bold gradient-text">CHITALE SWEET HOME</span>
            </Link>
            <p className="text-foreground/80 mb-6 text-sm">
              Bringing authentic flavors of traditional namkeens and sweets to your doorstep since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-foreground/70 hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
                <Facebook size={22} />
              </a>
              <a href="#" aria-label="Instagram" className="text-foreground/70 hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
                <Instagram size={22} />
              </a>
              <a href="#" aria-label="Twitter" className="text-foreground/70 hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
                <Twitter size={22} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-xl text-primary mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-foreground/80 hover:text-primary transition-colors hover:underline">Home</Link></li>
              <li><Link to="/products/namkeens" className="text-foreground/80 hover:text-primary transition-colors hover:underline">Namkeens</Link></li>
              <li><Link to="/products/sweets" className="text-foreground/80 hover:text-primary transition-colors hover:underline">Sweets</Link></li>
              <li><Link to="/about" className="text-foreground/80 hover:text-primary transition-colors hover:underline">About Us</Link></li>
              <li><Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors hover:underline">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xl text-primary mb-5">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary shrink-0 mt-1" />
                <span className="text-foreground/80">
                  123 Spice Street, Flavor Town, FT 12345, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <a href="tel:+15551234567" className="text-foreground/80 hover:text-primary transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:info@chitalesweethome.com" className="text-foreground/80 hover:text-primary transition-colors">info@chitalesweethome.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xl text-primary mb-5">Business Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-foreground/80">
                <span className="font-medium">Mon - Fri:</span> 9:00 AM - 8:00 PM
              </li>
              <li className="text-foreground/80">
                <span className="font-medium">Saturday:</span> 10:00 AM - 6:00 PM
              </li>
              <li className="text-foreground/80">
                <span className="font-medium">Sunday:</span> 10:00 AM - 4:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground/20 pt-8 text-center text-foreground/70 text-sm">
          <p>&copy; {new Date().getFullYear()} CHITALE SWEET HOME. All rights reserved. Crafted with passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
