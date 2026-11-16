import './contact.css';

import React, { useRef, useState } from 'react';

import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_k2qawqh',
        'template_c6rkpn6',
        formRef.current,
        'X7K7ebhIeOy3YwHki'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>fidaahammoud2003@gmail.com</h5>
          </article>
          <article className="contact__option">
            <MdOutlinePhone className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>
              <a href="tel:+96171755701">+961 71 755 701</a>
            </h5>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
