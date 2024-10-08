import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useTelegram } from './hooks/useTelegram';
import Home from './pages/home';
import Horoscope from './pages/horoscope';

function App() {
  const { tg, user } = useTelegram();
  const [sign, setSign] = useState('');
  const [lang, setLang] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    tg.ready();
    setLang(user.language_code);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    tg.MainButton.setParams({ text: lang === 'ru' ? 'Toggle еnglish' : 'Переключить на русский' });
    tg.MainButton.show();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  useEffect(() => {
    tg.onEvent('mainButtonClicked', toggleLang)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const handleSignChange = (newSign) => {
    setSign(newSign);
    navigate('/horoscope');
  }

  const toggleLang = () => {
    navigate('/');
    if (lang === 'ru') {
      setLang('en');
    } else {
      setLang('ru');
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home lang={lang} setSign={handleSignChange} />} />
        <Route path='/horoscope' element={<Horoscope sign={sign} lang={lang} />} />
      </Routes>
    </div>
  );
}

export default App;
