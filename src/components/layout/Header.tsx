import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: "Pre-Orders", href: "/pre-orders" },
    { name: "Available Now", href: "/available" },
    { name: "Contact", href: "/contact" },
  ];

  // Google OAuth handler
  const handleGoogleSignIn = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-md bg-background/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="w-12 h-12 rounded-2xl shadow-brand object-cover"
            />
            <div>
              <h1 className="text-xl font-display font-bold text-foreground">
                Kelsie & Pre Order
              </h1>
              <p className="text-xs text-muted-foreground">Modern eCommerce</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground hover:text-primary hover:bg-accent"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="hover:bg-accent">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-accent">
              <User className="w-5 h-5" />
            </Button>
            <Button
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-6 shadow-sm"
              onClick={handleGoogleSignIn}
            >
              Sign In with Google
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-border pt-6 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    location.pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:text-primary hover:bg-accent"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border mt-4">
                <Button variant="outline" className="w-full justify-start">
                  <User className="w-4 h-4 mr-2" />
                  My Account
                </Button>
                <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold">
                  Sign In with Google
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
