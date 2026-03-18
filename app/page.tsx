"use client";

import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Lightbulb, 
  Target, 
  Factory, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efecto para cambiar el estilo del navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-200 font-sans selection:bg-purple-500/30">
      
      {/* Botón Flotante de WhatsApp */}
      <a 
        href="https://wa.me/4642566834?text=Hola%20Helfen%20Consultores,%20me%20gustaría%20agendar%20una%20asesoría" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Navbar */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img src="/logo.png" alt="Helfen Consultores Logo" className="h-10 w-10 object-contain" />
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-widest text-white leading-none">HELFEN</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-purple-400">Consultores</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#nosotros" className="hover:text-purple-400 transition-colors">Nosotros</a>
            <a href="#servicios" className="hover:text-purple-400 transition-colors">Servicios</a>
            <a href="#metodologia" className="hover:text-purple-400 transition-colors">Metodología</a>
            <a href="#contacto" className="bg-gradient-to-r from-purple-600 to-blue-700 hover:from-purple-500 hover:to-blue-600 text-white px-6 py-2.5 rounded-full transition-all shadow-lg shadow-purple-900/20">
              Agendar Asesoría
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0B0F19]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 text-center">
            <a href="#nosotros" className="text-lg hover:text-purple-400" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</a>
            <a href="#servicios" className="text-lg hover:text-purple-400" onClick={() => setIsMobileMenuOpen(false)}>Servicios</a>
            <a href="#contacto" className="bg-purple-600 text-white px-6 py-3 rounded-full mt-4" onClick={() => setIsMobileMenuOpen(false)}>Agendar Asesoría</a>
          </div>
        )}
      </nav>

      <main>
        
        {/* HERO SECTION CON IMAGEN DE FONDO Y OVERLAY */}
        <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 overflow-hidden">
          
          {/* Imagen de fondo con cobertura oscura */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
          >
            {/* Esta es la capa de opacidad. Puedes ajustar el /85 a /70 o /90 según qué tan oscura la quieras */}
            <div className="absolute inset-0 bg-[#0B0F19]/85 backdrop-blur-[2px]"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-300 text-sm font-medium mb-8 backdrop-blur-sm">
              <Lightbulb size={16} />
              <span>Expertos en resolución de problemas empresariales</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
              Identificamos y resolvemos los <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">problemas ocultos</span> <br className="hidden md:block" />
              de tu Empresa.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Aportamos una visión externa, objetiva y estratégica. Eliminamos los cuellos de botella operativos de tu planta e impulsamos el crecimiento de tus ventas con soluciones reales.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/521234567890?text=Hola,%20me%20interesa%20hablar%20con%20un%20consultor" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#0B0F19] font-bold text-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                Hablar con un consultor <ArrowRight size={20} />
              </a>
              <a href="#servicios" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
                Conocer servicios
              </a>
            </div>
          </div>
        </section>

        {/* THE PROBLEM SECTION */}
        <section id="nosotros" className="py-24 px-6 bg-gradient-to-b from-[#0B0F19] to-[#0a101d] relative z-10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                ¿Por qué es tan difícil resolver los problemas desde adentro?
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                El día a día, la rutina y la inmersión total en las operations generan "ceguera de taller". Los problemas se vuelven paisaje y las áreas de mejora se invisibilizan para los equipos internos.
              </p>
              <ul className="space-y-4">
                {[
                  "Procesos productivos estancados o con mermas constantes.",
                  "Estrategias de ventas que ya no generan los mismos resultados.",
                  "Falta de claridad en el retorno de inversión publicitaria.",
                  "Equipos desalineados y resistencia al cambio."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-purple-500/20 p-1 rounded-full text-purple-400">
                      <ChevronRight size={16} />
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-[#111827] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                <h3 className="text-2xl font-semibold text-white mb-6">El Enfoque Helfen</h3>
                <p className="text-slate-400 mb-8">
                  Como agentes externos, analizamos tu empresa con ojos frescos y críticos. Identificamos la raíz real del problema (no solo los síntomas) y diseñamos planes de acción ejecutables para optimizar tu planta o disparar tus ventas.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-[#111827] bg-slate-800 flex items-center justify-center overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Consultor" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="text-white font-medium">Equipo de Especialistas</p>
                    <p className="text-purple-400">Listos para intervenir</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="servicios" className="py-24 px-6 border-t border-white/5 relative bg-[#0B0F19] z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-purple-400 font-semibold tracking-wide uppercase text-sm mb-3">Nuestros Servicios</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Soluciones Integrales para el Crecimiento</h3>
              <p className="text-slate-400 text-lg">
                Desde el piso de producción hasta la adquisición de clientes. Intervenimos donde tu empresa más lo necesita.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.08] hover:border-purple-500/50 transition-all duration-300 cursor-pointer">
                <div className="w-14 h-14 bg-blue-900/50 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  <Factory size={28} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Consultoría Operativa</h4>
                <p className="text-slate-400 mb-6">
                  Resolución de problemas en plantas e instalaciones. Identificamos cuellos de botella, optimizamos flujos de trabajo y mejoramos la rentabilidad de tus operaciones.
                </p>
              </div>

              {/* Service 2 */}
              <div className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.08] hover:border-purple-500/50 transition-all duration-300 cursor-pointer">
                <div className="w-14 h-14 bg-purple-900/50 rounded-2xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                  <Target size={28} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Publicidad Orientada a Ventas</h4>
                <p className="text-slate-400 mb-6">
                  Campañas de publicidad digital (Ads) diseñadas no solo para "likes", sino enfocadas 100% en la conversión, generación de leads calificados y cierre de ventas.
                </p>
              </div>

              {/* Service 3 */}
              <div className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.08] hover:border-purple-500/50 transition-all duration-300 cursor-pointer">
                <div className="w-14 h-14 bg-teal-900/50 rounded-2xl flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp size={28} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Crecimiento Orgánico</h4>
                <p className="text-slate-400 mb-6">
                  Estrategias de posicionamiento y marketing orgánico a largo plazo para asegurar un flujo constante de prospectos sin depender exclusivamente de presupuesto publicitario.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* METODOLOGIA / VALUE PROP */}
        <section id="metodologia" className="py-24 px-6 bg-[#111827] relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">¿Cómo transformamos tu empresa?</h2>
            <div className="grid md:grid-cols-4 gap-8 relative">
              
              {/* Line connector for desktop */}
              <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900"></div>

              <div className="relative flex flex-col items-center">
                <div className="w-24 h-24 bg-[#0B0F19] border-2 border-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white z-10 mb-6 shadow-[0_0_30px_rgba(126,34,206,0.3)]">
                  1
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Diagnóstico Profundo</h4>
                <p className="text-slate-400 text-sm">Auditoría externa sin sesgos para hallar la verdadera raíz del problema.</p>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="w-24 h-24 bg-[#0B0F19] border-2 border-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-white z-10 mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                  2
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Estrategia a Medida</h4>
                <p className="text-slate-400 text-sm">Diseño de plan de acción enfocado en operaciones eficientes o captación de ventas.</p>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="w-24 h-24 bg-[#0B0F19] border-2 border-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white z-10 mb-6 shadow-[0_0_30px_rgba(126,34,206,0.3)]">
                  3
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Implementación</h4>
                <p className="text-slate-400 text-sm">Acompañamiento en planta o despliegue de campañas junto a tu equipo.</p>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="w-24 h-24 bg-[#0B0F19] border-2 border-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-white z-10 mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                  4
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Medición de Resultados</h4>
                <p className="text-slate-400 text-sm">Evaluación con KPIs claros: reducción de mermas, aumento de ROI y ventas.</p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA SECTION CON IMAGEN DE FONDO */}
        <section id="contacto" className="py-24 px-6 relative overflow-hidden">
          {/* Imagen de fondo con cobertura oscura */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://www.elhorizonte.mx/internacional/conoce-la-historia-de-tilin-el-nino-bailarin/4053557')" }}
          >
            <div className="absolute inset-0 bg-[#0B0F19]/90 backdrop-blur-[1px]"></div>
          </div>

          <div className="max-w-5xl mx-auto bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-white/10 rounded-[3rem] p-10 md:p-20 relative z-10 backdrop-blur-md text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Es hora de una nueva perspectiva.
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Deja de luchar contra los mismos problemas. Permítenos aportar la claridad y experiencia de Helfen Consultores para llevar tu negocio al siguiente nivel.
            </p>
            <form className="max-w-md mx-auto space-y-4 text-left">
              <input 
                type="text" 
                placeholder="Nombre de tu empresa" 
                className="w-full bg-[#0B0F19]/60 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:border-purple-500 transition-colors backdrop-blur-sm"
              />
              <input 
                type="email" 
                placeholder="Correo electrónico" 
                className="w-full bg-[#0B0F19]/60 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:border-purple-500 transition-colors backdrop-blur-sm"
              />
              <button 
                type="button" 
                className="w-full bg-white text-[#0B0F19] font-bold text-lg px-8 py-4 rounded-xl hover:bg-slate-200 transition-colors"
              >
                Solicitar Diagnóstico Gratuito
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#070A11] py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            
            {/* Logo en el pie de página */}
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Helfen Consultores Logo" className="h-10 w-10 object-contain" />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-widest text-white leading-none">HELFEN</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-purple-400">Consultores</span>
              </div>
            </div>

            <p className="text-slate-500 max-w-sm">
              Tu aliado estratégico para resolver problemas operativos, impulsar ventas y lograr un crecimiento sostenible.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3 text-slate-500">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Optimización de Plantas</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Resolución de Problemas</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Publicidad y Ventas</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Crecimiento Orgánico</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4 text-slate-500">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-purple-400" />
                <span>+52 (123) 456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-purple-400" />
                <span>contacto@helfen.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-purple-400" />
                <span>Ciudad de México, México</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Helfen Consultores. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}