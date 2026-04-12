import { motion } from "framer-motion";
import heroPizza from "@/assets/hero-pizza.jpg";
import logoWhite from "@/assets/logo-allocchi-white.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroPizza}
          alt="Pizza artigianale nel forno a legna"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-dark/70 via-warm-dark/50 to-warm-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.img
          src={logoWhite}
          alt="Gli Allocchi Pizzeria logo"
          className="w-40 h-40 mx-auto mb-8 drop-shadow-2xl"
          width={512}
          height={512}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.h1
          className="text-5xl md:text-7xl font-display font-bold text-warm-dark-foreground mb-4 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Gli Allocchi
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-warm-dark-foreground/80 font-body font-light tracking-widest uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Pizzeria · Marradi
        </motion.p>
        <motion.div
          className="flex items-center justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="bg-gold/90 text-gold-foreground text-sm font-body font-bold px-4 py-1.5 rounded-full">
            🏆 100° — 50 Top Pizza Italia 2025
          </span>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a
            href="tel:0558042226"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-body font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity text-lg"
          >
            📞 Chiama ora
          </a>
          <a
            href="https://maps.google.com/?q=Viale+Baccarini+26+50034+Marradi+FI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-warm-dark-foreground/40 text-warm-dark-foreground font-body font-bold px-8 py-3 rounded-full hover:bg-warm-dark-foreground/10 transition-colors text-lg"
          >
            📍 Come raggiungerci
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-warm-dark-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-warm-dark-foreground/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
