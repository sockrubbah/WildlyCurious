import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <section className="contact-container">
            <section className="left-side">
                <h1>Please Enter Your Information</h1>
                <ContactForm />
            </section>

            <section className="right-side">
                <h2>A Fun Location To Check Out!</h2>
                <iframe
                    title="Riverbanks Zoo Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.3717626952225!2d-81.07597082369728!3d34.00866712002883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a3558f7221af%3A0x5194361d1b5e0bb8!2sRiverbanks%20Zoo%20%26%20Garden!5e0!3m2!1sen!2sus!4v1742772551116!5m2!1sen!2sus"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </section>
    );
};

export default Contact;