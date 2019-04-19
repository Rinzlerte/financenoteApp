import React from 'react';
import './Home.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Balance from './Balance/Balance';
import Main from './Main/Main';


const Home = () => (

    <div className="home-conteiner">
        <Header/>
        <Main />
        <Balance />
        <Footer/>
    </div>
);

export default Home;