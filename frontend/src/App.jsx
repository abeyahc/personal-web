import Load from "./pages/Load";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<Load />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
