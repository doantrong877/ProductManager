
import './App.css';
import Main from './views/Main';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Detail from './views/Detail';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>} path="/"/>
        <Route element={<Detail/>} path="/:id"/>
      </Routes>
    </div>
  );
}

export default App;
