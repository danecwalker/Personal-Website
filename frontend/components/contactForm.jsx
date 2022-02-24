import styles from '../styles/ContactForm.module.css';
import { useRef, useEffect } from 'react';

function ContactForm() {
  const fname = useRef("");
  const lname = useRef("");
  const email = useRef("");
  const msg = useRef("");
  const sub = useRef("");
  const send = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let req = await fetch('')
    console.log('submit');
  }

  useEffect(() => {
    fname.current.focus();
    send.current.addEventListener('click', handleSubmit);
  }, [])
  


  return (
    <form id={styles.form}>

      <input ref={fname} id={styles.input} type="text" placeholder="First Name" />
      <input ref={lname} id={styles.input} type="text" placeholder="Last Name" />
      <input ref={email} id={styles.input} type="email" placeholder="Email" />
      <input ref={sub} id={styles.input} type="text" placeholder="Subject" />
      <textarea ref={msg} id={styles.textarea} cols="30" rows="20" placeholder="Say Hello 👋..."></textarea>

      <input ref={send} id={styles.submit} type="submit" value="Send" />

    </form>
  )
}

export default ContactForm;