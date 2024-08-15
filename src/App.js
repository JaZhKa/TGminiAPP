import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home lang={'ru'} />} />
      </Routes>
    </div>
  );
}

export default App;
