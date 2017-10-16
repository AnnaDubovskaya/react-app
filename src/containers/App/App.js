import React from 'react';
import Header from './Header';
import Footer from './Footer'
import News from '../News'
import './App.sass'

const App = ({ children }) => (
  <div className='app'>
    <Header />
    <News />
    {children}
    <Footer />
  </div>
);

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
