import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const ThursdaySixPM = lazy(() => import("./pages/ThursdaySixPM"));

function App() {
  return (
    <Suspense fallback={<div className="theme-thursday min-h-dvh" />}>
      <Routes>
        <Route path="/" element={<ThursdaySixPM />} />
        <Route path="/thursday" element={<ThursdaySixPM />} />
      </Routes>
    </Suspense>
  );
}

export default App;
