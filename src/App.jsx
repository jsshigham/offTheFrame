import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import TheCourt from './pages/TheCourt';
import TheTrickster from './pages/TheTrickster';
import Characters from './pages/Characters';
import About from './pages/About';
import { AiOutlineCopyrightCircle } from "react-icons/ai";

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theCourt" element={<TheCourt />} />
        <Route path="/theTrickster" element={<TheTrickster />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="about" element={<About />} />
      </Routes>
      <footer className=' absolute bottom-1 w-64 left-1/2 -ml-32 flex items-center justify-center text-xs'>COPYRIGHT <AiOutlineCopyrightCircle /> 2023</footer>
    </Router>
    
  );
}

export default App;

