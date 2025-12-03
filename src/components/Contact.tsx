// src/components/Contact.tsx
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import type { CalculatorSnapshot } from "./Calculator";

type ContactProps = {
  calculatorSnapshot: CalculatorSnapshot | null;
};

export default function Contact({ calculatorSnapshot }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const lines: string[] = [
      `Imię i nazwisko: ${formData.name}`,
      `Email: ${formData.email}`,
      `Telefon: ${formData.phone || "-"}`,
      `Data imprezy: ${formData.date || "-"}`,
      `Liczba gości (z formularza): ${formData.guests || "-"}`,
      "",
      "Wiadomość:",
      formData.message || "-",
    ];

    if (calculatorSnapshot) {
      lines.push(
        "",
        "------------------------",
        "Dane z kalkulatora:",
        `Pakiet: ${calculatorSnapshot.offerName}`,
        `Liczba gości (kalkulator): ${calculatorSnapshot.guests}`,
        `Szacunkowa cena: ${calculatorSnapshot.totalAfterDiscount.toLocaleString("pl-PL")} PLN`,
        `Cena za osobę: ~${calculatorSnapshot.pricePerGuest.toFixed(2)} PLN`,
        `Szacowana liczba koktajli: ${calculatorSnapshot.estimatedCocktails}`,
        `Szacowana liczba shotów: ${calculatorSnapshot.estimatedShots}`,
        "Dodatki:",
        `- Fontanna / dry bar: ${
          calculatorSnapshot.addons.fountain ? "TAK" : "NIE"
        }`,
        `- Lemonady & napoje: ${
          calculatorSnapshot.addons.lemonade ? "TAK" : "NIE"
        }`,
        `- Keg / piwo lane: ${calculatorSnapshot.addons.keg ? "TAK" : "NIE"}`
      );
    }

    const subject = `Zapytanie ELIKSIR - ${formData.name || "bez imienia"}`;
    const body = lines.join("\n");

    const mailtoLink = `mailto:st.pitek@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="kontakt"
      className="pt-40 pb-40 bg-neutral-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />

      {/* tu jak w Testimonials: samo container, bez max-w-6xl */}
      <div className="container mx-auto px-6 relative">
        {/* NAGŁÓWEK */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-amber-400 uppercase tracking-[0.3em] text-xs md:text-sm mb-3">
            Kontakt
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
            Zamów wycenę
          </h2>
          <p className="text-white/55 text-sm md:text-base max-w-2xl mx-auto">
            Wyślij nam kilka podstawowych informacji. Odezwiemy się z
            dopasowaną wyceną i potwierdzeniem dostępności terminu.
          </p>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-7" />
        </motion.div>

        {/* jak w Testimonials – sama siatka ma max-w-6xl mx-auto */}
        <div className="grid gap-14 lg:grid-cols-2 items-start max-w-6xl mx-auto">
          {/* LEWA STRONA – dane kontaktowe */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-2xl md:text-3xl text-white mb-6">
              Porozmawiajmy o Twojej imprezie
            </h3>
            <p className="text-white/60 text-sm md:text-base mb-10 leading-relaxed">
              Najlepiej, gdy w wiadomości podasz typ wydarzenia, lokalizację,
              przybliżoną liczbę gości i godziny trwania imprezy. To pozwoli nam
              szybko przygotować konkretną propozycję.
            </p>

            <div className="space-y-7 text-sm">
              <a
                href="tel:+48517616618"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-amber-400/40 flex items-center justify-center group-hover:bg-amber-400/10 transition-colors">
                  <svg
                    className="w-5 h-5 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-[0.2em]">
                    Telefon
                  </p>
                  <p className="text-white text-base group-hover:text-amber-300 transition-colors">
                    +48 781 024 701
                  </p>
                </div>
              </a>

              <a
                href="mailto:st.pitek@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-amber-400/40 flex items-center justify-center group-hover:bg-amber-400/10 transition-colors">
                  <svg
                    className="w-5 h-5 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-[0.2em]">
                    Email
                  </p>
                  <p className="text-white text-base group-hover:text-amber-300 transition-colors">
                    st.pitek@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-amber-400/40 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657 13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-[0.2em]">
                    Lokalizacja bazowa
                  </p>
                  <p className="text-white text-base">
                    Kleszczów / Bełchatów (dojazd na całą Polskę)
                  </p>
                </div>
              </div>

              {calculatorSnapshot && (
                <div className="mt-4 p-4 border border-emerald-400/40 bg-emerald-400/5 text-xs text-emerald-100 rounded-sm">
                  <p className="font-semibold mb-1">
                    Dane z kalkulatora zostaną dołączone do maila.
                  </p>
                  <p className="leading-relaxed">
                    Pakiet: <strong>{calculatorSnapshot.offerName}</strong> ·{" "}
                    Goście: <strong>{calculatorSnapshot.guests}</strong> · Cena:{" "}
                    <strong>
                      {calculatorSnapshot.totalAfterDiscount.toLocaleString(
                        "pl-PL"
                      )}{" "}
                      PLN
                    </strong>
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* PRAWA STRONA – formularz */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-gradient-to-b from-neutral-900 to-neutral-950 border border-white/10 p-6 md:p-8 lg:p-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-7 text-sm">
              <div>
                <label className="text-white/45 text-xs uppercase tracking-[0.2em] block mb-2">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((f) => ({ ...f, name: e.target.value }))
                  }
                  className="w-full bg-transparent border-b border-white/25 py-2 text-white text-sm focus:border-amber-400 focus:outline-none mt-1"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white/45 text-xs uppercase tracking-[0.2em] block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((f) => ({ ...f, email: e.target.value }))
                    }
                    className="w-full bg-transparent border-b border-white/25 py-2 text-white text-sm focus:border-amber-400 focus:outline-none mt-1"
                  />
                </div>
                <div>
                  <label className="text-white/45 text-xs uppercase tracking-[0.2em] block mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((f) => ({ ...f, phone: e.target.value }))
                    }
                    className="w-full bg-transparent border-b border-white/25 py-2 text-white text-sm focus:border-amber-400 focus:outline-none mt-1"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white/45 text-xs uppercase tracking-[0.2em] block mb-2">
                    Data imprezy
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData((f) => ({ ...f, date: e.target.value }))
                    }
                    className="w-full bg-transparent border-b border-white/25 py-2 text-white text-sm focus:border-amber-400 focus:outline-none mt-1"
                  />
                </div>
                <div>
                  <label className="text-white/45 text-xs uppercase tracking-[0.2em] block mb-2">
                    Liczba gości
                  </label>
                  <input
                    type="number"
                    min={10}
                    max={400}
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData((f) => ({ ...f, guests: e.target.value }))
                    }
                    className="w-full bg-transparent border-b border-white/25 py-2 text-white text-sm focus:border-amber-400 focus:outline-none mt-1"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/45 text-xs uppercase tracking-[0.2em] block mb-2">
                  Wiadomość
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((f) => ({ ...f, message: e.target.value }))
                  }
                  className="w-full bg-transparent border-b border-white/25 py-2 text-white text-sm focus:border-amber-400 focus:outline-none resize-none"
                  placeholder="Np. wesele 120 osób, plener, chcemy bar z pokazem flair i pakietem premium..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold py-3.5 text-xs md:text-sm uppercase tracking-[0.2em] mt-4 hover:from-amber-300 hover:to-yellow-400 transition-all"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                Wyślij zapytanie
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
