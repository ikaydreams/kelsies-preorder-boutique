import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Clock, Star } from "lucide-react";

const PreOrders = () => {
  const preOrderProducts = [
    {
      id: 1,
      name: "iPhone 16 Pro",
      price: "$999",
      expectedDate: "March 2024",
      image: "/placeholder.svg",
      rating: 4.9,
      description: "Next-generation iPhone with revolutionary features",
      category: "Smartphones"
    },
    {
      id: 2,
      name: "PlayStation 6",
      price: "$599",
      expectedDate: "Holiday 2024",
      image: "/placeholder.svg",
      rating: 4.8,
      description: "Next-gen gaming console with 8K support",
      category: "Gaming"
    },
    {
      id: 3,
      name: "Tesla Model Y 2025",
      price: "$54,999",
      expectedDate: "Q2 2024",
      image: "/placeholder.svg",
      rating: 4.9,
      description: "Updated electric SUV with enhanced autopilot",
      category: "Automotive"
    },
    {
      id: 4,
      name: "MacBook Pro M4",
      price: "$2,399",
      expectedDate: "Fall 2024",
      image: "/placeholder.svg",
      rating: 4.8,
      description: "Revolutionary laptop with M4 chip technology",
      category: "Computers"
    },
    {
      id: 5,
      name: "Samsung Galaxy S25",
      price: "$899",
      expectedDate: "February 2024",
      image: "/placeholder.svg",
      rating: 4.7,
      description: "Flagship Android with AI photography",
      category: "Smartphones"
    },
    {
      id: 6,
      name: "Nintendo Switch 2",
      price: "$399",
      expectedDate: "Summer 2024",
      image: "/placeholder.svg",
      rating: 4.9,
      description: "Next-gen hybrid gaming console",
      category: "Gaming"
    }
  ];

  const handleWhatsAppOrder = (product: any) => {
    const message = `Hi! I want to pre-order ${product.name} for ${product.price}. Expected delivery: ${product.expectedDate}`;
    const whatsappNumber = "233557135717"; 
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/10 px-4 py-2 rounded-full">
            <Clock className="w-5 h-5 text-brand-orange" />
            <span className="text-brand-orange font-semibold">Pre-Order Now</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground">
            Exclusive Pre-Orders
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Be the first to get your hands on the latest products before they hit the market. 
            Reserve yours today and secure your spot in line.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {preOrderProducts.map((product, index) => (
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
                  <Badge className="absolute top-3 left-3 bg-brand-orange text-white">
                    Pre-Order
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
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">Expected rating</span>
                  </div>

                  {/* Expected Date */}
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4 text-brand-orange" />
                    <span className="text-muted-foreground">Expected: {product.expectedDate}</span>
                  </div>

                  {/* Price */}
                  <div className="text-xl font-bold text-foreground">
                    {product.price}
                  </div>

                  {/* Action Button */}
                  <Button 
                    onClick={() => handleWhatsAppOrder(product)}
                    className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold"
                  >
                    Pre-Order via WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-muted/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">
            How Pre-Orders Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto text-white font-bold">
                1
              </div>
              <h3 className="font-semibold">Reserve Your Item</h3>
              <p className="text-sm text-muted-foreground">
                Click "Pre-Order via WhatsApp" to secure your spot
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto text-white font-bold">
                2
              </div>
              <h3 className="font-semibold">Pay Deposit</h3>
              <p className="text-sm text-muted-foreground">
                Small deposit to confirm your pre-order
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto text-white font-bold">
                3
              </div>
              <h3 className="font-semibold">Get Notified</h3>
              <p className="text-sm text-muted-foreground">
                We'll contact you when your item arrives
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PreOrders;
