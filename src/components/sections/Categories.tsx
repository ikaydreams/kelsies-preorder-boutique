import { 
  Smartphone, 
  Shirt, 
  Home, 
  Gamepad2, 
  BookOpen, 
  Heart, 
  Dumbbell, 
  Car,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Categories = () => {
  const categories = [
    {
      name: "Electronics",
      icon: Smartphone,
      itemCount: 45,
      color: "bg-blue-100 text-blue-600",
      hoverColor: "hover:bg-blue-50"
    },
    {
      name: "Fashion",
      icon: Shirt,
      itemCount: 78,
      color: "bg-pink-100 text-pink-600",
      hoverColor: "hover:bg-pink-50"
    },
    {
      name: "Home & Garden",
      icon: Home,
      itemCount: 32,
      color: "bg-green-100 text-green-600",
      hoverColor: "hover:bg-green-50"
    },
    {
      name: "Gaming",
      icon: Gamepad2,
      itemCount: 28,
      color: "bg-purple-100 text-purple-600",
      hoverColor: "hover:bg-purple-50"
    },
    {
      name: "Books",
      icon: BookOpen,
      itemCount: 56,
      color: "bg-orange-100 text-orange-600",
      hoverColor: "hover:bg-orange-50"
    },
    {
      name: "Beauty",
      icon: Heart,
      itemCount: 34,
      color: "bg-red-100 text-red-600",
      hoverColor: "hover:bg-red-50"
    },
    {
      name: "Sports",
      icon: Dumbbell,
      itemCount: 41,
      color: "bg-cyan-100 text-cyan-600",
      hoverColor: "hover:bg-cyan-50"
    },
    {
      name: "Automotive",
      icon: Car,
      itemCount: 23,
      color: "bg-gray-100 text-gray-600",
      hoverColor: "hover:bg-gray-50"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse collection of products across multiple categories. 
            Sign in to access exclusive pre-order items and available products.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.name}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-card-hover hover:scale-105 ${category.hoverColor} animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.itemCount} items
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-secondary hover:bg-secondary-hover text-secondary-foreground font-semibold"
          >
            View All Categories
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            * Sign in with Google required to view category products
          </p>
        </div>
      </div>
    </section>
  );
};

export default Categories;