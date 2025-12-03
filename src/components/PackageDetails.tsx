// src/components/PackageDetails.tsx
import { motion } from "framer-motion";
import { OFFERS } from "../lib/content";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const PACKAGE_DETAILS: Record<
  string,
  {
    subtitle: string;
    idealFor: string[];
    includes: string[];
    notes?: string[];
  }
> = {
  kids: {
    subtitle: "Kids Party 0% – bez alkoholu, maksimum zabawy",
    idealFor: [
      "urodziny dzieci",
      "komunie, chrzciny",
      "festyny szkolne, pikniki rodzinne",
    ],
    includes: [
      "Kolorowe koktajle bezalkoholowe serwowane w kubkach z owocami i parasolkami",
      "Minimum 3 smaki lemoniady 0% (np. cytrusowa, malinowa, ogórkowa) w dystrybutorach",
      "Woda z owocami / miętą dostępna przez cały czas trwania imprezy",
      "Dekoracje barowe dostosowane do dzieci (kolorowe słomki, owoce, żelki)",
    ],
    notes: [
      "W tym pakiecie nie serwujemy żadnego alkoholu – 0% to 0%.",
      "Opcjonalnie można dodać „mini flair show” dla dzieci (bez ognia i bez alkoholu).",
    ],
  },
  family: {
    subtitle: "Family & Seniors – elegancko, ale spokojnie",
    idealFor: [
      "imprezy rodzinne 40–80 osób",
      "urodziny, rocznice, małe wesela",
      "eventy, gdzie ważni są również kierowcy i seniorzy",
    ],
    includes: [
      "Zbalansowana karta: 50% koktajle alkoholowe, 50% bezalkoholowe",
      "Klasyki w lekkiej wersji (np. Aperol Spritz, Hugo, lekkie sours)",
      "Mocny nacisk na estetykę szkła i dekoracji – „instagramowy” wygląd drinków",
      "Stały dostęp do wody i lemoniady 0% dla kierowców i dzieci",
    ],
    notes: [
      "Idealny, gdy chcesz „coś ekstra”, ale bez ostrego lania.",
      "Można spokojnie połączyć z serwisem wina/sali weselnej.",
    ],
  },
  standard: {
    subtitle: "Classic Wedding / Event – złoty środek",
    idealFor: [
      "wesela 70–150 osób",
      "eventy firmowe, bankiety",
      "imprezy, gdzie bar ma być mocnym punktem wieczoru",
    ],
    includes: [
      "Pełna karta koktajli klasycznych + kilka autorskich propozycji Eliksir",
      "Shot bar na bazie wódki / likierów (np. „kamikaze”, „wściekły pies” itp.)",
      "Dopasowanie alkoholi do preferencji (np. więcej rumu przy klimacie tropical)",
      "Wersje bezalkoholowe wybranych klasyków dla kierowców i kobiet w ciąży",
    ],
    notes: [
      "Ten pakiet zwykle dobrze „niesie” imprezę 6–8 godzin.",
      "Można dołożyć KEG, jeśli sala nie zapewnia piwa lane-go.",
    ],
  },
  premium: {
    subtitle: "Premium & Flair – efekt WOW",
    idealFor: [
      "większe wesela z naciskiem na show",
      "eventy premium, gale, VIP room",
      "marki, które chcą zbudować wizerunek poprzez bar",
    ],
    includes: [
      "Rozszerzona karta koktajli premium (np. tequila, gin premium, whisky)",
      "Pokazy flair (żonglowanie butelkami) w ustalonych blokach czasowych",
      "Własne syropy / infuzje, dekoracje premium, złożone koktajle signature",
      "Możliwość brandingu baru (logo firmy/pary młodej na froncie)",
    ],
    notes: [
      "Wymaga trochę większego budżetu, ale robi ogromną robotę w social media.",
      "Idealny, gdy chcesz, żeby goście mówili „to było coś innego niż zwykłe wesele”.",
    ],
  },
};

const ADDON_DETAILS = [
  {
    id: "fountain",
    name: "Fontanna czekolady",
    bullets: [
      "Fontanna o wysokości ok. 60–70 cm (na ok. 50–80 osób)",
      "Belgijska czekolada mleczna lub deserowa (min. 4 kg na start)",
      "Zestaw dodatków: owoce (truskawki / winogrona / banany), pianki, wafle",
      "Jednorazowe patyczki i talerzyki w cenie",
    ],
    note: "Przy większej liczbie gości dokładamy kolejne porcje czekolady i owoców – ilości skalujemy razem z kalkulatorem.",
  },
  {
    id: "lemonade",
    name: "Stacja lemoniad & napojów",
    bullets: [
      "Dystrybutory 2×12 L (łącznie 24 L na 50 osób jako punkt wyjścia)",
      "Minimum 2–3 smaki (np. cytryna–mięta, malina, ogórek–bazylia)",
      "Możliwość pełnego brandingu (tabliczki z nazwami, karta smaków)",
      "Idealne uzupełnienie pakietu Kids lub Family & Seniors",
    ],
    note: "Przy imprezach plenerowych i w upałach warto mocniej podbić ilość – kalkulator uwzględnia skalowanie wg liczby gości.",
  },
  {
    id: "keg",
    name: "KEG piwa 30 L z podajnikiem",
    bullets: [
      "Standardowy KEG 30 L – ok. 100 piw 0,3 L",
      "Chłodzenie, reduktor, nalewak – w komplecie obsługa barmańska",
      "Dobór marki piwa do budżetu / preferencji",
    ],
    note: "KEG dostępny wyłącznie w pakietach z alkoholem – kalkulator automatycznie blokuje tę opcję przy Kids Party 0%.",
  },
];

export default function PackageDetails() {
  return (
    <section
      id="pakiety-szczegoly"
      className="py-24 md:py-28 bg-black border-t border-white/5"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* nagłówek sekcji */}
        <motion.div
          className="text-center mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-amber-400 uppercase tracking-[0.3em] text-xs md:text-sm mb-3">
            Szczegóły pakietów
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Co dokładnie zawiera pakiet?
          </h2>
          <p className="text-white/55 text-sm md:text-base max-w-3xl mx-auto">
            Poniżej rozpisujemy w prosty sposób, do jakich imprez pasuje każdy
            pakiet i co realnie dostajesz w cenie. Bez ściemy, bez „drobnego
            druczku”.
          </p>
        </motion.div>

        {/* pakiety */}
        <div className="space-y-10 md:space-y-12 mb-16">
          {Object.values(OFFERS).map((offer) => {
            const details = PACKAGE_DETAILS[offer.id];
            if (!details) return null;

            return (
              <motion.article
                key={offer.id}
                id={`pakiet-${offer.id}`}
                className="border border-white/10 bg-gradient-to-b from-neutral-950 to-black/90 p-6 md:p-8"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div>
                    <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-2">
                      {offer.name}
                    </h3>
                    <p className="text-amber-300 text-xs md:text-sm uppercase tracking-[0.25em] mb-3">
                      {details.subtitle}
                    </p>
                  </div>
                  <div className="text-right md:text-right">
                    <p className="text-white/50 text-xs uppercase tracking-[0.2em]">
                      od
                    </p>
                    <p className="font-playfair text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
                      {offer.price.toLocaleString("pl-PL")} zł
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-10 text-sm md:text-base">
                  <div className="space-y-3">
                    <p className="text-white/45 text-xs uppercase tracking-[0.2em]">
                      Idealny na
                    </p>
                    <ul className="list-disc list-inside text-white/80 space-y-1.5">
                      {details.idealFor.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <p className="text-white/45 text-xs uppercase tracking-[0.2em]">
                      W cenie pakietu
                    </p>
                    <ul className="list-disc list-inside text-white/80 space-y-1.5">
                      {details.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {details.notes && (
                  <div className="mt-5 border-t border-white/10 pt-4 text-xs md:text-sm text-white/60 space-y-1.5">
                    {details.notes.map((n) => (
                      <p key={n}>• {n}</p>
                    ))}
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>

        {/* dodatki */}
        <motion.div
          className="border border-amber-400/40 bg-gradient-to-b from-neutral-950 to-black/90 p-6 md:p-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-amber-200 mb-2">
            Dodatki specjalne
          </h3>
          <p className="text-white/60 text-sm md:text-base mb-6">
            Każdy dodatek w kalkulatorze to realna usługa z zaplanowaną ilością
            produktów. Poniżej rozpisujemy, co dokładnie zawiera cena
            orientacyjna.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-sm md:text-base">
            {ADDON_DETAILS.map((addon) => (
              <div
                key={addon.id}
                className="border border-white/10 bg-black/40 p-4 md:p-5"
              >
                <h4 className="text-white font-semibold mb-3">
                  {addon.name}
                </h4>
                <ul className="list-disc list-inside text-white/80 space-y-1.5 mb-3">
                  {addon.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <p className="text-white/55 text-xs">{addon.note}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
