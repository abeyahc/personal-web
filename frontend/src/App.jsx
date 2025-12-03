import { Routes, Route } from "react-router-dom";
import Load from "./pages/Load";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Load />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
