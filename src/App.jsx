import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import TheCourt from './pages/TheCourt';

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theCourt" element={<TheCourt />} />
      </Routes>
    </Router>
  );
}

export default App;

