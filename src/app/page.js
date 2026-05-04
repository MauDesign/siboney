import Image from "next/image";
import Countdown from "@/components/Countdown";

export default function Home() {
  const partyDate = "2026-07-04T16:00:00"; // Example date

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-between pt-20 pb-0 overflow-hidden">
        <Image
          src="/img/siboney.jpg"
          alt="Quinceañera background"
          fill
          priority
          className="object-cover brightness-75"
        />

        <div className="relative z-10 text-center flex flex-col items-center w-full px-4 pt-10">
          <div className="relative w-full max-w-[90vw] md:max-w-[1200px] h-[30vh] md:h-[40vh] animate-fade-in">
            <Image
              src="/img/name-siboney.png"
              alt="Nombre Siboney"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom: Portrait anchored to bottom and overlapping name */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-full max-w-3xl h-[60vh] md:h-[75vh]">
          <Image
            src="/img/siboney.png"
            alt="Siboney Portrait"
            fill
            className="object-contain object-bottom"
            priority
          />
          {/* Date Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            <p className="text-5xl md:text-7xl font-[family-name:var(--font-cherolina)] text-white drop-shadow-lg">
              04 Julio 2026
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white text-center">
        <h2 className="max-w-[90vw] text-5xl md:text-6xl font-[family-name:var(--font-mistral)] gold-text mb-4">Hay momentos en la vida que son especiales por sí solos, pero
          compartirlos con las personas que más queremos los hace inolvidable</h2>
        <div>

        </div>
      </section>
      {/* Intro Text Block */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h3 className="text-5xl font-[family-name:var(--font-mistral)] gold-text mb-10">Estás Invitado</h3>
          <p className="text-lg leading-relaxed text-gray-600">
            Mis padres, Hector Azuara y Jazmin Barrera, tienen el honor de invitarte a celebrar mis XV años.<br /> Acompañame en este día tan especial para mí.
          </p>
        </div>
      </section>

      {/* Two Columns: Image and Location */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/img/siboney-2.jpeg"
              alt="Party Venue"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-4xl font-[family-name:var(--font-mistral)] gold-text">Ubicación y Hora</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-4">
                <span className="text-2xl text-gold">📍</span>
                <div>
                  <h4 className="font-bold">Lugar del Evento: "Un Chapil"</h4>
                  <p>Calle Porfirio Díaz y Cuauhtémoc. Col Aguegueyo Platon Sanchez veracruz.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl text-gold">⏰</span>
                <div>
                  <h4 className="font-bold">Recepción</h4>
                  <p>A partir de las 04:00 p.m. </p>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/67YMhezoHzAQAZkm9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline border-gold text-gold hover:bg-gold hover:text-white mt-4"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Text Block */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-[family-name:var(--font-mistral)] italic mb-6">"El tiempo vuela, pero los recuerdos duran para siempre."</h3>
          <p className="text-gray-600">
            Cada detalle ha sido preparado con mucho amor para que esta noche sea perfecta.
          </p>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 bg-[#1a1a1a] text-white px-4 relative">
        {/* Subtle decorative background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-gold)_0%,_transparent_70%)]"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-[family-name:var(--font-mistral)] mb-12 gold-text">Faltan solo...</h2>
          <Countdown targetDate={partyDate} />
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-24 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-5xl font-[family-name:var(--font-mistral)] gold-text">Confirma tu asistencia enviándome un mensaje.</h2>
          <p className="text-2xl text-gray-600 font-light italic">Celebremos juntos.</p>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>© 2026 - Mi Fiesta de 15 Años. Con amor, Siboney.</p>
      </footer>
    </main>
  );
}
