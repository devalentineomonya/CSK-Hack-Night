import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
    
    <Navbar />
    <div className="font-grotesk overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
