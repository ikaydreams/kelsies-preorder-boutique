import { ArrowRight, Package, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-brand-orange/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-brand-green/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-brand-orange-light/20 rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-brand-orange" />
                <span className="text-sm font-medium text-brand-orange">New Collection Available</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                Modern 
                <span className="text-transparent bg-gradient-brand bg-clip-text"> Pre-Order </span>
                Shopping Experience
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Discover the latest trending products before they hit the market. 
                Pre-order exclusive items and shop available products with convenient WhatsApp ordering.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold shadow-brand"
              >
                Browse Categories
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
              >
                <Package className="w-5 h-5 mr-2" />
                View Pre-Orders
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">50+</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-orange">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative animate-scale-in" style={{animationDelay: '0.3s'}}>
            <div className="relative bg-gradient-brand rounded-3xl p-8 shadow-brand">
              <div className="bg-white rounded-2xl p-6 space-y-4">
                {/* Mock Product Cards */}
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-brand-orange rounded-lg"></div>
                  <div className="flex-1 space-y-1">
                    <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  <div className="text-brand-green font-semibold">$49</div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-brand-green rounded-lg"></div>
                  <div className="flex-1 space-y-1">
                    <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-brand-orange" />
                    <span className="text-xs text-brand-orange">Pre-Order</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-primary rounded-lg"></div>
                  <div className="flex-1 space-y-1">
                    <div className="h-3 bg-gray-300 rounded w-4/5"></div>
                    <div className="h-2 bg-gray-200 rounded w-2/5"></div>
                  </div>
                  <div className="text-brand-green font-semibold">$89</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center animate-float">
                <Star className="w-4 h-4 text-brand-orange" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                <Package className="w-5 h-5 text-brand-green" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;