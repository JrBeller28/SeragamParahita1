import { MAJOR_PARTNERS, PARTNERS } from "../constants";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { motion } from "motion/react";

export default function PartnerPage() {
  return (
    <div className="pt-20 pb-20">
      <section className="bg-red-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Trusted Partners
          </motion.h1>
          <p className="text-red-100 max-w-2xl mx-auto text-lg">
            We take pride in collaborating with Indonesia's leading companies to provide high-quality garment solutions.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center mb-20">
            {PARTNERS.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-12 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Live Project Status</h2>
            <div className="border rounded-2xl overflow-hidden shadow-xl bg-white">
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow>
                    <TableHead className="w-16 text-center">No</TableHead>
                    <TableHead>Partners</TableHead>
                    <TableHead>Live Order Status</TableHead>
                    <TableHead className="text-right">Progress Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MAJOR_PARTNERS.map((partner, index) => (
                    <TableRow key={index} className="hover:bg-gray-50 transition-colors">
                      <TableCell className="text-center font-medium text-gray-400">{index + 1}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="h-6 w-auto object-contain"
                            referrerPolicy="no-referrer"
                          />
                          <span className="font-bold text-gray-700">{partner.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-600 border border-red-100">
                          {partner.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-4">
                          <div className="w-32">
                            <Progress value={partner.progress} className="h-2 bg-gray-100 [&>div]:bg-red-600" />
                          </div>
                          <span className="text-sm font-bold text-gray-600">{partner.progress}%</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
