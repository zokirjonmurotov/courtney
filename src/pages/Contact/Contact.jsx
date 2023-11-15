import ContactCard from './Components/ContactCard';
import styles from './Contact.module.scss';
import logo from '../../assets/logo2.png';
import user from '../../assets/user.png';
import SocialLinks from './Components/SocialLinks';
const dataCard = [
    {
        image:logo,
        heading: 'office',
        email: 'info@courtney.lk',
        tel:'+94 011 283 744',
        
    },
    {
        image:  user ,
        heading: 'Vishwa Liyanapathirana',
        email: 'vishwa@courtney.lk',
        tel: '+94 713 249 222',

    },
    {
        image:user,
        heading: 'Kasun Perera',
        email: 'kasun@courtney.lk',
        tel: '+44 532 82820 9292',

    }
]
function Contact() {
    return (
        <div className="contact">
            {/* Header component*/}
            {/* Showcase  component*/}
            <div className="container" >
                <div className={styles['text-wrap']}>
                    <h2 className={styles['contact-title']}>Get in touch</h2>
                    <p className={styles['contact-p']} >Please feel free to get in touch with us via any convenient
                        means (phone, whatsapp, email, submit a contact form).
                        We will be glad to answer your questions as soon as possible.
                    </p>
               </div>
                {/* Apply component */}
                {/* Contact list */}
                <div className={styles['contact-list']}>
                    {dataCard.map((item,index) => {
                        return (
                            <ContactCard key={index} image={item.image} heading={item.heading} email={item.email} tel={item.tel} />
                       )
                   })}
                 
                </div>
                {/* SocialLinks */}
                <SocialLinks/>
            </div>
            {/* Footer component */}
        </div>
    );
}

export default Contact;