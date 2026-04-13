import * as React from "react";
import { LIVE_PROJECTS, MAJOR_PARTNERS } from "@/src/constants";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { motion } from "motion/react";

export default function LiveProjects() {
  return (
    <section className="bg-white">
      {/* Live Process Timeline Section */}
      <div className="bg-[#2a2a2a] py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Partner Projects (Mitra Berjalan)</h2>
            <p className="text-gray-400 font-medium">Live Process Timeline</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {LIVE_PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-none overflow-hidden">
                  <CardContent className="p-4 space-y-4">
                    <div className="flex justify-between items-end text-xs font-bold text-gray-900">
                      <span>{project.status}</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-1.5 bg-gray-100 [&>div]:bg-red-600" />
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">{project.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Major Partners Table Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Major Partners</h2>
          <div className="border rounded-xl overflow-hidden shadow-sm">
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
                  <TableRow key={index}>
                    <TableCell className="text-center font-medium text-gray-400">{index + 1}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="h-6 w-auto object-contain grayscale"
                          referrerPolicy="no-referrer"
                        />
                        <span className="font-bold text-gray-700">{partner.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {partner.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-3">
                        <div className="w-24">
                          <Progress value={partner.progress} className="h-1.5 bg-gray-100 [&>div]:bg-red-600" />
                        </div>
                        <span className="text-xs font-bold text-gray-500">{partner.progress}%</span>
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
  );
}
