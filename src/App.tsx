import React from 'react';
import Button from './components/common/Button/Button';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="full-wrapper">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <Content />
      </div>
      <div className="footer">
        <Footer />
      </div>
      <Button fontSize="small" task="default" activeColor={true} hoverGreen={false}>
        пополнить
      </Button>
      <Button fontSize="small" task="bet" activeColor={true} hoverGreen={false}>
        пополнить
      </Button>
      <Button fontSize="small" task="watch" activeColor={true} hoverGreen={false}>
        пополнить
      </Button>
    </div>
  );
}

export default App;
