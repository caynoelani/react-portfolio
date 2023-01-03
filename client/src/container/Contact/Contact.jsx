import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'

import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { AiFillPhone, AiFillMail } from 'react-icons/ai'
import { ImLocation2 } from 'react-icons/im'
import { images } from '../../constants'
import { Button } from '../../components'
import './Contact.scss'

const Contact = () => {
    const [state, handleSubmit] = useForm('mlevpzop');
    
    // if (state.succeeded) {
    //     return <div>Thank you! I will get back to you soon!</div>;
    // }

    return (
        <section className="contact app__section" id="contact">
            <div className="contact__container">
                <aside className="contact__aside">
                    <div className="contact__aside-image">
                        <img src={images.forHire} alt="Woman for Hire" />
                    </div>
                    <h3>Contact Me!</h3>
                    <ul className="contact__details">
                        <li>
                            <AiFillPhone />
                            <h6>+1 872 362 3848</h6>
                        </li>
                        <li>
                            <AiFillMail />
                            <h6>caylabradleydev@gmail.com</h6>
                        </li>
                        <li>
                            <ImLocation2 />
                            <h6>Chicago, IL</h6>
                        </li>
                    </ul>
                    <div className="contact__socials">
                        <Button 
                            href='https://www.linkedin.com/in/caylabradley/'
                            text={<BsLinkedin />}
                            classes='btn--social'
                            type='anchor--external'
                        />
                        <Button
                            href='https://github.com/caynoelani'
                            text={<FaGithubSquare />}
                            classes='btn--social'
                            type='anchor--external'
                        />
                    </div>
                </aside>

                <form
                    className="contact__form"
                    action="https://formspree.io/f/mlevpzop"
                    method="POST"
                    onSubmit={handleSubmit}
                >
                    <div className="form__name">
                        <input
                            type="text"
                            name="First Name"
                            placeholder="First Name*"
                        />
                        <input
                            type="text"
                            name="Last Name"
                            placeholder="Last Name*"
                        />
                    </div>
                    <input
                        type="email"
                        name="Email Address"
                        placeholder="Your Email*"
                    />
                    <textarea
                        name="Message"
                        placeholder="Message*"
                        cols="30"
                        rows="7"
                    ></textarea>
                    <ValidationError field="First Name" errors={state.errors} />
                    <ValidationError field="Last Name" errors={state.errors} />
                    <ValidationError field="Email Address" errors={state.errors} />
                    <ValidationError field="Message" errors={state.errors} />
                    {/* <Button type="submit" classes="btn btn-primary" text='Send Message' /> */}
                    {
                        state.succeeded ? 
                        <div>Thank you! I will get back to you soon!</div>:
                        <>
                            <button type="submit" disabled={state.submitting} className="btn btn--primary">Send Message</button>
                        </>
                    }
                </form>
            </div>
        </section>
    )
}

export default Contact