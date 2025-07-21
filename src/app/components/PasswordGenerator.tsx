"use client";
import { useState, useEffect } from "react";
import { Check } from "lucide-react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(14);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(true);
  const [pwd, setPwd] = useState("");
  const [copied, setCopied] = useState(false);

  const charset = [
    upper && "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower && "abcdefghijklmnopqrstuvwxyz",
    number && "0123456789",
    symbol && "!@#$%^&*()_-+=<>?/;:[]{}"
  ].filter(Boolean).join("");

  function generate() {
    if (!charset) {
      setPwd("");
      return;
    }
    let out = "";
    for (let i = 0; i < length; ++i) {
      out += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPwd(out);
    setCopied(false);
  }

  function copy() {
    if (!pwd) return;
    navigator.clipboard.writeText(pwd);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  // Automatyczne generowanie hasła przy każdej zmianie opcji:
  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, upper, lower, number, symbol]);

  return (
    <div className="rounded-2xl shadow-xl p-8 bg-stellarCard/80 border border-stellarAccent/30 text-white">
      <div>
        <label className="block mb-2 font-semibold text-stellarIndigo">
          Długość hasła <span className="text-stellarAccent">{length}</span>
        </label>
        <input
          type="range"
          min={8}
          max={32}
          value={length}
          onChange={e => setLength(+e.target.value)}
          className="accent-stellarAccent w-full"
        />
      </div>
      <div className="flex gap-4 flex-wrap my-6 text-sm">
        <label>
          <input
            type="checkbox"
            checked={upper}
            onChange={e => setUpper(e.target.checked)}
            className="accent-stellarAccent mr-1"
          />
          Wielkie litery
        </label>
        <label>
          <input
            type="checkbox"
            checked={lower}
            onChange={e => setLower(e.target.checked)}
            className="accent-stellarAccent mr-1"
          />
          Małe litery
        </label>
        <label>
          <input
            type="checkbox"
            checked={number}
            onChange={e => setNumber(e.target.checked)}
            className="accent-stellarAccent mr-1"
          />
          Cyfry
        </label>
        <label>
          <input
            type="checkbox"
            checked={symbol}
            onChange={e => setSymbol(e.target.checked)}
            className="accent-stellarAccent mr-1"
          />
          Symbole
        </label>
      </div>
      <button
        onClick={generate}
        className="w-full py-3 font-bold rounded-lg bg-stellarAccent hover:bg-[#ff874c] text-white text-lg shadow-xl transition"
      >
        Generuj hasło
      </button>
      {pwd && (
        <div className="mt-6">
          <div className="relative">
            <input
              value={pwd}
              readOnly
              spellCheck={false}
              className="w-full px-4 py-3 rounded-lg border text-xl font-mono tracking-widest bg-stellarBg/80 outline-stellarAccent text-white"
              style={{ letterSpacing: "0.12em" }}
            />
            <button
              onClick={copy}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-stellarAccent/80 text-white border-2 border-white/10 px-3 py-1 rounded font-semibold shadow-lg transition hover:bg-stellarAccent"
            >
              {copied ? <Check size={22} /> : "Kopiuj"}
            </button>
          </div>
          <div className="mt-2 text-xs text-stellarIndigo/80 text-right">Hasło generowane lokalnie</div>
        </div>
      )}
    </div>
  );
}
