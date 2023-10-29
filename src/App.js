import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import Nav from './components/Nav';
import { Routes, BrowserRouter, Route } from "react-router-dom"
import SingleProduct from './components/SingleProduct';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/SingleProduct/:id' element={<SingleProduct />} />
          <Route path='/SingleProduct/:id/Card/:id' element={<Card />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
