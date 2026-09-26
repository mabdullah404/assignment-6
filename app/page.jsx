"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/home/Hero";
import LibrarySection from "@/components/home/LibrarySection";
import { getAllWorkouts } from "@/lib/api";

export default function HomePage() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    getAllWorkouts()
      .then((data) => {
        if (isMounted) setWorkouts(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Hero totalWorkouts={workouts.length} />
        <LibrarySection workouts={workouts} loading={loading} />
      </div>
    </div>
  );
}