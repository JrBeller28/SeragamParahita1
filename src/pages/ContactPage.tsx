import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="bg-gray-900 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Get In Touch
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
                <p className="text-gray-500">
                  Reach out to us through any of these channels or visit our office.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-3 rounded-xl">
                    <Phone className="text-red-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+62 21 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-3 rounded-xl">
                    <Mail className="text-red-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@parahita.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-3 rounded-xl">
                    <MapPin className="text-red-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Office</h4>
                    <p className="text-gray-600">Jl. Garment No. 123, Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-bold text-gray-700">Full Name</Label>
                      <Input id="name" placeholder="John Doe" className="h-12 rounded-xl border-gray-200 focus:ring-red-500/20" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-bold text-gray-700">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" className="h-12 rounded-xl border-gray-200 focus:ring-red-500/20" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-bold text-gray-700">Subject</Label>
                    <Input id="subject" placeholder="Inquiry about uniforms" className="h-12 rounded-xl border-gray-200 focus:ring-red-500/20" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-bold text-gray-700">Message</Label>
                    <textarea 
                      id="message" 
                      rows={6} 
                      className="w-full p-4 rounded-xl border border-gray-200 focus:ring-red-500/20 focus:outline-none transition-all"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <Button className="w-full h-14 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-red-600/20 transition-all">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-gray-200">
        <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">
          [ Google Maps Integration Placeholder ]
        </div>
      </section>
    </div>
  );
}
