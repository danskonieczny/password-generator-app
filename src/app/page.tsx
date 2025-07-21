"use client";
import { useRef } from "react";
import Navigation from "./components/Navigation";
import PasswordGenerator from "./components/PasswordGenerator";
import StarfieldBackground from "./components/StarfieldBackground";

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
    stats: useRef<HTMLElement>(null)
  };
  const handleNavigate = (key: string) => {
    refs[key as keyof typeof refs]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <StarfieldBackground />
    <div className="min-h-screen bg-stellarBg bg-gradient-to-br from-stellarBg via-[#2C2F58] to-stellarIndigo text-white font-sans relative overflow-x-hidden">
      <Navigation sections={SECTIONS} onNavigate={handleNavigate} />

      {/* Generator */}
      <section ref={refs.generator} id="generator" className="pt-32 pb-16 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center tracking-tight text-white mb-5 drop-shadow-lg">
          Generator haseł
        </h1>
        <p className="text-center text-lg mb-10 text-stellarIndigo/90 max-w-xl mx-auto font-medium">
          Twórz unikalne, silne hasła.
        </p>
        <div className="w-full max-w-lg">
          <PasswordGenerator />
        </div>
      </section>

      {/* Ciekawostki */}
      <section ref={refs.trivia} id="trivia" className="py-20 bg-stellarCard/80 border-y border-white/10">
        <h2 className="text-3xl font-bold mb-6 text-stellarIndigo text-center">Ciekawostki o Hasłach</h2>
        <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="p-7 rounded-2xl shadow-lg bg-white/5 border border-stellarAccent/30">
            <span className="text-stellarAccent font-semibold">Najpopularniejsze hasło to wciąż „123456”.</span>
            <div className="text-stellarIndigo/80 mt-2">Dbaj o unikalność i złożoność!</div>
          </div>
          <div className="p-7 rounded-2xl shadow-lg bg-white/5 border border-stellarIndigo/30">
            <span className="text-stellarIndigo font-semibold">12-znakowe hasło z symbolami to miliony lat łamania metodą brute-force.</span>
          </div>
          <div className="p-7 rounded-2xl shadow-lg bg-white/5 border border-stellarPurple/30">
            <span className="text-stellarPurple font-semibold">2/3 wycieków to efekt powtarzania tego samego hasła.</span>
          </div>
          <div className="p-7 rounded-2xl shadow-lg bg-white/5 border border-stellarAccent/30">
            <span className="text-stellarAccent font-semibold">Włącz 2FA – podwójna ochrona kont!</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={refs.faq} id="faq" className="py-20">
        <h2 className="text-3xl font-bold mb-6 text-center text-stellarAccent">FAQ</h2>
        <div className="max-w-2xl mx-auto">
          {[
              {
                q: "Czy hasła są generowane bezpiecznie?",
                a: "Hasła powstają lokalnie i nigdy nie są wysyłane w sieć."
              },
              {
                q: "Czemu warto korzystać z menedżera haseł?",
                a: "Możesz zapisywać bardzo złożone hasła bez obaw o zapomnienie."
              },
              {
                q: "Czy kopiowanie hasła jest bezpieczne?",
                a: "Najlepiej wklejać hasło tylko do zaufanych aplikacji. Później wyczyść schowek."
              }
            ].map((item, i) => (
              <details key={i} className="mb-4 bg-stellarCard/60 rounded-xl px-6 py-5 shadow-md border-l-4 border-stellarAccent">
                <summary className="cursor-pointer text-lg">{item.q}</summary>
                <div className="mt-2 text-stellarIndigo/90">{item.a}</div>
              </details>
          ))}
        </div>
      </section>

      {/* Wskazówki */}
      <section ref={refs.tips} id="tips" className="py-20 bg-gradient-to-r from-stellarCard/50 to-stellarIndigo/30">
        <h2 className="text-3xl font-bold mb-8 text-stellarPurple text-center">Szybkie wskazówki</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "Nie używaj tego samego hasła w kilku serwisach.",
            "Im dłuższe hasło – tym lepiej.",
            "Zawsze korzystaj z menedżera haseł.",
            "Dodaj 2FA, gdzie to możliwe.",
            "Nie udostępniaj haseł nikomu.",
            "Wymyślaj hasła, które nie są słowami słownikowymi."
            ].map((tip, i) => (
              <div key={i} className="rounded-xl bg-stellarCard/80 border-l-4 border-stellarAccent/70 p-6 font-medium shadow">
                {tip}
              </div>
          ))}
        </div>
      </section>

      {/* Statystyki */}
      <section ref={refs.stats} id="stats" className="pt-20 pb-16 border-t border-white/10">
        <h2 className="text-3xl font-bold mb-8 text-center text-stellarIndigo">Statystyki bezpieczeństwa</h2>
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-stellarCard/80 shadow p-7 rounded-xl border-l-8 border-stellarAccent/60">
              <span className="text-stellarAccent text-2xl font-bold">80%</span><br />
              <span className="text-white/90">ataków to efekt słabych haseł</span>
            </div>
            <div className="flex-1 bg-stellarCard/80 shadow p-7 rounded-xl border-l-8 border-stellarPurple/60">
              <span className="text-stellarPurple text-2xl font-bold">34%</span><br />
              <span className="text-white/90">osób korzysta z 2FA</span>
            </div>
          </div>
          <table className="w-full bg-white/5 shadow rounded-xl overflow-hidden text-center border border-white/10">
            <thead className="bg-stellarCard/30 text-stellarIndigo font-bold">
              <tr>
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
                <tr key={i} className={i%2===0 ? "bg-stellarCard/40" : ""}>
                  <td className="py-2">{row.len} znaków</td>
                  <td className="py-2">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <footer className="text-center py-10 opacity-70 text-xs">
        &copy; {new Date().getFullYear()} SecurePass – Stellar Styled Password Generator
      </footer>
    </div>
    </>
    
  );
}
