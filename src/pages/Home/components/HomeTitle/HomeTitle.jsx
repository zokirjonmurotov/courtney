import styles from './HomeTitle.module.scss';

export default function HomeTitle (props) {
    return (
        <div className={styles.homeTitle}>
            <h4>{props.h4}</h4>
            <h2>{props.h2}</h2>
            <p>{props.p}</p>
        </div>
    )
}