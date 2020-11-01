import React from 'react';
import './contact.scss';
import mailme from './mailme.svg';

const ContactSection = () => {
    return (
        <div className='footer'>
            <div className='section-header'>
                <div className='header'>
                    <h1>Contact</h1> 
                </div>
            </div>
            <div className='footer-content'>
                <div className='contact'>
                    <h1 className='contact-header'>Contact details</h1>
                    <div className='telephone'>
                        <h3 className='footer-headers'>Call me</h3>
                        <i className="footer-icon fas fa-mobile-alt fa-2x" />
                        <span id='phone-number'>784-452-569</span>
                    </div>
                    <div className='mail-me'>
                        <h3 className='footer-headers'>Mail me</h3>
                        <i className=" footer-icon fas fa-envelope-open-text fa-2x"></i>
                        <span id='mail'>mateuszwrycza3@gmail.com</span>
                    </div>
                </div>
                <div className='last'>
                    <img src={mailme} alt={''}/>
                </div>
            </div>
        </div>
    )
}

export default ContactSection