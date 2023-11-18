import styles from './Expertise.module.scss';
import GlobalCard from '../../../../Components/GlobalCard/GlobalCard';
import Container from '../container/Container';
import HomeTitle from '../HomeTitle/HomeTitle';
import icon1 from '../../../../../public/images/GlobalCard Icons/teams.png';
import icon2 from '../../../../../public/images/GlobalCard Icons/staff.png';
import icon3 from '../../../../../public/images/GlobalCard Icons/outsourcing.png';
import icon4 from '../../../../../public/images/GlobalCard Icons/remote.png';

export default function Expertise () {
    return (
        <div className={styles.section4}>
            <Container>
            <HomeTitle h4='Expertise' h2='Hire Permanent and Remote Developers' p='From full-time remote engineering teams to hourly contractors, work with remote devs as needed' left='left'/>
            <div className={styles.expertise}>
            <GlobalCard width='100%' icon={icon1} heading='Dedicated Teams' bottom='Find your next team member' />
            <GlobalCard width='100%' icon={icon2} heading='Staff Augmentation' bottom='Build a distributed development team' />
            <GlobalCard width='100%' icon={icon3} heading='Software Outsourcing' bottom='End-to-End Software Development Outsourcing Solutions' />
            <GlobalCard width='100%' icon={icon4} heading='Remote Office' bottom='Open your own remote development center and grow your business' />
            </div>
        </Container>
        </div>
    )
}
