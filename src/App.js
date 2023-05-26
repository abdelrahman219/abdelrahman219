import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import Mynav from './components/Mynav';
import Prouducts from './components/Prouducts';
import ProductDetiels from './components/ProductDetiels';
import ProductForm from './components/ProductForm';
import NotFound from './components/NotFound';
function App() {
  return (
    <div className="App">
      <Mynav />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='products' element={<Prouducts />} />
        <Route path='products/:id' element={<ProductDetiels />} />
        <Route path='products/:id/edit' element={<ProductForm />} />
        <Route path='*' element={<NotFound />} />


      </Routes>
    </div>
  );
}

export default App;
