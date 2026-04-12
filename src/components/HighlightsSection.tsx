import { motion } from "framer-motion";

const highlights = [
  {
    icon: "🔥",
    title: "Forno a legna",
    description: "Cottura tradizionale per una pizza autentica con cornicione perfetto.",
  },
  {
    icon: "🌰",
    title: "Pizza Marradese",
    description: "La nostra specialità autunnale con il famoso marrone del Mugello IGP.",
  },
  {
    icon: "🧀",
    title: "Cornicione ripieno",
    description: "Possibilità di avere il cornicione ripieno di ricotta fresca artigianale.",
  },
  {
    icon: "🍷",
    title: "Vini & Birre",
    description: "Carta dei vini presente e selezione di birre di pregio accuratamente scelte.",
  },
];

const HighlightsSection = () => {
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
            Perché sceglierci
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Il gusto della Toscana
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-background rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
