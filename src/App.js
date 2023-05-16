import './App.css';
import Header from './Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          {/* Header */}
          <Route index path='/' element={<Header />} />

          {/* Tinder Cards */}
          {/* Buttons below tinder cards */}

          {/* Chats screen */}
          {/* Individual chats of people */}
        </Routes>
      </BrowserRouter>


    </div >
  );
}

export default App;
