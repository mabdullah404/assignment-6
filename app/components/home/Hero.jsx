

export default function Hero({ totalWorkouts }) {
  return (
    <section className="relative overflow-hidden rounded-[10px] border border-neutral-800 bg-[#070d18] px-5 py-5 sm:px-7 sm:py-6">
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full max-w-[540px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#dfe8f4] opacity-80">
            Workout library
          </p>
          <h1 className="mt-4 text-3xl font-black uppercase leading-[0.9] tracking-tighter text-white sm:text-5xl lg:text-[3.3rem]">
            Train with intent. Log every set.
          </h1>

          <p className="mt-5 max-w-md text-sm leading-6 text-neutral-300">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into your plan, and watch the week&apos;s work add up.
          </p>

          <button className="mt-6 inline-flex items-center rounded-md border border-neutral-700 bg-[#0d1828] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-200 transition hover:bg-[#10243a]">
            Browse workouts
          </button>
        </div>

        <div className="relative flex w-full justify-center lg:w-105 lg:justify-end">
          <div className="relative h-62.5 w-62.5 overflow-hidden rounded-[20px] border border-neutral-700 bg-[#091422] shadow-[0_0_28px_rgba(0,0,0,0.5)] sm:h-75 sm:w-75">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691505.jpg?w=740"
              alt="FitLog banner"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="sr-only">{totalWorkouts} workouts available</div>
    </section>
  );
}
