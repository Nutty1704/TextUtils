// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import InputForm from './components/InputForm';
import { useState } from 'react';
import { invertTheme } from './utils/ui_theme_utils';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    const newMode = invertTheme(mode);
    setMode(newMode);
    applyTheme(newMode);
  }

  const applyTheme = (theme) => {
    document.body.style.backgroundColor = theme === 'light' ? 'white' : '#282c34';
    document.body.style.color = theme === 'light' ? 'black' : 'white';
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <InputForm heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
