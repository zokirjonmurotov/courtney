import React from 'react';
import Showcase from '../../Components/Showcase';
import Start from './components/Start/Start';
import DevSection from './components/DevSection/DevSection'
import Apply from '../../Components/Apply/Apply';
const StartPage = () => {
    return (
        <div>
            <Showcase/>
            <Start/>
            <DevSection/>
            <Apply/>
        </div>
    );
}

export default StartPage;
