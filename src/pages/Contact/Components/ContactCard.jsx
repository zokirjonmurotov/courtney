import styles from './ContactCard.module.scss'
function ContactCard(props) {
    return ( 
        <div className={styles.ccard}>
            <div className={styles["ccard-img"]} alt="user-img" >
                <img src={props.image} alt="" />
            </div>
            <div className={styles["ccard-heading"]}>{ props.heading}</div>
            <div className={styles["ccard-email"]}>{ props.email}</div>
            <div className={styles["ccard-tel"]}>{props.tel }</div>
        </div>
     );
}

export default ContactCard;