import React from 'react';

// StyleSheets
import footerStyle from '../styles/Footer.module.scss';

const Footer = () => {
    return (
        <footer className={footerStyle.container}>
            <h1 className={footerStyle.credits}>Designed and developed by Nidhal Anis BOUZARA</h1>
        </footer>
    );
}

export default Footer;
