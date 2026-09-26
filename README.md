# 💪 FitLog — Workout Library

FitLog is a dark, no-nonsense gym companion web app where users can browse a library of workouts, add lifts to today's plan, save workouts for later, and track their daily training progress — all in one clean, responsive interface.

## 🚀 Live Demo
[Live Link](#)  :  https://assignment-6-fitlog.netlify.app/

## 🛠️ Technologies Used
- **Next.js** (App Router) — routing & page structure
- **React** — component-based UI
- **Tailwind CSS** — styling & responsive design
- **DaisyUI** — pre-built UI components
- **LocalStorage API** — persisting plan/saved data across reloads
- **Fetch API** — fetching live workout data from FitLog API


Alternative APi:
All data:
https://api.api-store.workers.dev/api/fitlog
Single Data:
https://api.api-store.workers.dev/api/fitlog/:id


## ✨ Key Features
1. **Dynamic Workout Library** — 12 workouts fetched live from the FitLog API, displayed as a responsive 3-column grid with category tags, equipment info, and stats (duration, calories, rating).
2. **Workout Detail Pages** — dynamic routes (`/workout/[id]`) showing full workout info, key specs, step-by-step instructions, and action buttons.
3. **My Plan Management** — add workouts to Today's Plan (capped at 5) or Save for Later, with live-updating navbar badges and real-time metrics (exercises, minutes, calories).
4. **Interactive Plan Actions** — mark workouts as done, remove them, and sort the list by Duration, Calories, or Rating — all with instant toast notification feedback.
5. **Persistent & Responsive Experience** — plan/saved data survives page reloads via localStorage, and the entire app adapts seamlessly across mobile, tablet, and desktop screens.

## 📁 Project Structure
- `app/` — pages & routing (Home, Workout Detail, My Plan, 404)
- `components/` — reusable UI components (layout, home, detail, my-plan, ui)
- `context/` — global state (PlanContext, ToastContext)
- `lib/` — API helper functions

## 📦 Getting Started
```bash
npm install
npm run dev
```

## 📬 Author
Built as part of the B14-A6 Fit Log assignment.