import React from 'react';
import './faq.css'
const FAQ = () => {
    return (
        <div className='mt-[30px]'>
            <span className='faq'>FAQ</span>
            <div className='w-[848px] mt-[48px]'>
            <div className="collapse collapse-arrow  !rounded-xl border border-[#217EEC]">
            <input type="radio" name="my-accordion-2"  /> 
            <div className="collapse-title text-xl font-medium">
              Can education flashcards be used for all age groups?
            </div>
            <div className="collapse-content"> 
                <p>Yes</p>
            </div>
            </div>
            <div className="collapse collapse-arrow  !rounded-xl border border-[#217EEC] mt-8">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium">
              How do education flashcards work?
            </div>
            <div className="collapse-content"> 
                <p>Yes</p>
            </div>
            </div>
            <div className="collapse collapse-arrow  !rounded-xl border border-[#217EEC] mt-8">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium">
            Can education flashcards be used for test preparation?
            </div>
            <div className="collapse-content"> 
                <p>Yes</p>
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default FAQ;