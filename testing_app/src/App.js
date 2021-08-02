import logo from './logo.svg';
import './App.css';

import EthutamiProfile from './Component/ethutami/profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kelompok 7
        </p>
      </header>
        <EthutamiProfile/>
    </div>
  );
}

export default App;
