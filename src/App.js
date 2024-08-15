import './App.css';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/home';
import Horoscope from './pages/horoscope';

function App() {
  const [sign, setSign] = useState('');
  const navigate = useNavigate();

  const handleSignChange = (newSign) => {
    setSign(newSign);
    navigate('/horoscope');
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home lang={'ru'} setSign={handleSignChange} />} />
        <Route path='/horoscope' element={<Horoscope sign={sign} />} />
      </Routes>
    </div>
  );
}

export default App;
