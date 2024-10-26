// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import InputForm from './components/InputForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import { invertTheme } from './utils/ui_theme_utils';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    const newMode = invertTheme(mode);
    setMode(newMode);
    applyTheme(newMode);

    showAlert(`Theme has been set to ${newMode}`, 'success');
  }

  const applyTheme = (theme) => {
    document.body.style.backgroundColor = theme === 'light' ? 'white' : '#282c34';
    document.body.style.color = theme === 'light' ? 'black' : 'white';
  }

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<InputForm showAlert={showAlert} heading="Enter the text to analyze" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
