import React from'react';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import '../src/styles/style.css';

function App() {
  return(
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>    
  )
}

export default App;
