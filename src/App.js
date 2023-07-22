
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 // Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#12395c';
      showAlert("Dark mode has been enabled", "success");
    }

    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  const toggleMode2 = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#198754';
      showAlert("Green mode has been enabled", "success");
    }

    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextAnalyzer" about="About Textutils" mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2} />
      <Alert alert={alert} />
      <div className="container">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <Textform showAlert={showAlert} heading="Enter text below to analyze" mode={mode} />
            </Route>
          </Switch>
          </div>
        </Router>
    </>
  );
}

export default App;
