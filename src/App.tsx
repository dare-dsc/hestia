import { Routes, Route } from "react-router-dom";
import ThursdaySixPM from "./pages/ThursdaySixPM";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ThursdaySixPM />} />
      <Route path="/thursday" element={<ThursdaySixPM />} />
    </Routes>
  );
}

export default App;
