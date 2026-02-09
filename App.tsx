
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  TrendingUp, 
  ShieldCheck, 
  Target, 
  Layers, 
  Layout, 
  Zap, 
  XCircle, 
  CheckCircle2
} from 'lucide-react';
import { Button } from './components/Button';

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.45, 0.32, 0.9] }}
  >
    {children}
  </motion.div>
);

const App: React.FC = () => {
  const EBOOK_LINK = "https://pay.kiwify.com.br/y9sK34d";
  
  // React Hooks must stay at the top level of the component
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-slate-900 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-slate-100 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
            className="absolute bottom-[-20%] left-[-10%] w-[70%] h-[70%] bg-slate-50 rounded-full blur-[100px]" 
          />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-[10rem] font-black text-slate-900 tracking-tighter mb-10 leading-[0.85]"
          >
            INTERNET <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-400 to-slate-900">QUE PAGA</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl md:text-3xl text-slate-500 font-light mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            Pare de buscar atalhos e descubra os fundamentos reais de quem constrói patrimônio digital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button 
              text="Quero acessar o ebook agora" 
              href={EBOOK_LINK} 
              size="lg"
            />
          </motion.div>
        </div>
      </header>

      {/* 2. Introdução - Dark Mode Contrast */}
      <section className="py-40 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn>
            <div className="flex items-center gap-6 mb-16 opacity-30">
              <div className="h-[2px] w-20 bg-white"></div>
              <span className="text-xs font-black tracking-[0.4em] uppercase">O Manifesto</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-16 leading-[1.1] tracking-tight">
              A internet é a maior ferramenta de <span className="text-slate-500 italic">alavancagem</span> do mundo.
            </h2>
            <div className="grid md:grid-cols-2 gap-16">
              <p className="text-2xl text-slate-400 font-light leading-relaxed">
                A maioria das pessoas fracassa porque ignora os fundamentos. Elas buscam "pulos do gato" enquanto os profissionais dominam os processos de escala.
              </p>
              <p className="text-2xl text-slate-400 font-light leading-relaxed">
                Este guia não é sobre sorte. É sobre método, clareza e resultados reais, desenhado para quem cansou de promessas vazias.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. O que você vai aprender - Modern Grid */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter italic">Conteúdo Prático</h2>
              <div className="w-32 h-2 bg-slate-900 mx-auto rounded-full"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <TrendingUp />, title: "Dinâmica do Capital", desc: "Como o fluxo de dinheiro realmente se comporta online" },
              { icon: <Layout />, title: "Modelos Vencedores", desc: "As estruturas de negócio que geram lucro constante" },
              { icon: <Layers />, title: "Escala Vertical", desc: "Como transformar renda ativa em renda passiva escalável" },
              { icon: <Target />, title: "Análise de Nicho", desc: "Otimizando sua escolha baseada na sua realidade" },
              { icon: <ShieldCheck />, title: "Zonas de Risco", desc: "Identificando e evitando erros que destroem projetos" },
              { icon: <Zap />, title: "Plano de Execução", desc: "Do zero absoluto até os primeiros resultados reais" }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-3xl transition-all duration-500 h-full group"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-sm mb-8 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-slate-900 tracking-tight">{item.title}</h3>
                  <p className="text-lg text-slate-500 leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Para quem é - High Contrast */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ borderRadius: "2rem" }}
            whileInView={{ borderRadius: "5rem" }}
            className="bg-slate-900 text-white p-12 md:p-24 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px]"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-20 items-center">
              <div className="flex-1">
                <FadeIn>
                  <h2 className="text-4xl md:text-6xl font-black mb-10 leading-none">Para quem é este material?</h2>
                  <p className="text-2xl text-slate-400 font-light leading-relaxed mb-10">
                    Para pessoas comprometidas que buscam um guia honesto, organizado e sem ruído técnico desnecessário.
                  </p>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-5 text-xl font-bold">
                      <CheckCircle2 className="text-slate-400" size={32} />
                      Resultados baseados em trabalho real.
                    </div>
                    <div className="flex items-center gap-5 text-xl font-bold">
                      <CheckCircle2 className="text-slate-400" size={32} />
                      Zero promessas de ganhos sem esforço.
                    </div>
                  </div>
                </FadeIn>
              </div>
              <div className="hidden md:block">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="opacity-10"
                >
                  <Target size={300} strokeWidth={0.5} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Filtro de Realidade */}
      <section className="py-32 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-xs font-black tracking-[0.5em] text-slate-400 uppercase mb-16">Filtro de Realidade</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "Sem fórmulas mágicas",
                "Sem dinheiro fácil",
                "Sem linguagens complexas",
                "Sem promessas vazias"
              ].map((item, index) => (
                <div key={index} className="px-10 py-5 bg-white border border-slate-200 rounded-2xl text-slate-400 font-bold tracking-tight line-through opacity-60">
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. Timeline - The Journey */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl font-black text-slate-900 mb-24 text-center tracking-tighter italic">O Método em 5 Passos</h2>
          </FadeIn>
          
          <div className="relative space-y-24">
            <div className="absolute left-[31px] top-4 bottom-4 w-1 bg-slate-100 hidden md:block"></div>
            {[
              { t: "Aquisição", d: "Acesso imediato ao material completo" },
              { t: "Fundação", d: "Entendimento dos pilares do mercado" },
              { t: "Estratégia", d: "Escolha do modelo ideal para você" },
              { t: "Execução", d: "Aplicação técnica sem distrações" },
              { t: "Escala", d: "Consistência e ampliação de lucros" }
            ].map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="relative pl-0 md:pl-24 group">
                  <div className="absolute left-0 w-16 h-16 rounded-3xl bg-slate-900 text-white flex items-center justify-center text-2xl font-black z-10 group-hover:scale-110 transition-transform duration-500 shadow-xl hidden md:flex">
                    {index + 1}
                  </div>
                  <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                    <h3 className="text-3xl font-black text-slate-900 mb-4">{step.t}</h3>
                    <p className="text-xl text-slate-500 font-light">{step.d}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Call to Action - Massive Scale */}
      <section className="py-60 px-6 bg-slate-900 text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '48px 48px' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeIn>
            <h2 className="text-6xl md:text-[8rem] font-black mb-12 tracking-tighter leading-none">O PASSO <br/> <span className="text-slate-500 underline decoration-slate-600 underline-offset-[20px]">DEFINITIVO</span>.</h2>
            <p className="text-2xl text-slate-400 mb-20 font-light max-w-2xl mx-auto leading-relaxed">
              Assuma o controle da sua jornada financeira agora.
            </p>
            <Button 
              text="Garantir meu acesso agora" 
              href={EBOOK_LINK} 
              size="lg"
              className="bg-white text-slate-900 py-8 px-16 text-2xl rounded-[2rem]"
            />
          </FadeIn>
        </div>
      </section>

      {/* 9. Rodapé */}
      <footer className="py-32 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="max-w-sm">
              <div className="text-3xl font-black text-slate-900 tracking-tighter mb-6 italic">INTERNET QUE PAGA</div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Construindo a nova elite digital através de fundamentos sólidos e realidade prática.
              </p>
            </div>
            <div className="max-w-xl text-slate-400 text-xs leading-relaxed uppercase tracking-widest space-y-6">
              <p className="font-black text-slate-900">Aviso Legal</p>
              <p>
                Os resultados variam de pessoa para pessoa. Este material é estritamente educacional e não garante rendimentos financeiros sem a devida aplicação, disciplina e consistência do leitor.
              </p>
            </div>
          </div>
          <div className="mt-24 pt-12 border-t border-slate-100 flex justify-between items-center text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">
            <span>© {new Date().getFullYear()}</span>
            <span>Made for the Ambitious</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
