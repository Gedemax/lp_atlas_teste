import React from 'react';
import { Check, Bot, Users, TrendingUp, Shield, Headphones, Star } from 'lucide-react';

export function ValueProposition() {
  const benefits = [
    {
      icon: Bot,
      title: "Acesso completo ao Atlas (IA de atendimento)",
      description: "Sistema inteligente que responde leads 24/7"
    },
    {
      icon: Headphones,
      title: "Suporte técnico + implantação guiada",
      description: "Nossa equipe te acompanha em cada passo"
    },
    {
      icon: Users,
      title: "Mentorias práticas com plano de ação",
      description: "Estratégias personalizadas para seu CFC"
    },
    {
      icon: Star,
      title: "Grupo de bastidores com insights e provas reais",
      description: "Acesso exclusivo às melhores práticas"
    },
    {
      icon: Shield,
      title: "Acompanhamento diário durante o período",
      description: "Suporte ativo por 30 dias completos"
    },
    {
      icon: TrendingUp,
      title: "Estratégia que já custou R$ 2.000 para outras empresas",
      description: "Metodologia comprovada, agora gratuita"
    }
  ];

  return (
    <section id="beneficios" className="py-16 sm:py-20 bg-[#F4F5F7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-montserrat text-[#001F3F] mb-4 px-2 sm:px-0">
            O que você vai receber no teste gratuito
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            Tudo que você precisa para transformar seu CFC em uma máquina de vendas automatizada
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group hover:border-[#00C2FF]/30"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#00C2FF]/10 rounded-lg flex items-center justify-center group-hover:bg-[#00C2FF]/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-[#00C2FF]" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-[#00E676] mr-2 flex-shrink-0" />
                    <h3 className="font-semibold text-[#001F3F] leading-tight">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-[#00E676]/10 text-[#00E676] px-6 py-3 rounded-lg font-medium">
            <Star className="w-5 h-5 mr-2" />
            Valor total: R$ 2.000 • Hoje: <strong>GRATUITO</strong>
          </div>
        </div>
      </div>
    </section>
  );
}