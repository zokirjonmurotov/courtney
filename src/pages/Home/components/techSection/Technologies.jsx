import styles from './Technologies.module.scss';
import HomeTitle from '../HomeTitle/HomeTitle';
import Container from '../container/Container';
import logo1 from '../../../../assets/React_logo_wordmark 1.png'
import logo2 from '../../../../assets/angular-logo-icon-png-svg 1.png'
import logo3 from '../../../../assets/next.png'
import logo4 from '../../../../assets/node.png'

export default function Technologies () {
    return (
            <Container>
                <div className={styles.tech}>
                    <HomeTitle h4='Specialized' h2='Technologies'/>
                    <div className={styles.tech__images}>
                        <img src={logo1} alt="" />
                        <img src={logo2} alt="" />
                        <img src={logo3} alt="" />
                        <img src={logo4} alt="" />
                    </div>
                </div>
            </Container>
    )
}