import { useState } from "react";
import { PRODUCTS } from "@/src/constants";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

const CATEGORIES = ["All", "Uniform", "Safety", "Corporate", "Workwear"];

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Product Catalog</h2>
            <p className="text-gray-500">Explore our wide range of professional garments.</p>
          </div>

          <Tabs defaultValue="All" onValueChange={setActiveCategory} className="w-full md:w-auto">
            <TabsList className="bg-white border shadow-sm">
              {CATEGORIES.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow bg-white group">
                  <CardContent className="p-0 relative aspect-[4/5]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {product.badge && (
                      <Badge className="absolute top-4 left-4 bg-red-600 hover:bg-red-700">
                        {product.badge}
                      </Badge>
                    )}
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-red-600 shadow-sm">
                      {product.price}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 flex flex-col items-start gap-1">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <Link to="/products">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 h-14 rounded-xl shadow-lg shadow-red-600/20">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
