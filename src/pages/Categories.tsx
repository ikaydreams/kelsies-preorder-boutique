import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star } from "lucide-react";

const Categories = () => {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Mock products data
  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: "$1,199",
      originalPrice: "$1,299",
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 324,
      category: "Electronics",
      isPreOrder: true,
      description: "Latest flagship smartphone with titanium design"
    },
    {
      id: 2,
      name: "MacBook Air M3",
      price: "$1,099",
      originalPrice: "$1,199",
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 156,
      category: "Electronics",
      isPreOrder: true,
      description: "Ultra-thin laptop with M3 chip"
    },
    {
      id: 3,
      name: "AirPods Pro 3",
      price: "$249",
      originalPrice: "$279",
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 892,
      category: "Electronics",
      isPreOrder: false,
      description: "Noise-cancelling wireless earbuds"
    },
    {
      id: 4,
      name: "Sony WH-1000XM5",
      price: "$329",
      originalPrice: "$399",
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 567,
      category: "Electronics",
      isPreOrder: false,
      description: "Premium noise-cancelling headphones"
    },
    {
      id: 5,
      name: "Samsung Galaxy S24 Ultra",
      price: "$1,299",
      originalPrice: "$1,399",
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 423,
      category: "Electronics",
      isPreOrder: true,
      description: "Flagship Android smartphone with S Pen"
    },
    {
      id: 6,
      name: "iPad Pro 12.9",
      price: "$1,099",
      originalPrice: "$1,199",
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 234,
      category: "Electronics",
      isPreOrder: true,
      description: "Professional tablet with M2 chip"
    }
  ];

  const handleSignIn = () => {
    // Mock sign in - in real app this would be Google OAuth
    setIsSignedIn(true);
  };

  const handleWhatsAppOrder = (product: any) => {
    const message = `Hi! I'm interested in ${product.name} for ${product.price}. Please provide more details.`;
    const whatsappNumber = "233557135717"; 
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <div className="max-w-md mx-auto text-center space-y-6">
            <div className="w-24 h-24 bg-gradient-brand rounded-full flex items-center justify-center mx-auto">
              <ShoppingCart className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-display font-bold text-foreground">
              Sign In Required
            </h1>
            <p className="text-muted-foreground">
              Please sign in with Google to access our exclusive product categories and pre-order items.
            </p>
            <Button 
              onClick={handleSignIn}
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold"
            >
              Sign In with Google
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            Electronics Category
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover the latest electronics and tech gadgets
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-card-hover hover:scale-[1.02] animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.isPreOrder && (
                    <Badge className="absolute top-3 left-3 bg-brand-orange text-white">
                      Pre-Order
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-foreground">
                      {product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>

                  {/* Action Button */}
                  <Button 
                    onClick={() => handleWhatsAppOrder(product)}
                    className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-semibold"
                  >
                    {product.isPreOrder ? "Pre-Order via WhatsApp" : "Buy via WhatsApp"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
