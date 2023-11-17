import styles from './Clients.module.scss';
import HomeTitle from '../HomeTitle/HomeTitle';
import logo from '../../../../assets/next.png';
import Container from '../container/Container';


export default function Clients () {
    return (
        <div className={styles.clients}>
            <Container>
                <HomeTitle h4='Clients' h2='Amazing clients who trust us'/>
                <div className={styles.clients__images}>
                <img src={logo} alt="" />
                <img src={logo} alt="" />
                <img src={logo} alt="" />
                <img src={logo} alt="" />
                </div>
            </Container>
        </div>
    )
}