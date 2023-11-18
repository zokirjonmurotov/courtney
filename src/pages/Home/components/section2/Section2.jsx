import styles from './Section2.module.scss';
import GlobalCard from '../../../../Components/GlobalCard/GlobalCard';
import Container from '../container/Container';
import icon1 from '../../../../../public/images/GlobalCard Icons/architect.png';
import icon2 from '../../../../../public/images/GlobalCard Icons/engineer.png';
import icon3 from '../../../../../public/images/GlobalCard Icons/reEngineer.png';

export default function Section2 () {
    return (
       <Container>
        <div className={styles.section2}>
        <GlobalCard flex='row' width='100%' icon={icon1} heading='Architect your Solution' bottom='Our team in on your operational, technological, and strategic challenges through an in-depth understanding of your
business. We design a strategic roadmap to guide your result-oriented goals.' />
<GlobalCard flex='row' width='100%' icon={icon2} heading='Engineer your Solution' bottom='We promptly put together your nearshore engineering dream team to fulfill your specific requirements. We create
the most elegant solution for your difficulties by combining our deep tech expertise, Top 1% Tech Talent, and
industry-specific experience.' />
<GlobalCard flex='row' width='100%' icon={icon3} heading='ReEngineer your Business Process' bottom='Bolster by our team, your digital transformation swiftly gains speed and evolves into a digital acceleration. This
process places the foundation for a more efficient and strong business that can meet demands at scale.' />
        </div>
       </Container>
    )
}