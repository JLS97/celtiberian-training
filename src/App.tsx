import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './components/Home/Home.component';
import Games from './components/Games/Games.component';
import NBar from './components/Navbar/NBar.component';
import ShopDetail from './components/ShopDetail/ShopDetail.component';

function App() {

  return (
    <BrowserRouter>
      <NBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/shop/:id" element={<ShopDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
