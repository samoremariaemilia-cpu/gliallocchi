import logo from "@/assets/logo-allocchi.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-warm-dark text-warm-dark-foreground">
      <div className="container max-w-6xl mx-auto px-6 text-center">
        <img
          src={logo}
          alt="Gli Allocchi logo"
          className="w-16 h-16 mx-auto mb-4 opacity-80"
          loading="lazy"
          width={512}
          height={512}
        />
        <p className="font-display text-xl font-bold mb-2">Gli Allocchi Pizzeria</p>
        <p className="font-body text-sm opacity-60 mb-6">
          Viale Baccarini, 26 · 50034 Marradi (FI) · Italia
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="tel:0558042226"
            className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity"
          >
            Telefono
          </a>
          <a
            href="https://maps.google.com/?q=Viale+Baccarini+26+50034+Marradi+FI"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity"
          >
            Indicazioni
          </a>
        </div>
        <p className="font-body text-xs opacity-40">
          © {new Date().getFullYear()} Gli Allocchi Pizzeria. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
