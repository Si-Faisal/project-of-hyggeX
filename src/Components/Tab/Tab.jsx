import React, { useState } from 'react';
import './tab.css'
const Tab = () => {
    const [activeTab, setActiveTab] = useState('Study');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

    return (
        <div className='w-2/3 mx-auto mt-[56px] mb-[32px]'>
           <div role="tablist" className="tabs tabs-bordered">
                <a role="tab" className={`tab ${activeTab === 'Study' ? 'tab-active' : ''}`}
                   onClick={() => handleTabClick('Study')}>Study</a>
                <a role="tab" className={`tab ${activeTab === 'Quiz' ? 'tab-active' : ''}`}
                   onClick={() => handleTabClick('Quiz')}>Quiz</a>
                    <a role="tab" className={`tab ${activeTab === 'Test' ? 'tab-active' : ''}`}
                   onClick={() => handleTabClick('Test')}>Test</a>
                <a role="tab" className={`tab ${activeTab === 'Game' ? 'tab-active' : ''}`}
                   onClick={() => handleTabClick('Game')}>Game</a>
                <a role="tab" className={`tab ${activeTab === 'Others' ? 'tab-active' : ''}`}
                 onClick={() => handleTabClick('Others')}>Others</a>
                
            </div>
        </div>
    );
};

export default Tab;