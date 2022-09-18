import React, { useState } from 'react';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }
    console.log(formState);

    return (
        <section className='contact'>
            <h1 className='secondary-title'>Contact me</h1>
            <form className='contact-info' id="contact-form">
                <ul>
                    <input type="text" placeholder='Your name' defaultValue={name} onChange={handleChange} name="name"  />
                </ul>
                <ul>
                    <input type="email" placeholder='Email address' defaultValue={email} name="email" onChange={handleChange}/>
                </ul>
                <ul>
                    <textarea name="message" placeholder='Tell me something!' defaultValue={message} onChange={handleChange} rows="5" />
                </ul>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;