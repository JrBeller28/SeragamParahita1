import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

export default function OrderFlow() {
  return (
    <section className="bg-white">
      {/* Inquiry & Order Flow Header */}
      <div className="bg-[#2a2a2a] py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Inquiry & Order Flow</h2>
            <p className="text-gray-400 font-medium">Live Process Timeline</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Pattern Cutting", progress: 55, status: "Sewing 75k complete", image: "https://picsum.photos/seed/cut1/400/300" },
              { title: "Sewing & Assembly", progress: 78, status: "Sewing 75k complete", image: "https://picsum.photos/seed/sew1/400/300" },
              { title: "Quality Control & Finishing", progress: 10, status: "Sewing 75k complete", image: "https://picsum.photos/seed/qc1/400/300" },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-none overflow-hidden">
                  <CardContent className="p-4 space-y-4">
                    <div className="flex justify-between items-end text-xs font-bold text-gray-900">
                      <span>{step.status}</span>
                      <span>{step.progress}%</span>
                    </div>
                    <Progress value={step.progress} className="h-1.5 bg-gray-100 [&>div]:bg-red-600" />
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">{step.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Inquiry Form Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label className="text-sm font-bold text-gray-700">Tipe Produk</Label>
                  <Select>
                    <SelectTrigger className="h-12 border-gray-200 rounded-xl focus:ring-red-500/20">
                      <SelectValue placeholder="Tipe Produk" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="uniform">Seragam Kerja</SelectItem>
                      <SelectItem value="polo">Polo Shirt</SelectItem>
                      <SelectItem value="jacket">Jaket</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-bold text-gray-700">Tipe Bahan</Label>
                  <Select>
                    <SelectTrigger className="h-12 border-gray-200 rounded-xl focus:ring-red-500/20">
                      <SelectValue placeholder="Tipe Bahan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cotton">Cotton Combed</SelectItem>
                      <SelectItem value="drill">American Drill</SelectItem>
                      <SelectItem value="pique">Lacoste Pique</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-4">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-bold text-gray-700 border-b-2 border-red-600 pb-1">Tipe Produk</Label>
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-bold text-gray-400">Bordir</span>
                      <div className="w-20 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="w-2/3 h-full bg-red-600" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-bold text-gray-700 border-b-2 border-red-600 pb-1">Tipe Kostumisasi</Label>
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-bold text-gray-400">Bordir/Sablon</span>
                      <div className="w-20 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-red-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label className="text-sm font-bold text-gray-700">Upload Design File</Label>
                  <Select>
                    <SelectTrigger className="h-12 border-gray-200 rounded-xl focus:ring-red-500/20">
                      <SelectValue placeholder="Upload Design File" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pdf">PDF File</SelectItem>
                      <SelectItem value="ai">AI/Vector File</SelectItem>
                      <SelectItem value="png">PNG/JPG Image</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-bold text-gray-700">Estimated Quantity</Label>
                  <Input 
                    type="number" 
                    placeholder="1" 
                    min="1"
                    className="h-12 border-gray-200 rounded-xl focus:ring-red-500/20"
                  />
                </div>
              </div>

              <Button className="w-full h-14 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-red-600/20 transition-all active:scale-[0.98]">
                REQUEST QUOTATION
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
