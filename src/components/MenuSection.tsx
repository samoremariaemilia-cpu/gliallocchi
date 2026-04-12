import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import pizza1 from "@/assets/pizza-1.jpg";
import pizza2 from "@/assets/pizza-2.jpg";
import pizza3 from "@/assets/pizza-3.jpg";
import pizza4 from "@/assets/pizza-4.jpg";

const menuImages = [
  { src: pizza1, alt: "Menù e pizze 1" },
  { src: pizza2, alt: "Menù e pizze 2" },
  { src: pizza3, alt: "Menù e pizze 3" },
  { src: pizza4, alt: "Menù e pizze 4" },
];

const MenuSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const prev = () => setActiveImage((i) => (i === 0 ? menuImages.length - 1 : i - 1));
  const next = () => setActiveImage((i) => (i === menuImages.length - 1 ? 0 : i + 1));

  return (
    <>
      <section className="py-24 bg-card">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-body font-bold uppercase tracking-widest text-sm mb-4">
              Scopri i nostri piatti
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Il nostro Menù
            </h2>
          </motion.div>

          {/* Scrollable thumbnails */}
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {menuImages.map((photo, i) => (
                <motion.button
                  key={i}
                  onClick={() => { setActiveImage(i); setIsOpen(true); }}
                  className="flex-shrink-0 w-[70vw] sm:w-[45%] md:w-[23%] overflow-hidden rounded-lg aspect-[3/4] snap-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen viewer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-warm-dark/95 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-warm-dark-foreground/80 hover:text-warm-dark-foreground transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-dark-foreground/60 hover:text-warm-dark-foreground transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-warm-dark-foreground/60 hover:text-warm-dark-foreground transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <div className="max-w-2xl w-full max-h-[80vh] px-12">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={menuImages[activeImage].src}
                  alt={menuImages[activeImage].alt}
                  className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </div>

            <div className="flex gap-3 mt-6">
              {menuImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === activeImage
                      ? "bg-accent"
                      : "bg-warm-dark-foreground/30 hover:bg-warm-dark-foreground/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MenuSection;
