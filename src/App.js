import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CoinHome from './pages/CoinHome';
import CoinData from './pages/CoinData';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<CoinHome />} />
        <Route path='/coins/:id' element={<CoinData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
