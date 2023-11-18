import styles from './Process.module.scss';
import HomeTitle from '../HomeTitle/HomeTitle';
import Container from '../container/Container';
import pr1 from '../../../../assets/process1.png';
import pr2 from '../../../../assets/process2.png';
import pr3 from '../../../../assets/process3.png';
import pr4 from '../../../../assets/process4.png';


export default function Process () {
    return (
        <div className={styles.process}>
            <Container>
                <HomeTitle h4='How to Start' h2='Easy Process' p='We specialize in helping you build a team of expert developers, testers, and leaders.' center='center'/>
                <div className={styles.steps}>
                    <div className={styles.step}>
                        <img src={pr1} alt="" />
                        <h3>01 YOU ASK</h3>
                    </div>
                    <div className={styles.step}>
                        <img src={pr2} alt="" />
                        <h3>02 WE PROCEED</h3>
                    </div>
                    <div className={styles.step}>
                        <img src={pr3} alt="" />
                        <h3>03 NEGOTIATE</h3>
                    </div>
                    <div className={styles.step}>
                        <img src={pr4} alt="" />
                        <h3>04 YOU GET</h3>
                    </div>
                </div>
            </Container>
        </div>
    )
}