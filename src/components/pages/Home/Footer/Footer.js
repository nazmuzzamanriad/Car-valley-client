import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

const fbelement = <FontAwesomeIcon icon={faFacebook} />
const intaelement = <FontAwesomeIcon icon={faInstagram} />
const pinelement = <FontAwesomeIcon icon={faPinterest} />

const Footer = () => {
    return (
        <div className='footer'>

            <small className='copyRight'>Copyright © 2021 Car Valley</small>
            <p className='para'>social media links</p>
            <span className="socialLogo"> <a href="https://facebook.com" rel="noreferrer" target="_blank">{fbelement}</a>
                <a href="https://instagram.com" rel="noreferrer" target="_blank">{intaelement}</a>
                <a href="https://pinterest.com" rel="noreferrer" target="_blank">{pinelement}</a></span>


        </div>
    );
};

export default Footer;