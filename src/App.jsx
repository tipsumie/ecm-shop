import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header, Content, Footer } from './componets';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Content />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
