import styles from './Contact.module.css'
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md'
import { BiPhoneCall } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'

const ContactForm = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.contact_form}>
        <div className={`${styles.top_button}`}>
          <Button
            name='VIA Support Chat'
            icon={<MdMessage fontSize='24px' />}
          />
          <Button name='VIA Call' icon={<BiPhoneCall fontSize='24px' />} />
        </div>
        <Button
          isOutline={true}
          name='VIA E-Mail'
          icon={<AiOutlineMail fontSize='24px' />}
        />
        <form action=''>
          <div className={`${styles.form_controller}`}>
            <label htmlFor='name'> Name</label>
            <input type='text' name='name' />
          </div>
          <div className={`${styles.form_controller}`}>
            <label htmlFor='email'>E-mail</label>
            <input type='email' name='email' />
          </div>
          <div className={`${styles.form_controller}`}>
            <label htmlFor='text'>Text</label>
            <textarea rows='8' name='text' />
          </div>
          <div
            style={{
              display: 'flex',
              justifyCOntent: 'end',
            }}
          >
            <Button name='Submit' />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src='/images/Service 24_7-pana 1.svg' alt='' />
      </div>
    </div>
  )
}

export default ContactForm
