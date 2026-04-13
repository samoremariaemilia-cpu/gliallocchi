import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import pizza6 from "@/assets/pizza-6.jpg";
import pizza7 from "@/assets/pizza-7.jpg";
import pizza8 from "@/assets/pizza-8.jpg";
import pizza9 from "@/assets/pizza-9.jpg";
import pizza10 from "@/assets/pizza-10.jpg";
import pizza11 from "@/assets/pizza-11.jpg";
import pizza12 from "@/assets/pizza-12.jpg";
import pizza13 from "@/assets/pizza-13.jpg";

const galleryImages = [
  { src: pizza6, alt: "Pizza margherita" },
  { src: pizza7, alt: "Pizza con bacon e cheddar" },
  { src: pizza8, alt: "Pizza con peperoni e salsiccia" },
  { src: pizza9, alt: "Il pizzaiolo" },
  { src: pizza10, alt: "Pizza con mortadella e burrata" },
  { src: pizza11, alt: "Calzone ripieno" },
  { src: pizza12, alt: "Pizza marinara con olive" },
  { src: pizza13, alt: "Preparazione pizza con basilico fresco" },
];

const PizzaGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const prev = () => setActiveImage((i) => (i === 0 ? galleryImages.length - 1 : i - 1));
  const next = () => setActiveImage((i) => (i === galleryImages.length - 1 ? 0 : i + 1));

  return (
    <>
      <section className="py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-body font-bold uppercase tracking-widest text-sm mb-4">
              Dalla nostra cucina
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Le nostre Pizze
            </h2>
          </motion.div>

          {/* Masonry-style grid */}
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryImages.map((photo, i) => (
              <motion.button
                key={i}
                onClick={() => { setActiveImage(i); setIsOpen(true); }}
                className="w-full overflow-hidden rounded-lg break-inside-avoid"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.button>
            ))}
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
                  src={galleryImages[activeImage].src}
                  alt={galleryImages[activeImage].alt}
                  className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </div>

            <div className="flex gap-3 mt-6">
              {galleryImages.map((_, i) => (
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

export default PizzaGallery;
