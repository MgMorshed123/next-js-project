import React from 'react';

const Footer = () => {
    if (typeof window !== 'undefined') {
        console.log("object");
    }

    return (
        <div>
           <div>
                 <h1>All rights reserved</h1>
           </div>
           <div>
              <h1>Social Media Icons</h1>
           </div>
        </div>
    );
};

export default Footer;
