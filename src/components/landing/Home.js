import React from 'react';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';


const Home = () => {
    return (
        <div>
            
            <Header/>

            <div className="container text-muted">
                <Section/>
                <Footer/>
            </div>
            
        </div>
    );
};



export default Home;
