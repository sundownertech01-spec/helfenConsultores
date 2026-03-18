import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Facebook,
  Linkedin,
  ExternalLink,
} from "lucide-react";

export default function HelfenPage() {
  const whatsappNumber = "524641566834"; // Reemplaza con el número real (incluye código de país)
  const whatsappMessage = encodeURIComponent(
    "Hola Helfen Consultores, me interesa recibir más información sobre sus servicios.",
  );

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* --- NAVEGACIÓN --- */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight text-slate-900">
            HELFEN <span className="text-blue-600">CONSULTORES</span>
          </h1>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#inicio" className="hover:text-blue-600 transition">
              Inicio
            </a>
            <a href="#nosotros" className="hover:text-blue-600 transition">
              Nosotros
            </a>
            <a href="#contacto" className="hover:text-blue-600 transition">
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/*Información general*/}
      <section id="inicio" className="py-20 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
            Consultoría Integral
          </span>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Ayudamos a pequeñas empresas y usuarios particulares a optimizar sus
            procesos y resolver problemas técnicos con asesoría especializada y
            cercana.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              <MessageCircle size={20} />
              Contactar por WhatsApp
            </a>
            <a
              href="#nosotros"
              className="flex items-center justify-center px-8 py-3 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition"
            >
              Saber más
            </a>
          </div>
        </div>
      </section>

      {/* Quienes somoms  */}
      <section id="nosotros" className="py-20 bg-slate-50 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Quiénes Somos</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              En <strong>Helfen Consultores</strong>, entendemos que la
              tecnología y la gestión empresarial pueden ser complejas. Nuestro
              nombre, derivado del alemán <em>"ayudar"</em>, define nuestra
              misión diaria.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Somos un equipo joven y dinámico enfocado en brindar soporte
              técnico y consultoría administrativa a negocios que buscan dar el
              siguiente paso en su profesionalización.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-blue-600 mb-2">Misión</h3>
              <p className="text-sm text-slate-500">
                Resolver problemas complejos con soluciones simples y efectivas.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-blue-600 mb-2">Valores</h3>
              <p className="text-sm text-slate-500">
                Transparencia, eficiencia y compromiso con el cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACTO Y UBICACIÓN --- */}
      <section id="contacto" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Contacto y Ubicación</h2>
            <p className="text-slate-600">
              Estamos listos para escucharte. Encuéntranos a través de nuestros
              canales oficiales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Detalles de contacto */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Dirección</h4>
                  <p className="text-slate-600 text-sm">
                    Calle Poza Rica #903, Colonia Bellavista
                    <br />
                    Salamanca, Guanajuato. CP 36760
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Correo Electrónico</h4>
                  <p className="text-slate-600 text-sm">
                    helfen.consultores.mx@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Teléfono</h4>
                  <p className="text-slate-600 text-sm">+52 464 156 68 34</p>
                </div>
              </div>
            </div>
            {/* Mapa de ubicación */}
            {/* Contenedor del Mapa */}
            <div className="md:col-span-2 w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-inner border border-slate-200">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Rica%20903,%20Bellavista,%2036730%20Salamanca,%20Gto.,%20Mexico&t=&z=16&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER Y REDES --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg">HELFEN CONSULTORES</h3>
            <p className="text-sm">
              © {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Linkedin size={24} />
            </a>
            {/* Botón flotante de WhatsApp para móviles */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              className="md:hidden fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50"
            >
              <MessageCircle size={28} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
