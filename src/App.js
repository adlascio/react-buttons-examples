import './App.css';
import CounterButton from './components/CounterButton';
import LightButton from './components/LightButton';
import LottoButton from './components/LottoButton';
import { useState } from 'react';

function App() {
  const [light, setLight] = useState(false);
  const lightText = light === true ? 'on' : 'off';
  return (
    <div className='App'>
      <header className={lightText}>
        <h1>React Buttons</h1>
      </header>
      <main style={{ display: 'flex', justifyContent: 'space-around' }}>
        <CounterButton />
        <LightButton light={light} setLight={setLight} lightText={lightText} />
        <LottoButton />
      </main>
    </div>
  );
}

export default App;
