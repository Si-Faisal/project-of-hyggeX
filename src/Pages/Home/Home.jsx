import React from 'react';
import Header from '../../Components/Header/Header';
import './home.css'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Mathmaticsbannar from '../../Components/MathmaticsBannar/Mathmaticsbannar';
import CreateFlashCard from '../../Components/CreateFlashCard/CreateFlashCard';
import FAQ from '../../Components/FAQ/FAQ';

const Home = () => {
    return (
        <div className='homepage'>
            <Header></Header>
            <Breadcrumb></Breadcrumb>
            <Mathmaticsbannar></Mathmaticsbannar>
            <CreateFlashCard></CreateFlashCard>
            <FAQ></FAQ>
            
        </div>
    );
};

export default Home;