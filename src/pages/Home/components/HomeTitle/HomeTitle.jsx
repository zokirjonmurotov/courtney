import styles from './HomeTitle.module.scss';

export default function HomeTitle (props) {
    return (
        <div className={styles.homeTitle}>
            <h4 style={{textAlign: `${props.left}`}}>{props.h4}</h4>
            <h2 style={{textAlign: `${props.left}`}}>{props.h2}</h2>
            <p style={{textAlign: `${props.center}`}}>{props.p}</p>
        </div>
    )
}