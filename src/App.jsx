import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about"; // Import About Page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />       {/* Home Page */}
        <Route path="/about" element={<About />} /> {/* About Page */}
      </Routes>
    </Router>
  );
}

export default App;