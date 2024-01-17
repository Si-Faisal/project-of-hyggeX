import React from 'react';
import logo from '../../assets/logoWithname.png'
import plus from '../../assets/Frame.png'
import './createFlush.css'

const CreateFlashCard = () => {
    return (
        <div className='flex justify-between items-center mt-[50.81px]'>
            <div className='flex'>
                <img src={logo} alt="" />
            </div>
            <div className='flex justify-between items-center pr-6 gap-1.5'>
                <img className=' w-[60px] h-[60px]' src={plus} alt="" />
                <p className='createFlas'>Create Flashcard</p>

            </div>
        </div>
    );
};

export default CreateFlashCard;