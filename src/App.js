import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginRegistro, { Login } from './Components/LoginRegistro/LoginRegistro';
import Home from './Components/Home';
import MenuNavegacao from './Components/MenuNavegacao';
import Listagem from './Components/Listagem/Listagem';


function App() {
  return (
    <Router>
      <div>
      <MenuNavegacao/>
        <Routes>
          <Route exact path="/" element={<LoginRegistro/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/lista" element={<Listagem/>}/>

        </Routes>
      </div>
    </Router>
  );
}


export default App;
