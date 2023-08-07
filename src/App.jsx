import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import TheCourt from './pages/TheCourt';
import TheTrickster from './pages/TheTrickster';
import Characters from './pages/Characters';
import About from './pages/About';

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
    </Router>
  );
}

export default App;

