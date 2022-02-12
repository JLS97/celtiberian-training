import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './components/Home';
import Games from './components/Games/Games.component';
import NBar from './components/Navbar/NBar.component';
import Character from './components/Character';

function App() {

  return (
    <BrowserRouter>
      <NBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/locations" element={<Games />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
