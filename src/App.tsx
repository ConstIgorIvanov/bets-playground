import React from 'react';

import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="full-wrapper">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
