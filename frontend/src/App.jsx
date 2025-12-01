import Load from "./pages/Load";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<Load />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
