import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './CooperateLetter.css';

const CooperateLetter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setErrorMessage('Error: Email cannot be empty');
      return;
    }

    if (!message.trim()) {
      setErrorMessage('Error: Message cannot be empty');
      return;
    }

    emailjs
    .sendForm('service_gdlt0bf', 'template_jzwz0rw', form.current, {
      publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
};

  return (
    <div className='cooperateletter'>
      <h1>Cooperate With Us</h1>
      <p>Send us an email for more</p>
      <div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <form ref={form} onSubmit={sendEmail}>
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Your Email'
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            value={message}
            placeholder='Your Message'
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default CooperateLetter;