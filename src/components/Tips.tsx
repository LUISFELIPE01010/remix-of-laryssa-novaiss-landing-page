import { Apple, Clock, Droplets, Smile } from 'lucide-react';

const Tips = () => {
  const tips = [
    {
      icon: Apple,
      title: "Alimentos amigos do intestino",
      description: "Fibras, probióticos e prebióticos são essenciais. Inclua frutas, verduras, iogurte natural e grãos integrais na sua rotina.",
      color: "from-chrome-light to-gold-accent/30"
    },
    {
      icon: Smile,
      title: "Coma sem culpa e sem medo",
      description: "A nutrição comportamental ensina que não existem alimentos proibidos. O equilíbrio e a consciência são mais importantes que a restrição.",
      color: "from-gold-accent to-chrome-light/30"
    },
    {
      icon: Clock,
      title: "Respeite os sinais do seu corpo",
      description: "Coma quando sentir fome, pare quando estiver satisfeita. Prestar atenção nos sinais do corpo é o primeiro passo para uma alimentação saudável.",
      color: "from-nude-soft to-chrome-light/30"
    },
    {
      icon: Droplets,
      title: "Hidratação e saúde intestinal",
      description: "A água é fundamental para o bom funcionamento do intestino. Beba pelo menos 35ml por kg de peso corporal ao longo do dia.",
      color: "from-chrome-light to-nude-soft/30"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-rose mb-6">
            Dicas da Nutri
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-chrome-gold to-chrome-dark rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-gray-rose/80 max-w-2xl mx-auto">
            Pequenas mudanças que fazem toda a diferença na sua saúde intestinal
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {tips.map((tip, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover-lift animate-on-scroll border border-chrome-light/20 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tip.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-chrome-light to-gold-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <tip.icon className="w-8 h-8 text-chrome-dark" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-rose mb-4">
                  {tip.title}
                </h3>
                
                <p className="text-gray-rose/80 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tips;
