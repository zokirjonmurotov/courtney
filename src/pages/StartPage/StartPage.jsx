import React from 'react';
import Showcase from '../../Components/Showcase';
import Start from './components/Start/Start';
import DevSection from './components/DevSection/DevSection'
const StartPage = () => {
    return (
        <div>
            <Showcase showcaseBigText='How to Start' showcaseSmallText='We specialize in helping you build a team of expert developers.'/>
            <Start/>
            <DevSection/>
        </div>
    );
}

export default StartPage;
