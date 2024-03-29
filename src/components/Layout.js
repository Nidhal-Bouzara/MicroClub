import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children, refs}) => {
    return (
        <div>
            <Navbar refs={refs} />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;
