import logo from './logo.svg';
import './App.css';

import EthutamiProfile from './Component/ethutami/profile';
import RinaldyProfile from './Component/Renaldy/profile';
import FurqonProfile from './Component/Furqon/profile';
import Content from './contentbody'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kelompok 7
        </p>
      </header>
      <div className='App-content'>
        <EthutamiProfile/>
        <RinaldyProfile/>
        <FurqonProfile/>
      </div>
      <Content/>
    </div>
  );
}

export default App;
