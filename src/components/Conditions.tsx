import React from 'react';
import { Users, Calendar, MessageSquare, Settings, AlertCircle } from 'lucide-react';

export function Conditions() {
  const conditions = [
    {
      icon: Users,
      title: "Apenas 1 CFC será selecionado",
      description: "Vaga exclusiva nesta rodada"
    },
    {
      icon: Calendar,
      title: "Período do teste será de 30 dias",
      description: "Com mentoria ativa durante todo o período"
    },
    {
      icon: MessageSquare,
      title: "Processo será documentado",
      description: "No grupo como estudo de caso para outros CFCs"
    },
    {
      icon: Settings,
      title: "Aplicar anúncios obrigatório",
      description: "Seguir os passos da mentoria é fundamental"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#001F3F]/10 text-[#001F3F] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertCircle className="w-4 h-4 mr-2" />
            Condições Importantes
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-montserrat text-[#001F3F] mb-4">
            Condições para participar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Para garantir o sucesso do projeto, algumas condições precisam ser atendidas
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {conditions.map((condition, index) => (
            <div 
              key={index}
              className="bg-[#F4F5F7] rounded-xl p-6 border-l-4 border-[#00C2FF] hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#00C2FF]/10 rounded-lg flex items-center justify-center">
                    <condition.icon className="w-6 h-6 text-[#00C2FF]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#001F3F] mb-2 leading-tight">
                    ⚠️ {condition.title}
                  </h3>
                  <p className="text-gray-600">{condition.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-[#001F3F] to-[#002a5c] rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">🎯 Compromisso Mútuo</h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Nós investimos nosso tempo e conhecimento, você investe sua dedicação e aplicação das estratégias. 
            Juntos, vamos transformar seu CFC em uma referência no mercado.
          </p>
        </div>
      </div>
    </section>
  );
}