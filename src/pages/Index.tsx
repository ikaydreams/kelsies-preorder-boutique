import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Categories from "@/components/sections/Categories";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
