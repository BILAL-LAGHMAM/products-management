import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import Nav from './components/Nav';
import {Routes, BrowserRouter, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
