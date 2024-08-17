import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/home';
import Horoscope from './pages/horoscope';

const tg = window.Telegram.WebApp.expand();

function App() {
  const [sign, setSign] = useState('');
  const navigate = useNavigate();

  useEffect(() => { tg.ready() }, []);

  const handleSignChange = (newSign) => {
    setSign(newSign);
    navigate('/horoscope');
  }

  return (
    <div className="App">
      <span className={'username'}>{tg.initDataUnsafe?.user?.username}</span>
      <Routes>
        <Route path='/' element={<Home lang={'ru'} setSign={handleSignChange} />} />
        <Route path='/horoscope' element={<Horoscope sign={sign} />} />
      </Routes>
    </div>
  );
}

export default App;
