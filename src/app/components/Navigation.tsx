"use client";
import { useState } from "react";

type Section = { key: string, label: string }
export default function Navigation({
  sections,
  onNavigate,
}: {
  sections: Section[],
  onNavigate: (key: string) => void
}) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-40 bg-stellarBg/90 backdrop-blur border-b border-[#222a42]/40 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
        <span className="font-black tracking-widest text-lg text-stellarAccent">SecurePass</span>
        <ul className="hidden md:flex gap-7 text-stellarIndigo font-semibold">
          {sections.map(sec => (
            <li key={sec.key}>
              <button
                onClick={() => onNavigate(sec.key)}
                className="transition hover:text-stellarAccent py-2 px-2"
              >
                {sec.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden border border-stellarIndigo text-stellarIndigo rounded px-4 py-1 bg-stellarCard/70"
          onClick={() => setOpen(o => !o)}
          aria-label="Otwórz/zamknij menu"
        >Menu</button>
      </div>
      {open && (
        <div className="md:hidden bg-stellarBg/95 border-b border-stellarIndigo/30">
          <ul className="flex flex-col gap-1 p-3 text-stellarIndigo font-bold">
            {sections.map(sec => (
              <li key={sec.key}>
                <button
                  onClick={() => {
                    onNavigate(sec.key)
                    setOpen(false)
                  }}
                  className="block w-full px-4 py-3 text-left rounded hover:bg-stellarCard/80 hover:text-stellarAccent transition"
                >
                  {sec.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
