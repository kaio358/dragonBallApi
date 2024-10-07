import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import ListaPersonagens from './componentes/personagens/ListaPersonagens';
import FiltroNome from './componentes/personagens/FiltroNome';
import Menu from './componentes/layout/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Menu />
          <Routes>
            <Route exact path="/" element={<ListaPersonagens />} />
            <Route exact path="/filtro" element={<FiltroNome/>}  />
          </Routes>
        </header>
      </Router>
    </div>
  );
}

export default App;
