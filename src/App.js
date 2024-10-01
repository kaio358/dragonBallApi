import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import ListaPersonagens from './componentes/personagens/ListaPersonagens';
import Menu from './componentes/layout/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
        <Router>
          <Routes>

            <Route exact path="/" element={<ListaPersonagens/>}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
{/* <div className="App">
<Menu/>
<header className="App-header">
  <ListaPersonagens/>
</header>
</div> */}