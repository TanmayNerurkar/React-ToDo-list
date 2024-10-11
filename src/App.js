import './App.css';
import About from './components\'/About';
import Navbar from './components\'/Navbar';
import TextForm from './components\'/TextForm';
import React, {useState} from 'react'
import Alert from './components\'/Alert';
import {
  BrowserRouter as Router,
  Routes, //instead of Switch
  Route,
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null)
  const [mode, setMode] = useState('light');
  const [modeTxt, setModeTxt] = useState("Enable Dark Mode")

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#020236';
      setModeTxt("Disable Dark Mode");
      showAlert("Dark mode Enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is amazing website"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now.."
      // }, 1300);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      setModeTxt("Enable Dark Mode");
      showAlert("Light mode mode Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
      <Router>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} modeTxt={modeTxt} />
      <Alert alert={alert} showAlert={showAlert} />
        <div className="container my-3">
          <Routes>
            <Route exact path='/' element={<TextForm heading="Enter the Text to analysis below" mode={mode} showAlert={showAlert} />}/>
            <Route exact path='/about' element={<About mode={ mode} />}/>
        </Routes>
        {/* <TextForm heading="Enter the Text to analysis below" mode={mode} showAlert={ showAlert}/> */}
      </div>
      </Router>
    </>
  );
}

export default App;
