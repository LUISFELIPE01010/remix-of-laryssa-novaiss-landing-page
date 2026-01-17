
import { Phone, MessageCircle } from 'lucide-react';

const Hero = () => {
  const whatsappUrl = "https://wa.me/5513996631970";

  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-br from-white to-nude-soft">
      {/* Header with Logo */}
      <header className="w-full py-6 px-4">
        <div className="max-w-6xl mx-auto flex justify-center lg:justify-start">
          <img 
            src="/lovable-uploads/logo-karine-keppler.png"
            alt="Karine Keppler Nutricionista"
            className="h-16 md:h-20 object-contain"
          />
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="flex items-center gap-2 text-chrome-gold">
              <span className="text-sm font-medium tracking-wide uppercase">Nutricionista Karine Keppler</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-gradient">Emagrecimento</span>
              <br />
              <span className="text-gray-rose">começa pela</span>
              <br />
              <span className="text-gradient">mente.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-rose leading-relaxed max-w-2xl">
              Sou nutricionista por escolha e por propósito. Há 9 anos deixei a engenharia para seguir a área da saúde, onde encontrei minha verdadeira vocação: cuidar de pessoas de forma integral.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-chrome-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover-lift shadow-lg hover:bg-chrome-dark transition-all"
                aria-label="Entrar em contato via WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
                Quero falar com a nutri
              </a>
              
              <a 
                href="tel:+5513996631970"
                className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-chrome-gold text-chrome-gold px-8 py-4 rounded-full font-semibold text-lg hover-lift hover:bg-chrome-gold hover:text-white transition-all whitespace-nowrap"
                aria-label="Ligar para Karine Keppler"
              >
                <Phone className="w-6 h-6 flex-shrink-0" />
                <span className="whitespace-nowrap">(13) 99663-1970</span>
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-chrome-light to-gold-accent rounded-3xl transform rotate-6 opacity-20"></div>
              <img 
                src="/lovable-uploads/38ce4de6-829c-4c3c-b44d-a913ef18f986.png"
                alt="Karine Keppler, nutricionista sorrindo em ambiente acolhedor"
                className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto object-cover h-[500px] md:h-[600px]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
