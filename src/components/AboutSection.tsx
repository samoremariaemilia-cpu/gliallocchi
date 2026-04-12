import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
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
      </div>
    </section>
  );
};

export default AboutSection;
