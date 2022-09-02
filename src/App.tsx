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
      <Button fontSize="small" activeColor={true} hoverColor="default" backgroundColor="default">
        Hello
      </Button>
    </div>
  );
}

export default App;
