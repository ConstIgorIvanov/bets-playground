import React from 'react';
import Modal from './components/common/Modal/Modal';

import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <Modal />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
