import './App.css';
import Header from './components/Header'
import TinderCard from './components/TinderCard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>

          {/* Tinder Cards */}
          <Route index path='/' element={<TinderCard />} />

          {/* Buttons below tinder cards */}

          {/* Chats screen */}
          {/* Individual chats of people */}
        </Routes>
      </BrowserRouter>


    </div >
  );
}

export default App;
