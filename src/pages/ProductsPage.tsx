import * as React from "react";
import { useState } from "react";
import { PRODUCTS, MATERIALS } from "../constants";
import { Product } from "../types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Ruler, Info, Box } from "lucide-react";

const CATEGORIES = ["All", "Uniform", "Safety", "Corporate", "Workwear"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const selectedMaterial = selectedProduct?.materialId 
    ? MATERIALS.find(m => m.id === selectedProduct.materialId)
    : null;

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Product Collection
          </motion.h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            High-quality professional garments tailored for your business needs.
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <Tabs defaultValue="All" onValueChange={setActiveCategory} className="w-full max-w-2xl">
              <TabsList className="w-full bg-white border shadow-sm h-12">
                {CATEGORIES.map((cat) => (
                  <TabsTrigger
                    key={cat}
                    value={cat}
                    className="flex-1 data-[state=active]:bg-red-600 data-[state=active]:text-white font-bold"
                  >
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white group h-full flex flex-col">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      {product.badge && (
                        <Badge className="absolute top-4 left-4 bg-red-600 hover:bg-red-700 shadow-lg">
                          {product.badge}
                        </Badge>
                      )}
                      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-red-600 shadow-md">
                        {product.price}
                      </div>
                    </div>
                    <CardContent className="p-6 flex-grow space-y-2">
                      <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
                        {product.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 text-sm line-clamp-2">
                        {product.description}
                      </p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button 
                        onClick={() => setSelectedProduct(product)}
                        className="w-full bg-gray-900 hover:bg-red-600 text-white font-bold transition-all"
                      >
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Detail Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="sm:max-w-[90vw] md:max-w-4xl lg:max-w-5xl p-0 overflow-hidden rounded-3xl border-none bg-white">
          {selectedProduct && (
            <div className="grid grid-cols-1 md:grid-cols-2 h-full max-h-[90vh]">
              <div className="relative h-[300px] md:h-full bg-gray-100">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col h-full overflow-hidden">
                <div className="p-6 md:p-10 space-y-8 overflow-y-auto flex-grow">
                  <DialogHeader className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50 px-3 py-1">
                        {selectedProduct.category}
                      </Badge>
                      {selectedProduct.badge && (
                        <Badge className="bg-gray-900 px-3 py-1">{selectedProduct.badge}</Badge>
                      )}
                    </div>
                    <div>
                      <DialogTitle className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                        {selectedProduct.name}
                      </DialogTitle>
                      <div className="text-2xl font-bold text-red-600 mt-2">
                        {selectedProduct.price}
                      </div>
                    </div>
                  </DialogHeader>

                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 font-bold text-gray-900 uppercase tracking-wider text-sm">
                      <Info className="w-4 h-4 text-red-600" />
                      Description
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {selectedProduct.features && (
                    <div className="space-y-4">
                      <h4 className="flex items-center gap-2 font-bold text-gray-900 uppercase tracking-wider text-sm">
                        <CheckCircle2 className="w-4 h-4 text-red-600" />
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {selectedProduct.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProduct.sizes && (
                    <div className="space-y-4">
                      <h4 className="flex items-center gap-2 font-bold text-gray-900 uppercase tracking-wider text-sm">
                        <Ruler className="w-4 h-4 text-red-600" />
                        Available Sizes
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.sizes.map((size) => (
                          <div key={size} className="px-4 py-2 rounded-lg border-2 border-gray-100 font-bold text-gray-700 hover:border-red-200 hover:bg-red-50 transition-colors cursor-default">
                            {size}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedMaterial && (
                    <div className="space-y-6 p-6 bg-gray-50 rounded-3xl border border-gray-100">
                      <h4 className="flex items-center gap-2 font-bold text-gray-900 uppercase tracking-wider text-sm">
                        <Box className="w-4 h-4 text-red-600" />
                        Material Used
                      </h4>
                      <div className="flex items-center gap-5">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md shrink-0">
                          <img src={selectedMaterial.image} alt={selectedMaterial.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-bold text-gray-900 text-lg">{selectedMaterial.name}</p>
                          <p className="text-sm text-gray-500">{selectedMaterial.specifications.composition}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-6 pt-2 border-t border-gray-200">
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase font-bold block mb-1">Grammage</span>
                          <span className="text-gray-800 font-bold">{selectedMaterial.specifications.grammage}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase font-bold block mb-1">Best For</span>
                          <span className="text-gray-800 font-bold">{selectedMaterial.specifications.recommendedUse}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6 md:p-8 bg-white border-t">
                  <Button className="w-full h-14 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl shadow-xl shadow-red-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Inquiry This Product
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
