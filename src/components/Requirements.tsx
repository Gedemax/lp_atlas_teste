import React from 'react';
import { Megaphone, Video, Smartphone, AlertTriangle } from 'lucide-react';

export function Requirements() {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-montserrat text-[#001F3F] mb-4">
            📢 Você vai anunciar — e a gente vai te orientar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Para alcançar resultados reais, você precisará seguir nosso método comprovado
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 rounded-xl bg-[#00C2FF]/5 border border-[#00C2FF]/20">
            <div className="w-16 h-16 bg-[#00C2FF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Megaphone className="w-8 h-8 text-[#00C2FF]" />
            </div>
            <h3 className="font-bold text-[#001F3F] mb-2">Fazer um anúncio pago</h3>
            <p className="text-gray-600 text-sm">Investimento a partir de R$ 20/dia</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-[#00C2FF]/5 border border-[#00C2FF]/20">
            <div className="w-16 h-16 bg-[#00C2FF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="w-8 h-8 text-[#00C2FF]" />
            </div>
            <h3 className="font-bold text-[#001F3F] mb-2">Gravar um vídeo simples</h3>
            <p className="text-gray-600 text-sm">Com nosso roteiro (nós vamos te orientar)</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-[#00C2FF]/5 border border-[#00C2FF]/20">
            <div className="w-16 h-16 bg-[#00C2FF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-[#00C2FF]" />
            </div>
            <h3 className="font-bold text-[#001F3F] mb-2">Aplicar as estratégias</h3>
            <p className="text-gray-600 text-sm">No seu WhatsApp com apoio da nossa equipe</p>
          </div>
        </div>
        
        <div className="bg-[#00E676]/10 border border-[#00E676]/30 rounded-xl p-6 text-center">
          <div className="flex items-center justify-center mb-3">
            <AlertTriangle className="w-6 h-6 text-[#00E676] mr-2" />
            <span className="font-semibold text-[#001F3F]">⚙️ Não se preocupe — vamos guiar cada passo</span>
          </div>
          <p className="text-gray-700">
            Desde o criativo do anúncio até o atendimento com IA. Nossa equipe estará ao seu lado durante todo o processo.
          </p>
        </div>
      </div>
    </section>
  );
}