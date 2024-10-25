// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import InputForm from './components/InputForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <InputForm heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
