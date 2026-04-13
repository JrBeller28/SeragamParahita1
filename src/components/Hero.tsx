import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { HERO_IMAGES } from "@/src/constants";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-100">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {HERO_IMAGES.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[400px] md:h-[600px] w-full">
                <img
                  src={src}
                  alt={`Factory view ${index + 1}`}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl px-4"
                  >
                    <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                      Excellence in Garment Manufacturing
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-white/90 drop-shadow-md">
                      Quality uniforms and professional workwear for your distinguished business.
                    </p>
                  </motion.div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
          <CarouselPrevious className="relative left-0 translate-y-0 bg-white/20 hover:bg-white/40 text-white border-none" />
          <CarouselNext className="relative right-0 translate-y-0 bg-white/20 hover:bg-white/40 text-white border-none" />
        </div>
      </Carousel>
    </section>
  );
}
