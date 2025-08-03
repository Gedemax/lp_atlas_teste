import React from 'react';
import { Target, TrendingDown, Zap, Eye, CheckCircle } from 'lucide-react';

export function TargetAudience() {
  const criteria = [
    {
      icon: TrendingDown,
      text: "Estão cansados de perder matrículas por falta de atendimento ou estratégia"
    },
    {
      icon: Zap,
      text: "Querem automatizar e acelerar o WhatsApp comercial"
    },
    {
      icon: Eye,
      text: "Estão dispostos a aparecer como caso real de transformação usando IA"
    },
    {
      icon: CheckCircle,
      text: "Entendem que resultado vem de ação orientada, não de achismo"
    }
  ];

  return (
    <section className="py-20 bg-[#F4F5F7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#001F3F]/10 text-[#001F3F] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4 mr-2" />
            Perfil Ideal
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-montserrat text-[#001F3F] mb-4">
            Para quem é essa oportunidade?
          </h2>
          <p className="text-xl text-gray-600">
            Esta vaga é exclusiva para donos de CFC que:
          </p>
        </div>
        
        <div className="space-y-6">
          {criteria.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-[#00C2FF]/30 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#00C2FF]/10 rounded-lg flex items-center justify-center group-hover:bg-[#00C2FF]/20 transition-colors">
                    <item.icon className="w-6 h-6 text-[#00C2FF]" />
                  </div>
                </div>
                <p className="text-lg text-gray-700 font-medium">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#00C2FF]/10 to-[#00E676]/10 rounded-xl p-6 border border-[#00C2FF]/20">
            <p className="text-lg text-[#001F3F] font-medium">
              💡 <strong>Se você se identifica com esses pontos, essa oportunidade foi feita para você!</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}