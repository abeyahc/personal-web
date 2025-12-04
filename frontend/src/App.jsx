import { Routes, Route } from "react-router-dom";
import Load from "./pages/Load";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Photography from "./pages/Photography";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Load />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={< Projects />} />
      <Route path="/photography" element={< Photography />} />
    </Routes>
  );
}
