import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We are working for you. This page will be available soon.
        </p>
        <a
          className="App-link"
          href="https://www.mercadolibre.com.ar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          In the meantime, you can buy things in MercadoLibre
        </a>
      </header>
    </div>
  );
}

export default App;
