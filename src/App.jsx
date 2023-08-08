import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import TheCourt from "./pages/TheCourt";
import TheTrickster from "./pages/TheTrickster";
import Characters from "./pages/Characters";
import About from "./pages/About";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import MyContext from "./MyContext";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  const updateScreenSize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <MyContext.Provider
      value={{ screenWidth, setScreenWidth, isOpen, setIsOpen }}
    >
      <Router>
        <div className="flex flex-col justify-start items-center">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/theCourt" element={<TheCourt />} />
            <Route path="/theTrickster" element={<TheTrickster />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="about" element={<About />} />
          </Routes>
          <footer className="flex items-center justify-center text-xs mt-3">
            COPYRIGHT <AiOutlineCopyrightCircle /> 2023
          </footer>
        </div>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
