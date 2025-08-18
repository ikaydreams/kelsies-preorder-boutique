import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star, Truck } from "lucide-react";

const Available = () => {
  const availableProducts = [
    {
      id: 1,
      name: "iPhone 14 Pro",
      price: "$899",
      originalPrice: "$999",
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 1234,
      description: "Powerful smartphone with Pro camera system",
      inStock: 15,
      category: "Smartphones"
    },
    {
      id: 2,
      name: "AirPods Pro 2",
      price: "$199",
      originalPrice: "$249",
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 892,
      description: "Active noise cancellation wireless earbuds",
      inStock: 28,
      category: "Audio"
    },
    {
      id: 3,
      name: "iPad Air 5th Gen",
      price: "$549",
      originalPrice: "$599",
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 567,
      description: "Versatile tablet with M1 chip",
      inStock: 12,
      category: "Tablets"
    },
    {
      id: 4,
      name: "MacBook Air M2",
      price: "$999",
      originalPrice: "$1,199",
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 345,
      description: "Ultra-thin laptop with M2 chip",
      inStock: 8,
      category: "Laptops"
    },
    {
      id: 5,
      name: "Apple Watch Series 9",
      price: "$329",
      originalPrice: "$399",
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 723,
      description: "Advanced smartwatch with health monitoring",
      inStock: 22,
      category: "Wearables"
    },
    {
      id: 6,
      name: "Sony WH-1000XM4",
      price: "$279",
      originalPrice: "$349",
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 1156,
      description: "Industry-leading noise canceling headphones",
      inStock: 18,
      category: "Audio"
    }
  ];

  const handleWhatsAppOrder = (product: any) => {
    const message = `Hi! I want to buy ${product.name} for ${product.price}. Is it still available?`;
    const whatsappNumber = "233557135717"; // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-green/10 px-4 py-2 rounded-full">
            <ShoppingCart className="w-5 h-5 text-brand-green" />
            <span className="text-brand-green font-semibold">Available Now</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground">
            Ready to Ship
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get your hands on these amazing products today! All items are in stock and ready for immediate delivery.
          </p>
        </div>

        {/* Filter/Sort Section */}
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">
              Showing {availableProducts.length} products
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Truck className="w-4 h-4 text-brand-green" />
            <span className="text-sm text-brand-green font-medium">
              Same day delivery available
            </span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableProducts.map((product, index) => (
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
                  <Badge className="absolute top-3 left-3 bg-brand-green text-white">
                    In Stock
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {product.category}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                  
                  {/* Rating & Reviews */}
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Stock Status */}
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                    <span className="text-brand-green font-medium">
                      {product.inStock} in stock
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
                    <Badge variant="secondary" className="text-xs">
                      Save {parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))}
                    </Badge>
                  </div>

                  {/* Action Button */}
                  <Button 
                    onClick={() => handleWhatsAppOrder(product)}
                    className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-semibold"
                  >
                    Buy Now via WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Shipping Info */}
        <div className="mt-16 bg-gradient-to-r from-brand-green/10 to-brand-orange/10 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Fast & Reliable Delivery
            </h2>
            <p className="text-muted-foreground">
              All available items ship within 24 hours
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center mx-auto">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold">Same Day Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Order before 2 PM for same day delivery
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center mx-auto">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold">Secure Packaging</h3>
              <p className="text-sm text-muted-foreground">
                All items carefully packaged and insured
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold">Quality Guarantee</h3>
              <p className="text-sm text-muted-foreground">
                30-day return policy on all products
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Available;
