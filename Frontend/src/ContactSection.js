import React from 'react';
import './ContactSection.css'; // Make sure to create this CSS file for styling

function ContactSection() {
    return (
        <div className='containerC'>
        <div className="contact-section">
            <h2 className='hContact'>Contact Us</h2>
            <p className='pContact'>if you have any questions, feel free to reach out to us!</p>
            <div className="contact-buttons">
                <a href="https://t.me/NullxGery" target="_blank" rel="noopener noreferrer" className="telegram-button">
                    Contact on Telegram
                </a>
                <a href="mailto:0xGery@Proton.me" className="email-button">
                    Send an Email
                </a>
            </div>
           
        </div>
        <p className='cp'>© 2023 0xGery. All Right reserved.</p>
        </div>
    );
}

export default ContactSection;
