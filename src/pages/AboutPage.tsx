import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Factory, Users, Award } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { icon: <Factory className="w-8 h-8 text-red-600" />, label: "Production Capacity", value: "50,000+ pcs/month" },
    { icon: <Users className="w-8 h-8 text-red-600" />, label: "Skilled Workers", value: "200+" },
    { icon: <Award className="w-8 h-8 text-red-600" />, label: "Years Experience", value: "15+ Years" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://picsum.photos/seed/factory-about/1920/600" 
          alt="About Parahita" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            About Parahita
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Crafting excellence in every stitch since 2009.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Legacy of Quality</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Parahita Garment was founded with a simple yet powerful vision: to provide high-quality, durable, and professional uniforms for Indonesia's workforce. Over the years, we have grown from a small workshop into a leading manufacturing facility.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We believe that a uniform is more than just clothing; it's a representation of identity and pride. That's why we use only the finest materials and employ the latest technology in our production process.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Premium Materials", "Timely Delivery", "Custom Designs", "Quality Control"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-700 font-medium">
                    <CheckCircle2 className="text-red-600 w-5 h-5" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/sewing-about/800/600" 
                  alt="Production" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-red-600 text-white p-8 rounded-3xl hidden md:block shadow-xl">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm uppercase tracking-widest font-medium">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-10 text-center space-y-4">
                  <div className="flex justify-center">{stat.icon}</div>
                  <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                  <p className="text-gray-500 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
