
import { Target, Dumbbell, Sparkles, Utensils, Video, Brain } from 'lucide-react';
import { useState } from 'react';
import ServiceModal from './ServiceModal';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  
  const services = [
    {
      icon: Target,
      title: "Emagrecimento saudável e consciente",
      description: "Perca peso de forma sustentável, sem dietas restritivas ou sofrimento.",
      modalContent: "Com meu método de emagrecimento consciente, você vai aprender a perder peso de forma natural e duradoura. Sem dietas malucas, sem passar fome e sem culpa. Trabalho com estratégias personalizadas que respeitam seu corpo, sua rotina e suas preferências alimentares. O resultado? Uma transformação que vai muito além da balança - você vai se sentir mais disposta, confiante e em paz com a comida."
    },
    {
      icon: Dumbbell,
      title: "Ganho de massa magra",
      description: "Estratégias nutricionais para fortalecer e tonificar seu corpo de forma natural.",
      modalContent: "Quer ganhar músculo e definir seu corpo? Vou te ensinar exatamente como fazer isso através da alimentação. Com planejamento nutricional específico para hipertrofia, você vai otimizar seus treinos e acelerar os resultados. Trabalho com protocolos personalizados que consideram seu biotipo, rotina de exercícios e preferências alimentares. O resultado será um corpo mais forte, definido e saudável."
    },
    {
      icon: Sparkles,
      title: "Ortomolecular",
      description: "Reequilíbrio do organismo através de vitaminas, minerais e nutrientes específicos.",
      modalContent: "A nutrição ortomolecular busca o equilíbrio do organismo através da correção de deficiências nutricionais e uso de suplementação personalizada. Através de exames específicos e avaliação detalhada, identificamos as necessidades do seu corpo para promover saúde, energia e bem-estar de forma integrada. Cada protocolo é único e desenvolvido especialmente para você."
    },
    {
      icon: Utensils,
      title: "Reeducação alimentar para a vida real",
      description: "Aprenda a comer bem dentro da sua rotina, sem complicações.",
      modalContent: "Chega de regras complicadas e cardápios impossíveis de seguir! Minha reeducação alimentar é prática e feita para a vida real. Você vai aprender a fazer escolhas inteligentes em qualquer situação - no trabalho, em casa, no restaurante ou na casa da sogra. Ensino estratégias simples que se encaixam na sua rotina e te dão liberdade para viver sem neurose com a comida."
    },
    {
      icon: Video,
      title: "Consultas online ou presenciais",
      description: "Flexibilidade total para caber na sua agenda e localização.",
      modalContent: "Sua localização não pode ser um impeditivo para cuidar da sua saúde. Por isso ofereço atendimento 100% online para todo o Brasil, com a mesma qualidade e cuidado do presencial. Através de uma plataforma completa, você terá acesso a consultas, materiais educativos e acompanhamento personalizado. Se você está na região de Praia Grande, também atendo presencialmente em consultório acolhedor e moderno."
    },
    {
      icon: Brain,
      title: "MÉTODO BMS (BODY. MIND. SOUL)",
      description: "Transformação integral conectando corpo, mente e alma.",
      modalContent: "O MÉTODO BMS é uma abordagem única que integra corpo (Body), mente (Mind) e alma (Soul) para uma transformação verdadeira e duradoura. Acredito que resultados reais nascem da conexão entre esses três pilares. Trabalhamos não apenas a alimentação, mas também os aspectos emocionais e comportamentais que influenciam suas escolhas. É uma jornada de autoconhecimento e empoderamento para acessar o seu melhor."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-nude-soft to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-rose mb-6">
            Como posso te ajudar?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-chrome-gold to-chrome-dark rounded-full mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover-lift animate-on-scroll border border-chrome-light/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-chrome-light to-gold-accent rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-chrome-dark" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-rose mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-rose/80 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <button 
                onClick={() => setSelectedService(index)}
                className="inline-flex items-center gap-2 text-chrome-gold font-semibold hover:text-chrome-dark transition-colors"
                aria-label={`Saber mais sobre ${service.title}`}
              >
                Quero saber mais
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedService !== null && (
          <ServiceModal
            isOpen={selectedService !== null}
            onClose={() => setSelectedService(null)}
            title={services[selectedService].title}
            content={services[selectedService].modalContent}
          />
        )}
      </div>
    </section>
  );
};

export default Services;
