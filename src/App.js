import './App.css';
import Header from './components/Header'
// import TinderCard from './components/TinderCard';
import Chats from './components/Chats'
// import SwipeButtons from './components/SwipeButtons'
import Home from './components/Home'

import ChatScreen from './components/ChatScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          {/* Tinder Cards */}
          <Route index path='/' element={
              <Home />
          } />

          {/* Chats screen */}
          <Route path='/chat' element={
            <>
              <Header backButton='/'/>
              <Chats />
            </>
          }/>

          {/* Individual chats */}
          <Route path='/chat/:person' element={
            <>
              <Header backButton='/chat'/>
              <ChatScreen />
            </>
          }/>

        </Routes>
      </BrowserRouter>


    </div >
  );
}

export default App;
