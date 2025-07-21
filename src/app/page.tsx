"use client";

import { useRef } from "react";
import Navigation from "./components/Navigation";
import PasswordGenerator from "./components/PasswordGenerator";

const SECTIONS = [
  { key: "generator", label: "Generator" },
  { key: "trivia", label: "Ciekawostki" },
  { key: "faq", label: "FAQ" },
  { key: "tips", label: "Wskazówki" },
  { key: "stats", label: "Statystyki" },
];

export default function Page() {
  const refs = {
    generator: useRef<HTMLElement>(null),
    trivia: useRef<HTMLElement>(null),
    faq: useRef<HTMLElement>(null),
    tips: useRef<HTMLElement>(null),
    stats: useRef<HTMLElement>(null),
  };

  const handleNavigate = (key: string) => {
    refs[key as keyof typeof refs]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-bl min-h-screen from-indigo-100 via-violet-200 to-fuchsia-100 text-gray-900">
      <Navigation sections={SECTIONS} onNavigate={handleNavigate} />

      {/* Generator */}
      <section ref={refs.generator} id="generator" className="pt-24 pb-20 px-4 md:px-0 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl text-indigo-700 font-black mb-3 text-center">Nowoczesny Generator Haseł</h1>
        <div className="text-lg mb-8 max-w-2xl text-center text-gray-700 font-medium">
          Bezpieczne, losowe hasła generowane lokalnie na Twoim urządzeniu. 
        </div>
        <div className="w-full max-w-lg">
          <PasswordGenerator />
        </div>
      </section>
      
      {/* Trivia */}
      <section ref={refs.trivia} id="trivia" className="relative pt-24 pb-20 px-4 bg-gradient-to-r from-indigo-400/10 to-pink-400/10 backdrop-blur-lg">
        <h2 className="text-3xl font-bold text-pink-600 text-center mb-6">Ciekawostki o Hasłach</h2>
        <div className="max-w-2xl mx-auto grid gap-6">
          <div className="bg-white/80 rounded-xl p-6 shadow-md border-l-8 border-pink-400">
            <b>Najpopularniejsze hasło wciąż to <span className="text-pink-600">123456</span>.</b><br />
            Zawsze używaj unikalnych haseł!
          </div>
          <div className="bg-white/80 rounded-xl p-6 shadow-md border-l-8 border-violet-400">
            <b>Hasło o długości 12 znaków z symbolami jest nie do złamania dla zwykłego komputera przez miliony lat!</b>
          </div>
          <div className="bg-white/80 rounded-xl p-6 shadow-md border-l-8 border-indigo-400">
            <b>2/3 wycieków danych to efekt użycia tego samego hasła na różnych stronach.</b>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={refs.faq} id="faq" className="pt-24 pb-20 px-4">
        <h2 className="text-3xl font-bold text-indigo-600 text-center mb-6">FAQ</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            {
              q: "Czy hasła generowane są bezpieczne?",
              a: "Tak! Generator działa wyłącznie w Twojej przeglądarce. Każde hasło jest naprawdę losowe i nie trafia do sieci."
            },
            {
              q: "Czy powinienem kopiować hasła z generatora?",
              a: "Kopiowanie jest wygodne, jednak najlepiej korzystać z menedżera haseł."
            },
            {
              q: "Dlaczego warto ustawić symbol/cyfrę w haśle?",
              a: "Każda dodatkowa grupa znaków wielokrotnie zwiększa czas łamania hasła."
            }
          ].map((item, i) => (
            <details key={i} className="bg-gray-50 rounded-xl px-5 py-4 shadow font-medium">
              <summary className="cursor-pointer text-lg">{item.q}</summary>
              <div className="mt-2 text-gray-700">{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section ref={refs.tips} id="tips" className="pt-24 pb-20 px-4 bg-gradient-to-r from-fuchsia-200/80 via-white/70 to-indigo-200/80">
        <h2 className="text-3xl font-bold text-fuchsia-600 text-center mb-6">Szybkie wskazówki</h2>
        <div className="max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto">
          {[
            "Nigdy nie używaj tego samego hasła dla kilku kont.",
            "Zawsze ustawiaj jak najdłuższe hasła.",
            "Korzystaj z menedżera haseł, by nie zapomnieć kombinacji.",
            "Dodaj 2FA wszędzie, gdzie to możliwe.",
            "Unikaj prawdziwych słów w haśle.",
            "Nie udostępniaj haseł innym osobom."
          ].map((tip, i) => (
            <div key={i} className="rounded-xl p-5 shadow bg-white/90 border-l-4 border-fuchsia-500 font-medium">{tip}</div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section ref={refs.stats} id="stats" className="pt-24 pb-20 px-4 bg-gradient-to-l from-indigo-400/10 to-pink-400/10">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Statystyki haseł i bezpieczeństwa</h2>

        <div className="max-w-2xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:gap-8 gap-4">
            <div className="flex-1 bg-white/80 shadow p-6 rounded-xl border-l-8 border-blue-400">
              <span className="text-blue-600 font-bold text-xl">80%</span><br />
              <span className="text-gray-700">ataków na konta jest wynikiem słabego hasła</span>
            </div>
            <div className="flex-1 bg-white/80 shadow p-6 rounded-xl border-l-8 border-indigo-500">
              <span className="text-indigo-700 font-bold text-xl">34%</span><br />
              <span className="text-gray-700">użytkowników korzysta z 2FA</span>
            </div>
          </div>
          <table className="w-full bg-white/80 shadow rounded-xl overflow-hidden text-center">
            <thead>
              <tr className="bg-indigo-200/30 font-bold">
                <th className="py-2">Długość hasła</th>
                <th className="py-2">Czas łamania (brute-force)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { len: 6, time: "0.1 sekundy" },
                { len: 8, time: "5 minut" },
                { len: 10, time: "6 miesięcy" },
                { len: 12, time: "34 tys. lat" },
                { len: 14, time: "200 mln lat" }
              ].map((row, i) => (
                <tr key={i} className={i%2===0 ? "bg-indigo-50/30" : ""}>
                  <td className="py-2">{row.len} znaków</td>
                  <td className="py-2">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Stopka */}
      <footer className="text-center py-8 opacity-70 text-xs">
        &copy; {new Date().getFullYear()} SecurePass – Generator haseł na zawsze za darmo. 
      </footer>
    </div>
  );
}
