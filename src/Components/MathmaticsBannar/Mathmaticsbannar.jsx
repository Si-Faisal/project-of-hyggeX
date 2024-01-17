import React from 'react';
import './Mathmaticsbannar.css'
import Tab from '../Tab/Tab';
import Slider from '../Slider/Slider';

const Mathmaticsbannar = () => {
    return (
        <div>
            <div >
                <p className="bannar-header">Relations and Functions ( Mathematics )</p>
            </div>
            <div className=' '>
                <Tab></Tab>
                <Slider></Slider>
            </div>
            
        </div>
    );
};

export default Mathmaticsbannar;