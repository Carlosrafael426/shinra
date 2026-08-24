import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Terminal as TerminalIcon, 
  CheckCircle2, 
  ShieldCheck, 
  Activity, 
  Cpu, 
  Database, 
  Zap, 
  Sparkles,
  Layers
} from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<'build' | 'cluster' | 'benchmark'>('build');
  const [terminalLineIndex, setTerminalLineIndex] = useState(0);

  const terminalLogs = [
    { text: '→ Initializing Shinra Cloud Architecture Engine v4.8...', color: 'text-slate-400' },
    { text: '✓ Provisioning multi-region Kubernetes cluster [us-east, sa-east]', color: 'text-emerald-400' },
    { text: '✓ Auto-scaling event broker (Kafka + Redis cache) active', color: 'text-emerald-400' },
    { text: '✓ AI Agent Vector Store pgvector indexed (1.2M embeddings)', color: 'text-cyan-400' },
    { text: '✓ Zero-downtime CI/CD pipeline verified with 100% test coverage', color: 'text-emerald-400' },
    { text: '● Live metrics: 28,400 req/sec | Avg latency: 14.2ms | Error rate: 0.00%', color: 'text-amber-300 font-bold' },
    { text: '🚀 Systems status: SHINRA PRODUCTION READY - Ready for High-Scale Launch', color: 'text-cyan-300 font-bold' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalLineIndex((prev) => (prev < terminalLogs.length ? prev + 1 : prev));
    }, 600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-grid-pattern bg-radial-gradient">
      {/* Glow Ambient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(0,242,254,0.15)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-slate-300">Software House & Engenharia de Sistemas</span>
              <span className="text-cyan-400 font-bold">| SHINRA</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Construímos <span className="text-gradient-shinra">Sistemas & SaaS</span> de Alto Impacto para Empresas Líderes.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-light">
              Transformamos requisitos complexos em plataformas web escaláveis, inteligência artificial aplicada e microsserviços ultrarrápidos. Do blueprint de arquitetura ao deploy com SLA de 99.99%.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#estimador"
                className="group px-7 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all duration-300 shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:shadow-[0_0_35px_rgba(0,242,254,0.6)] flex items-center justify-center gap-3 cursor-pointer text-center"
              >
                <Zap className="w-5 h-5 text-slate-950 fill-slate-950" />
                <span>Simular Orçamento & Escopo</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenModal}
                className="px-6 py-4 rounded-xl text-base font-semibold text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Agendar Sessão Técnica</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 w-full">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Código 100% de sua Propriedade</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Garantia de 90 Dias em Contrato</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300 col-span-2 sm:col-span-1">
                <Activity className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>SLA de 99.99% e CI/CD Blindado</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Tech Terminal & Architecture Preview */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl glass-card border border-cyan-500/20 shadow-2xl shadow-cyan-950/40 overflow-hidden">
              
              {/* Terminal Header */}
              <div className="bg-[#0b1120] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                    shinra-core-engine://live
                  </span>
                </div>

                {/* Sub tabs */}
                <div className="flex items-center gap-1 bg-slate-900/90 rounded-lg p-0.5 border border-slate-800 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab('build')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === 'build' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Deploy
                  </button>
                  <button
                    onClick={() => setActiveTab('cluster')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === 'cluster' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Cluster
                  </button>
                  <button
                    onClick={() => setActiveTab('benchmark')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === 'benchmark' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    API
                  </button>
                </div>
              </div>

              {/* Terminal Screen Content */}
              <div className="p-5 bg-[#050914]/90 min-h-[320px] font-mono text-xs text-slate-300 flex flex-col justify-between">
                
                {activeTab === 'build' && (
                  <div className="space-y-2">
                    {terminalLogs.slice(0, terminalLineIndex + 1).map((log, idx) => (
                      <p key={idx} className={`${log.color} leading-relaxed transition-all`}>
                        {log.text}
                      </p>
                    ))}
                    {terminalLineIndex >= terminalLogs.length - 1 && (
                      <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                        <span className="flex items-center gap-1.5 text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Ambiente Staging Ativo
                        </span>
                        <span>Build: #SH-8942-OK</span>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'cluster' && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-300 flex items-center gap-1.5">
                          <Layers className="w-4 h-4 text-cyan-400" />
                          Microsserviços de Alta Concorrência
                        </span>
                        <span className="text-emerald-400 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          100% HEALTHY
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full w-[88%]" />
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                        <span>CPU: 18%</span>
                        <span>Memória: 3.2GB / 16GB</span>
                        <span>Pods: 12 Ativos</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-300 flex items-center gap-1.5">
                          <Database className="w-4 h-4 text-emerald-400" />
                          PostgreSQL Cluster + Redis Cache
                        </span>
                        <span className="text-cyan-400 text-[10px]">Hit Ratio: 99.4%</span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Pool de conexões PgBouncer ativo com réplicas síncronas de leitura.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-300 flex items-center gap-1.5">
                        <Cpu className="w-4 h-4 text-purple-400" />
                        Agente de IA / RAG Engine
                      </span>
                      <span className="text-purple-400 font-bold text-[11px]">8.4ms Inference</span>
                    </div>
                  </div>
                )}

                {activeTab === 'benchmark' && (
                  <div className="space-y-2.5 text-[11px]">
                    <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">POST</span>
                        <span className="text-slate-200">/v1/auth/session/token</span>
                      </div>
                      <span className="text-emerald-400 font-bold">12ms • 200 OK</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold text-[10px]">GET</span>
                        <span className="text-slate-200">/v1/analytics/realtime-stream</span>
                      </div>
                      <span className="text-cyan-400 font-bold">8ms • 200 OK</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold text-[10px]">POST</span>
                        <span className="text-slate-200">/v1/ai/vector-semantic-query</span>
                      </div>
                      <span className="text-purple-400 font-bold">24ms • 200 OK</span>
                    </div>

                    <div className="p-3 bg-gradient-to-r from-emerald-950/40 to-cyan-950/40 border border-emerald-500/30 rounded-xl text-center">
                      <p className="text-emerald-300 font-semibold text-xs">Taxa de Sucesso em Carga Extrema: 99.998%</p>
                      <p className="text-slate-400 text-[10px] mt-0.5">Testado com 50.000 requisições simultâneas</p>
                    </div>
                  </div>
                )}

                {/* Terminal Footer Bar */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Shinra Distributed Engine</span>
                  <span className="text-cyan-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    Security Guard: AES-256
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
