"use client";

import { useState, useRef, useEffect } from "react";

const OPTIONS = [
  { key: "duration", label: "Duration" },
  { key: "caloriesBurned", label: "Calories" },
  { key: "rating", label: "Rating" },
];

export default function SortDropdown({ sortBy, onChange }) {
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
    OPTIONS.find((o) => o.key === sortBy)?.label || "Duration";

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 text-sm font-medium bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2 hover:border-lime-400 transition-colors"
      >
        Sort By: {currentLabel}
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-neutral-900 border border-neutral-800 rounded-lg shadow-lg overflow-hidden z-10">
          {OPTIONS.map((opt) => (
            <button
              key={opt.key}
              onClick={() => {
                onChange(opt.key);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-neutral-800 transition-colors ${
                sortBy === opt.key ? "text-lime-400" : "text-neutral-300"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}