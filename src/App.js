import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/home';
import Horoscope from './pages/horoscope';

const tg = window.Telegram.WebApp;

function App() {
  const [sign, setSign] = useState('');
  const [lang, setLang] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    tg.ready();
    setLang(tg.initDataUnsafe?.user?.language_code);
  }, []);

  const handleSignChange = (newSign) => {
    setSign(newSign);
    navigate('/horoscope');
  }
console.log(lang);
  return (
    <div className="App">
      <h2>{tg.initDataUnsafe?.user?.language_code}</h2>
      <Routes>
        <Route path='/' element={<Home lang={lang} setSign={handleSignChange} />} />
        <Route path='/horoscope' element={<Horoscope sign={sign} />} />
      </Routes>
    </div>
  );
}

export default App;
