import { Phone, MessageCircle } from 'lucide-react';

const Hero = () => {
  const whatsappUrl = "https://wa.me/5513981214037";

  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-br from-white to-nude-soft">
      {/* Header with Logo */}
      <header className="w-full py-6 px-4">
        <div className="max-w-6xl mx-auto flex justify-center lg:justify-start">
          <img alt="Lethícia Nunes Nutricionista" className="h-24 md:h-32 object-contain" src="/lovable-uploads/ff2c0f19-5964-48d0-9b6b-09dcd048a74c.png" />
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Image - appears first on mobile */}
          <div className="animate-slide-in-right lg:order-2 order-first">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-chrome-light to-gold-accent rounded-3xl transform rotate-6 opacity-20"></div>
              <img alt="Lethícia Nunes, nutricionista sorrindo em ambiente profissional" className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto object-cover h-[500px] md:h-[600px]" loading="eager" src="/lovable-uploads/lethicia-foto3.jpg" />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="flex items-center gap-2 text-chrome-gold">
              <span className="text-sm font-medium tracking-wide uppercase">Nutricionista Lethícia Nunes</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-gradient">Saúde</span>
              <br />
              <span className="text-gray-rose">começa pelo</span>
              <br />
              <span className="text-gradient">intestino.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-rose leading-relaxed max-w-2xl">
              Nutricionista clínica especializada em saúde gastrointestinal e nutrição comportamental. Ajudo você a desenvolver uma relação equilibrada e consciente com a alimentação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-chrome-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover-lift shadow-lg hover:bg-chrome-dark transition-all" aria-label="Entrar em contato via WhatsApp">
                <MessageCircle className="w-6 h-6" />
                Agendar consulta
              </a>
              
              <a href="tel:+5513981214037" className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-chrome-gold text-chrome-gold px-8 py-4 rounded-full font-semibold text-lg hover-lift hover:bg-chrome-gold hover:text-white transition-all whitespace-nowrap" aria-label="Ligar para Lethícia Nunes">
                <Phone className="w-6 h-6 flex-shrink-0" />
                <span className="whitespace-nowrap">(13) 98121-4037</span>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>);

};

export default Hero;