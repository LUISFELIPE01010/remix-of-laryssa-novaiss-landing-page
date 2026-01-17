
import { Star, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="absolute inset-0 bg-chrome-light rounded-3xl transform -rotate-3 opacity-30"></div>
              <img 
                src="/lovable-uploads/7bf96de5-d389-4e35-ab20-4b5b05009ab0.png"
                alt="Karine Keppler em consulta nutricional, demonstrando cuidado e atenção com paciente"
                className="relative rounded-3xl shadow-xl w-full max-w-md mx-auto object-cover h-[400px] md:h-[500px]"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-8 animate-on-scroll">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-rose mb-4">
                Quem sou eu?
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-chrome-gold to-chrome-dark rounded-full"></div>
            </div>
            
            <p className="text-lg text-gray-rose leading-relaxed">
              Sou nutricionista por escolha e por propósito. Há 9 anos deixei a engenharia para seguir a área da saúde, onde encontrei minha verdadeira vocação: cuidar de pessoas de forma integral.
            </p>
            
            <p className="text-lg text-gray-rose leading-relaxed">
              Ao longo dessa jornada, me dediquei intensamente aos estudos e ao desenvolvimento humano, acreditando que resultados reais nascem da conexão entre corpo, mente e alma. Hoje, com meu consultório, uno conhecimento técnico, escuta e empatia para ajudar cada paciente a acessar o seu melhor.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-chrome-light rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-chrome-dark" />
                </div>
                <div className="text-2xl font-bold text-gray-rose">500+</div>
                <div className="text-sm text-gray-rose">Vidas transformadas</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8 text-chrome-dark" />
                </div>
                <div className="text-2xl font-bold text-gray-rose">9 anos</div>
                <div className="text-sm text-gray-rose">De experiência</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-nude-soft rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-chrome-dark" />
                </div>
                <div className="text-2xl font-bold text-gray-rose">100%</div>
                <div className="text-sm text-gray-rose">Personalizado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
