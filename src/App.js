import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled");
    }
  };

  return (
    <>
      <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert Alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route
              
              path="/about"
              element={<About />}
            />
            <Route
              
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Enter your text to Analyse below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
      
    </>
  );
}

export default App;
