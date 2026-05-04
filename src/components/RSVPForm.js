"use client";
import { useState } from "react";

export default function RSVPForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("¡Gracias! Tu asistencia ha sido confirmada.");
  };

  return (
    <div className="card w-full max-w-lg bg-base-100 shadow-xl mx-auto">
      <div className="card-body">
        <h2 className="card-title font-[family-name:var(--font-cherolina)] text-4xl mb-4 gold-text">Confirmar Asistencia</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Nombre Completo</span>
            </label>
            <input type="text" placeholder="Tu nombre" className="input input-bordered focus:border-gold" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Teléfono</span>
            </label>
            <input type="tel" placeholder="Tu teléfono" className="input input-bordered focus:border-gold" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">WhatsApp</span>
            </label>
            <input type="tel" placeholder="Tu WhatsApp" className="input input-bordered focus:border-gold" required />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn bg-gold hover:bg-magenta-dark text-white border-none">
              Confirmar
            </button>
          </div>
          {status && <p className="text-success mt-4 text-center font-bold">{status}</p>}
        </form>
      </div>
    </div>
  );
}
