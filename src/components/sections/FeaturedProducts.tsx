import { Clock, ExternalLink, Star, Badge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      description: "Premium sound quality with noise cancellation",
      price: "$89.99",
      image: "/api/placeholder/300/300",
      isPreOrder: true,
      rating: 4.8,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Designer Summer Dress",
      description: "Elegant floral pattern perfect for any occasion",
      price: "$65.00",
      image: "/api/placeholder/300/300",
      isPreOrder: false,
      rating: 4.9,
      category: "Fashion"
    },
    {
      id: 3,
      name: "Smart Home Security Camera",
      description: "AI-powered security with mobile app control",
      price: "$129.99",
      image: "/api/placeholder/300/300",
      isPreOrder: true,
      rating: 4.7,
      category: "Electronics"
    },
    {
      id: 4,
      name: "Organic Skincare Set",
      description: "Natural ingredients for healthy glowing skin",
      price: "$45.00",
      image: "/api/placeholder/300/300",
      isPreOrder: false,
      rating: 4.9,
      category: "Beauty"
    },
    {
      id: 5,
      name: "Gaming Mechanical Keyboard",
      description: "RGB backlit with premium switches",
      price: "$119.99",
      image: "/api/placeholder/300/300",
      isPreOrder: true,
      rating: 4.6,
      category: "Gaming"
    },
    {
      id: 6,
      name: "Minimalist Wall Clock",
      description: "Modern design that complements any room",
      price: "$32.00",
      image: "/api/placeholder/300/300",
      isPreOrder: false,
      rating: 4.8,
      category: "Home & Garden"
    }
  ];

  const handleWhatsAppOrder = (product: any) => {
    // You'll replace this with your actual WhatsApp link
    const message = `Hi! I'm interested in ordering: ${product.name} - ${product.price}`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of trending items. Pre-order the latest products 
            or shop from our available collection.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <Card 
              key={product.id}
              className="group overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative h-64 bg-muted overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-brand-orange-light/30 to-brand-green-light/30 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground">
                      {product.category.charAt(0)}
                    </span>
                  </div>
                </div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isPreOrder && (
                    <div className="bg-brand-orange text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Pre-Order
                    </div>
                  )}
                  <div className="bg-brand-green text-white px-2 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </div>
                </div>

                {/* Rating */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-medium">{product.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">
                      {product.price}
                    </span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button
                  onClick={() => handleWhatsAppOrder(product)}
                  className={`w-full font-semibold ${
                    product.isPreOrder 
                      ? 'bg-brand-orange hover:bg-brand-orange-dark text-white' 
                      : 'bg-brand-green hover:bg-brand-green-dark text-white'
                  }`}
                >
                  {product.isPreOrder ? 'Pre-Order via WhatsApp' : 'Order via WhatsApp'}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;