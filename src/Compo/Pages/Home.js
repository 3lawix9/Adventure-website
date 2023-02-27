import React from 'react'
import Herosection from '../Herosection'
import '../../App.css'
import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
  return (
    <div>
        <Herosection/>
        <Cards/>
        <Footer/>
    </div>
  );
}

export default Home;