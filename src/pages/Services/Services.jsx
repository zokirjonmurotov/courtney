import React from 'react';
import Title from '../../Components/Title/Title'
import GlobalCard from '../../Components/GlobalCard/GlobalCard';
import Apply from '../../Components/Apply/Apply';
import icon1 from '../../../public/images/GlobalCard Icons/teams.png';
import icon2 from '../../../public/images/GlobalCard Icons/staff.png';
import icon3 from '../../../public/images/GlobalCard Icons/outsourcing.png';
import icon4 from '../../../public/images/GlobalCard Icons/remote.png';
import styles from './Services.module.scss'

const Services = () => {
    return (
        <div className={styles.services}>
            <Title h2Text='Hire Permanent and Remote Developers' pText='From full-time remote engineering teams to hourly contractors, work with remote devs as needed'/>
            <div className={styles.gCards}>
            <GlobalCard flex='row' width='100%' icon={icon1} heading='Dedicated Teams' bottom='Building an extended team with Courtney is just like opening your own remote development center, but without the hassle.' />
            <GlobalCard flex='row' width='100%' icon={icon2} heading='Staff Augmentation' bottom='IT Staff Augmentation is a service designed to add extra talent to your team on an on-demand basis. This allows businesses to immediately find the right fit for hard-to-fill or temporary positions, which boosts the scalability and efficiency of project development.' />
            <GlobalCard flex='row' width='100%' icon={icon3} heading='Software Outsourcing' bottom='Today, organizations all over the world deal with software outsourcing companies to have access to experienced software engineers with a variety of tech expertise ranging from user experience design to blockchain consulting.' />
            <GlobalCard flex='row' width='100%' icon={icon4} heading='Remote Office' bottom='Courtney is a trustworthy partner that can help you open your own remote development center and grow your business from Sri Lanka and United Kingdom.' />
            </div>
            <Apply/>
        </div>
    );
}

export default Services;
