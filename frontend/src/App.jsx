import { Routes, Route } from "react-router-dom";
import Load from "./pages/Load";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Photography from "./pages/Photography";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Load />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Projects" element={< Projects />} />
      <Route path="/Photography" element={< Photography />} />
    </Routes>
  );
}
