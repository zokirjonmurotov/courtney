import React from 'react';
import Section2 from '../Home/components/section2/Section2';
import Process from '../Home/components/process/Process';
import Expertise from './components/expertise/Expertise';
import Specialized from '../Home/components/specialized/Specialized';
import Technologies from '../Home/components/techSection/Technologies';
import Clients from '../Home/components/clients/Clients';
import Showcase from './components/showcase/Showcase';
import Apply from '../../Components/Apply/Apply'
import Container from './components/container/Container';

const Home = () => {
    return (
        <div>
            <Showcase/>
            <Section2/>
            <Process/>
            <Expertise/>
            <Specialized/>
            <Technologies/>
            <Clients/>
            <Container>
            <Apply/>
            </Container>
        </div>
    );
}

export default Home;
