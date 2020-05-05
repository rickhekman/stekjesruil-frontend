import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './css/style.css';

function App() {

  return (

    <div className="container">

      <header className="header">
        <Header />
      </header>

      <main className="maincontent">
        <Main />
      </main>

      <footer className="footer">
        <Footer />
      </footer>

    </div>

  );
}

export default App;
