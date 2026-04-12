import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import pizza1 from "@/assets/pizza-1.jpg";
import pizza3 from "@/assets/pizza-3.jpg";

const menuImages = [
  { src: pizza1, alt: "Menù pizze pagina 1" },
  { src: pizza3, alt: "Menù pizze pagina 2" },
];

const MenuSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <>
      <section className="py-24 bg-background">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-body font-bold uppercase tracking-widest text-sm mb-4">
              Scopri i nostri piatti
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
              Il nostro Menù
            </h2>
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-body font-bold px-10 py-4 rounded-full hover:opacity-90 transition-opacity text-lg"
            >
              📋 Visualizza il Menù
            </button>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-warm-dark/95 flex flex-col items-center justify-center p-4"
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

            <div className="max-w-2xl w-full max-h-[80vh] overflow-auto">
              <img
                src={menuImages[activeImage].src}
                alt={menuImages[activeImage].alt}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>

            {menuImages.length > 1 && (
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
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MenuSection;
