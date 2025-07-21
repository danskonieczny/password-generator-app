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
    <nav className="fixed top-0 left-0 w-full z-40">
      <div className="backdrop-blur bg-white/75 shadow-md flex items-center justify-between px-4 md:px-10 py-3 border-b gap-1">
        <span className="font-extrabold text-indigo-700 text-xl tracking-wide drop-shadow">SecurePass</span>
        <button 
          className="md:hidden px-3 py-2 text-indigo-700 border rounded-lg"
          aria-label="Otwórz/zamknij menu"
          onClick={() => setOpen(a => !a)}
        >
          <svg width="28" height="28" fill="none">
            {open ? (
              <path d="M7 21L21 7M7 7l14 14" stroke="#6366F1" strokeWidth="2" />
            ) : (
              <path d="M4 9h20M4 15h20" stroke="#6366F1" strokeWidth="2" />
            )}
          </svg>
        </button>
        <ul className="hidden md:flex gap-2 text-base font-semibold">
          {sections.map(sec => (
            <li key={sec.key}>
              <button
                onClick={() => onNavigate(sec.key)}
                className="px-3 py-2 hover:bg-indigo-100/60 rounded transition"
              >
                {sec.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 border-b shadow drop-shadow-sm">
          <ul className="flex flex-col gap-1 p-2 font-semibold">
            {sections.map(sec => (
              <li key={sec.key}>
                <button
                  onClick={() => {
                    onNavigate(sec.key)
                    setOpen(false)
                  }}
                  className="block w-full px-4 py-3 text-left hover:bg-indigo-50 rounded"
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
