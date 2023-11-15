import { faFacebook, faFacebookF, faFacebookSquare, faInstagram, faLinkedin, faTwitter, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SocialLinks.module.scss';
function SocialLinks() {
    return ( 
        <div className={styles.social}>
            <h2 className={styles['social-heading']}>Follow us</h2>
            <div className={styles['social-links']}>
                <a className={styles['s-link']} href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a className={styles['s-link']} href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                <a className={styles['s-link']} href="#"><FontAwesomeIcon  icon={faTwitterSquare} /></a>
                <a className={styles['s-link']} href="#"><FontAwesomeIcon  icon={faInstagram} /></a>
                <a className={styles['s-link']} href="#"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
        </div>
     );
}

export default SocialLinks;