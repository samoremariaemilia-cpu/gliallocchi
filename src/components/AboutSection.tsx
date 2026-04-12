import { motion } from "framer-motion";
import landscape from "@/assets/marradi-landscape.jpg";

const AboutSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent font-body font-bold uppercase tracking-widest text-sm mb-4">
              La nostra storia
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Tradizione e creatività nel cuore dell'Appennino
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Immerso nel verde dell'Appennino tosco-romagnolo, Gli Allocchi arricchisce la
              classicità della pizzeria tradizionale con un tocco di creatività unica. Le nostre
              pizze sono dedicate ai luoghi di Marradi, famosa per il marrone del Mugello.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              Il menù propone sia grandi classici che combinazioni originali, con un'attenzione
              particolare ai prodotti del territorio. L'impasto oscilla fra il napoletano
              nell'aspetto e il classico croccante alla toscana nella realizzazione.
            </p>
            <p className="text-foreground font-display italic text-xl">
              — Jonathan Trombini, Pizzaiolo
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={landscape}
              alt="Il paesaggio autunnale di Marradi nell'Appennino toscano"
              className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3]"
              loading="lazy"
              width={1920}
              height={800}
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-6 py-4 rounded-lg shadow-lg">
              <p className="font-display text-2xl font-bold">4.5 ★</p>
              <p className="font-body text-sm opacity-80">138 recensioni</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
