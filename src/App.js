import './App.css';

import CuentaAtras from './componentes/CuentaAtras/CuentaAtras';
import RelojDigital from './componentes/RelojDigital/RelojDigital';
import Cronometro from './componentes/Cronometro/Cronometro'; 

function App() {
  return (
    <div className="App">
      <CuentaAtras/>
      <RelojDigital/>
      <Cronometro/>

    </div>
  );
}

export default App;
