import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const InfoSection = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Vieni a trovarci
          </h2>
          <p className="font-body text-lg opacity-80 max-w-xl mx-auto">
            Ti aspettiamo ogni sera nel cuore di Marradi
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <MapPin className="w-8 h-8 mx-auto mb-3 opacity-90" strokeWidth={1.5} />
            <h3 className="font-display text-xl font-bold mb-2">Indirizzo</h3>
            <p className="font-body opacity-80 leading-relaxed">
              Viale Baccarini, 26<br />
              50034 Marradi (FI)<br />
              Italia
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Clock className="w-8 h-8 mx-auto mb-3 opacity-90" strokeWidth={1.5} />
            <h3 className="font-display text-xl font-bold mb-2">Orari</h3>
            <p className="font-body opacity-80 leading-relaxed">
              Tutti i giorni a cena<br />
              Apertura: 18:30<br />
              <span className="font-bold opacity-100">Chiuso il Lunedì</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Phone className="w-8 h-8 mx-auto mb-3 opacity-90" strokeWidth={1.5} />
            <h3 className="font-display text-xl font-bold mb-2">Contatti</h3>
            <p className="font-body opacity-80 leading-relaxed">
              <a href="tel:0558042226" className="hover:opacity-100 transition-opacity underline underline-offset-4">
                055 804 2226
              </a><br />
              Pizza da asporto disponibile<br />
              Animali ammessi
            </p>
          </motion.div>
        </div>

        {/* Map embed */}
        <motion.div
          className="mt-16 rounded-lg overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            title="Posizione Gli Allocchi Pizzeria"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.5!2d11.6115!3d44.0685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ca1f9a1e5f3d1%3A0x1234567890abcdef!2sViale%20Baccarini%2C%2026%2C%2050034%20Marradi%20FI%2C%20Italy!5e0!3m2!1sen!2sit!4v1234567890"
            className="w-full h-80 border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;
