import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-display font-bold">Kelsie & Pre Order</h3>
              <p className="text-background/80 text-sm">
                Your trusted destination for modern pre-order shopping and trendy products.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-brand-orange transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-brand-orange transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-brand-orange transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-brand-orange transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-background/80 hover:text-brand-orange transition-colors">Home</a></li>
              <li><a href="/categories" className="text-background/80 hover:text-brand-orange transition-colors">Categories</a></li>
              <li><a href="/pre-orders" className="text-background/80 hover:text-brand-orange transition-colors">Pre-Orders</a></li>
              <li><a href="/available" className="text-background/80 hover:text-brand-orange transition-colors">Available Now</a></li>
              <li><a href="/about" className="text-background/80 hover:text-brand-orange transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/help" className="text-background/80 hover:text-brand-orange transition-colors">Help Center</a></li>
              <li><a href="/shipping" className="text-background/80 hover:text-brand-orange transition-colors">Shipping Info</a></li>
              <li><a href="/returns" className="text-background/80 hover:text-brand-orange transition-colors">Returns</a></li>
              <li><a href="/faq" className="text-background/80 hover:text-brand-orange transition-colors">FAQ</a></li>
              <li><a href="/privacy" className="text-background/80 hover:text-brand-orange transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-orange" />
                <span className="text-background/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-orange" />
                <span className="text-background/80">hello@kelsiepreorder.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-orange mt-0.5" />
                <span className="text-background/80">
                  123 Commerce Street<br />
                  Suite 100<br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-background/60 text-sm">
            © 2024 Kelsie & Pre Order. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="/terms" className="text-background/60 hover:text-brand-orange transition-colors">Terms</a>
            <a href="/privacy" className="text-background/60 hover:text-brand-orange transition-colors">Privacy</a>
            <a href="/cookies" className="text-background/60 hover:text-brand-orange transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;