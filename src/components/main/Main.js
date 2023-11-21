import React from 'react';
import './Main.css';
import Header from '../header/Header';
import Search from '../search/Search';
import Posts from '../posts/Posts';
import Footer from '../footer/Footer';

const Main = () => {
  return (
    <section className='main'>
      <Header />
      <Search />
      <Posts />
      {/* <Footer /> */}
    </section>
  );
};

export default Main;
