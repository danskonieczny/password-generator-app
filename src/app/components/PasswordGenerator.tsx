"use client";
import { useState } from "react";
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
    let out = "";
    for (let i = 0; i < length; ++i)
      out += charset.charAt(Math.floor(Math.random() * charset.length));
    setPwd(out);
    setCopied(false);
  }

  function copy() {
    if (!pwd) return;
    navigator.clipboard.writeText(pwd);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <div className="rounded-2xl shadow-xl p-7 bg-gradient-to-br from-indigo-50/70 via-white to-pink-50/60">
      <div>
        <label className="block mb-2 font-semibold">Długość hasła <span className="text-indigo-500">{length}</span></label>
        <input
          type="range"
          min={8}
          max={32}
          value={length}
          onChange={e => setLength(+e.target.value)}
          className="accent-indigo-600 w-full"
        />
      </div>
      <div className="flex gap-3 flex-wrap my-5 text-sm">
        <label><input type="checkbox" checked={upper} onChange={e => setUpper(e.target.checked)} className="accent-indigo-500 mr-1" />Wielkie litery</label>
        <label><input type="checkbox" checked={lower} onChange={e => setLower(e.target.checked)} className="accent-indigo-500 mr-1" />Małe litery</label>
        <label><input type="checkbox" checked={number} onChange={e => setNumber(e.target.checked)} className="accent-indigo-500 mr-1" />Cyfry</label>
        <label><input type="checkbox" checked={symbol} onChange={e => setSymbol(e.target.checked)} className="accent-indigo-500 mr-1" />Symbole</label>
      </div>
      <button
        onClick={generate}
        className="w-full py-3 font-bold rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-lg shadow transition"
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
              className="w-full px-4 py-3 rounded-lg border text-xl font-mono tracking-widest bg-gray-50 outline-indigo-500"
              style={{ letterSpacing: "0.12em" }}
            />
            <button
              onClick={copy}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-100 hover:bg-indigo-500 hover:text-white border-indigo-200 border px-3 py-1 rounded font-semibold shadow transition text-indigo-700"
            >
              {copied ? <Check size={22} /> : "Kopiuj"}
            </button>
          </div>
          <div className="mt-2 text-xs text-gray-500 text-right">Hasło jest generowane lokalnie</div>
        </div>
      )}
    </div>
  );
}
