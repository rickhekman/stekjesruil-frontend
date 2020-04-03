import React from 'react';
import './css/style.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main'


function App() {
  return (
    <div className="container">

      <div className="navigation">
        <Navigation />
      </div>

      <header className="header">
        <Header />
      </header>

      <body>
        <Main />
      </body>

      <footer className="footer">
      </footer>
    </div>

  );
}

export default App;
