"use client";

import { useState, useRef, useEffect } from "react";

const DEFAULT_OPTIONS = [
  { key: "duration", label: "Duration" },
  { key: "caloriesBurned", label: "Calories" },
  { key: "rating", label: "Rating" },
];

export default function SortDropdown({ options = DEFAULT_OPTIONS, sortBy = "duration", onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLabel =
    options.find((o) => o.key === sortBy)?.label || options[0]?.label || "Duration";

  return (
    <div className="relative inline-flex items-center gap-2" ref={ref}>
      <span className="text-sm text-neutral-400">Sort By</span>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 text-sm font-medium bg-transparent border border-neutral-600 rounded-full px-4 py-2 text-white hover:border-lime-400 transition-colors"
      >
        {currentLabel}
        <span className={`text-xs transition-transform ${open ? "rotate-180" : ""}`}>
          ⌄
        </span>
      </button>

      {open && (
        <ul className="absolute right-0 top-full mt-2 w-40 bg-neutral-900 border border-neutral-700 rounded-lg shadow-lg overflow-hidden z-20 py-1">
          {options.map((opt) => (
            <li key={opt.key}>
              <button
                type="button"
                onClick={() => {
                  onChange(opt.key);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-neutral-800 ${
                  sortBy === opt.key ? "text-lime-400 font-semibold" : "text-neutral-300"
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}