import { motion } from "framer-motion";
import pizza1 from "@/assets/pizza-1.jpg";
import pizza2 from "@/assets/pizza-2.jpg";
import pizza3 from "@/assets/pizza-3.jpg";
import pizza4 from "@/assets/pizza-4.jpg";

const photos = [
  { src: pizza1, alt: "Pizza artigianale Gli Allocchi" },
  { src: pizza2, alt: "Pizza specialità del ristorante" },
  { src: pizza3, alt: "Pizza con ingredienti locali" },
  { src: pizza4, alt: "Pizza tradizionale toscana" },
];

const GallerySection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-body font-bold uppercase tracking-widest text-sm mb-4">
            Le nostre pizze
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Dalla nostra cucina
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-lg aspect-[3/4]"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
