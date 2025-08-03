import React from 'react';
import { ArrowRight, DollarSign, Clock, Target } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#001F3F] via-[#002a5c] to-[#001F3F] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00C2FF]/5 to-transparent"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#00E676]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#00C2FF]/10 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-8 text-center">
        <div className="mb-12">
          <div className="inline-flex items-center bg-[#00E676]/20 text-[#00E676] px-6 py-3 rounded-full text-lg font-medium mb-6">
            <DollarSign className="w-5 h-5 mr-2" />
            📌 Empresas já pagaram R$ 2.000 por esse mesmo suporte
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-montserrat mb-6 leading-tight px-2 sm:px-0">
            <strong className="text-[#00C2FF]">Hoje você pode testar</strong><br />
            tudo isso sem pagar nada
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 px-2 sm:px-0">
            — só precisa aplicar as estratégias —
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 mb-12 mx-2 sm:mx-0">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Clock className="w-8 h-8 text-[#00E676] mx-auto mb-3" />
              <h3 className="font-bold mb-2">30 Dias Completos</h3>
              <p className="text-gray-300 text-sm">Teste gratuito com suporte ativo</p>
            </div>
            
            <div>
              <Target className="w-8 h-8 text-[#00C2FF] mx-auto mb-3" />
              <h3 className="font-bold mb-2">Mentoria Incluída</h3>
              <p className="text-gray-300 text-sm">Acompanhamento personalizado</p>
            </div>
            
            <div>
              <DollarSign className="w-8 h-8 text-[#00E676] mx-auto mb-3" />
              <h3 className="font-bold mb-2">Zero Investimento</h3>
              <p className="text-gray-300 text-sm">Apenas compromisso com ação</p>
            </div>
          </div>
        </div>
        
        <a 
          href="https://form.respondi.app/Zq26IBtW" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group bg-[#00E676] hover:bg-[#00D16A] text-[#001F3F] font-bold py-4 sm:py-6 px-8 sm:px-12 rounded-xl text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#00E676]/25 mb-6 mx-2 sm:mx-0 inline-block text-center"
        >
          Quero participar da seleção
          <ArrowRight className="inline-block ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>
        
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-[#00E676] rounded-full mr-2 animate-pulse"></div>
            Apenas 1 vaga disponível
          </div>
          <div className="w-1 h-4 bg-gray-600"></div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            Seleção limitada
          </div>
        </div>
      </div>
    </section>
  );
}