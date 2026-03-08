import { Star, TrendingUp, Heart, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Results = () => {
  const beforeAfterImages = [
    {
      image: "/images/result-maria.jpg",
      alt: "Paciente saudável após tratamento gastrointestinal",
      title: "Alívio da Distensão",
      description: "Fim do desconforto abdominal",
      name: "Maria, 32 anos",
      feedback: "Depois de anos sofrendo com barriga inchada, finalmente encontrei alívio com o acompanhamento da Lethícia!"
    },
    {
      image: "/images/result-ana.jpg",
      alt: "Paciente com mais disposição e energia",
      title: "Saúde Intestinal Restaurada",
      description: "Equilíbrio digestivo conquistado",
      name: "Ana, 28 anos",
      feedback: "Minha digestão melhorou completamente. Sem mais gases, sem mais desconforto. Me sinto outra pessoa!"
    },
    {
      image: "/images/result-carla.jpg",
      alt: "Paciente com alimentação equilibrada",
      title: "Relação Saudável com a Comida",
      description: "Sem culpa, sem restrição",
      name: "Carla, 35 anos",
      feedback: "Aprendi a comer sem medo e sem culpa. A nutrição comportamental mudou minha vida."
    },
    {
      image: resultJuliana,
      alt: "Paciente feliz com resultado do tratamento",
      title: "Fim das Intolerâncias",
      description: "Identificação e manejo alimentar",
      name: "Juliana, 29 anos",
      feedback: "Descobri quais alimentos me faziam mal e hoje tenho um cardápio variado e sem sintomas."
    },
    {
      image: resultFernanda,
      alt: "Paciente ativa e com mais energia",
      title: "Mais Energia e Disposição",
      description: "Bem-estar recuperado",
      name: "Fernanda, 31 anos",
      feedback: "Com o intestino regulado, minha energia voltou. Acordo disposta e rendo muito mais no dia a dia."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-nude-soft">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-rose mb-6">
            Resultados Reais que Inspiram
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-chrome-gold to-chrome-dark rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-gray-rose/80 max-w-3xl mx-auto">
            Cada transformação é única. Veja como a nutrição individualizada e o cuidado com a saúde 
            intestinal transformaram a vida dessas pacientes.
          </p>
        </div>

        <div className="mb-16 animate-on-scroll">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {beforeAfterImages.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-3xl p-6 shadow-lg hover-lift border border-chrome-light/20 h-full">
                    <div className="relative mb-4 overflow-hidden rounded-2xl">
                      <img 
                        src={item.image} 
                        alt={item.alt} 
                        className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-105" 
                        loading="lazy" 
                      />
                      <div className="absolute top-4 right-4 w-10 h-10 bg-chrome-gold rounded-full flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-rose mb-2">
                      {item.title}
                    </h3>
                    <p className="text-chrome-gold font-medium mb-3">
                      {item.description}
                    </p>
                    
                    <div className="border-t border-chrome-light/30 pt-4">
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-chrome-gold fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-gray-rose/80 italic text-sm mb-2 leading-relaxed">
                        "{item.feedback}"
                      </blockquote>
                      <p className="font-semibold text-gray-rose text-sm">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        
        <div className="text-center animate-on-scroll">
          <div className="bg-gradient-to-br from-chrome-light/20 to-nude-soft/50 rounded-3xl p-8 border border-chrome-light/30">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-chrome-gold fill-current" />
              <span className="text-gray-rose font-semibold text-lg">
                Mais de 300 pacientes atendidos com cuidado e dedicação
              </span>
            </div>
            
            <p className="text-gray-rose/80 mb-6 max-w-2xl mx-auto">
              Sua transformação pode ser a próxima! Descubra como a nutrição individualizada 
              pode melhorar sua saúde intestinal e sua qualidade de vida.
            </p>
            
            <a 
              href="https://wa.me/5513981214037" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-chrome-gold text-white px-8 py-4 rounded-full font-semibold hover-lift shadow-lg hover:bg-chrome-dark transition-all"
              aria-label="Agendar consulta via WhatsApp"
            >
              Quero cuidar da minha saúde
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
