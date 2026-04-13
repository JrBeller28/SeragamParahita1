import { MATERIALS } from "@/src/constants";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

export default function MaterialShowcase() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Material Showcase</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            High-resolution, zoomable close-ups and detailed specifications of our premium fabrics.
          </p>
        </div>

        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {MATERIALS.map((material) => (
              <CarouselItem key={material.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-4">
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={material.image}
                      alt={material.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{material.name}</h3>
                      <div className="h-1 w-20 bg-red-600 rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-1">
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Grammage</span>
                        <p className="text-xl font-medium text-gray-800">{material.specifications.grammage}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Composition</span>
                        <p className="text-xl font-medium text-gray-800">{material.specifications.composition}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Recommended Use</span>
                        <p className="text-xl font-medium text-gray-800">{material.specifications.recommendedUse}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Technicals</span>
                      <div className="flex flex-wrap gap-2">
                        {material.specifications.technicals.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-gray-200 text-gray-600 px-4 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden lg:block">
            <CarouselPrevious className="-left-16" />
            <CarouselNext className="-right-16" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
