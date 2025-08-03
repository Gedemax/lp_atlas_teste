import React from 'react';
import { ArrowRight, MessageCircle, Zap } from 'lucide-react';

export function Hero() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = React.useState(0);
  const [displayedText, setDisplayedText] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(true);
  
  const phrases = [
    "+ Mentoria Guiada",
    "+ Acesso Completo", 
    "+ Estratégia Aplicada"
  ];

  React.useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isTyping) {
      if (displayedText.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        }, 80); // Velocidade de digitação ágil
        return () => clearTimeout(timeout);
      } else {
        // Pausa após completar a digitação
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
        return () => clearTimeout(timeout);
      }
    } else {
      // Apaga o texto rapidamente
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 30); // Velocidade de apagar mais rápida
        return () => clearTimeout(timeout);
      } else {
        // Muda para a próxima frase
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentPhraseIndex, phrases]);


  return (
    <section id="inicio" className="relative bg-gradient-to-br from-[#001F3F] via-[#002a5c] to-[#001F3F] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00C2FF]/5 to-transparent"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#00C2FF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#00E676]/10 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-[#00E676]/20 text-[#00E676] px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
              <Zap className="w-4 h-4 mr-2" />
              🚨 Processo seletivo aberto
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight mb-6 px-2 sm:px-0">
              IA no seu CFC:<br />
              <span className="text-[#00C2FF]">30 Dias com o Atlas</span><br />
              <span className="inline-block min-h-[1.2em] relative">
                <span className="text-white">
                  {displayedText}
                </span>
                <span 
                  className={`inline-block w-0.5 h-8 bg-[#00E676] ml-1 ${isTyping ? 'animate-pulse' : 'opacity-100'}`}
                  style={{
                    animation: 'blink 1s infinite'
                  }}
                />
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed px-2 sm:px-0">
              📲 Enquanto sua equipe cuida de outras funções, o <strong className="text-[#00C2FF]">Atlas atende e começa as vendas!</strong>
            </p>
            
            <a 
              href="https://form.respondi.app/Zq26IBtW" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-[#00E676] hover:bg-[#00D16A] text-[#001F3F] font-bold py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00E676]/25 mb-4 mx-2 sm:mx-0 inline-block text-center"
            >
              Quero disputar a vaga
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="text-sm text-gray-400 px-2 sm:px-0">
              ⏰ Teste limitado • Apenas 1 CFC será selecionado
            </p>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#00C2FF] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="ml-3">
                  <p className="text-[#00C2FF] font-semibold">Atlas IA</p>
                  <p className="text-xs text-gray-400">online agora</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-[#00C2FF]/20 rounded-lg p-3 max-w-xs">
                  <p className="text-sm">Olá! Vi que você tem interesse em tirar a CNH. Que tipo de habilitação você procura?</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 max-w-xs ml-auto">
                  <p className="text-sm">Oi! Quero tirar a categoria B</p>
                </div>
                <div className="bg-[#00C2FF]/20 rounded-lg p-3 max-w-xs">
                  <p className="text-sm">Perfeito! 🚗✨Vamos montar uma proposta personalizada pra você conseguir sua CNH B. Conte comigo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}