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

  const onBack = () => {
    navigate('/');
  };

  useEffect(() => {
    tg.BackButton.show();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    tg.onEvent('backButtonClicked', onBack);
    return () => {
      tg.offEvent('backButtonClicked', onBack);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignChange = (newSign) => {
    setSign(newSign);
    navigate('/horoscope');
  }

  return (
    <div className="App">
      <button type="button" onClick={onBack}>back</button>
      <Routes>
        <Route path='/' element={<Home lang={lang} setSign={handleSignChange} />} />
        <Route path='/horoscope' element={<Horoscope sign={sign} lang={lang} />} />
      </Routes>
    </div>
  );
}

export default App;
