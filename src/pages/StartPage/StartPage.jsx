import React from 'react';
// import Showcase from '../../Components/Showcase';
import Showcase from '../../components/Showcase/Showcase';
import Start from './components/Start/Start';
import DevSection from './components/DevSection/DevSection'
import Apply from '../../Components/Apply/Apply';
const StartPage = () => {
    return (
        <div>
      <Showcase showcaseBigText='Technologies' showcaseSmallText='We specialize in helping you build a team of expert developers.' />

            {/* <Showcase/> */}
            <Start/>
            <DevSection/>
            <Apply/>
        </div>
    );
}

export default StartPage;
