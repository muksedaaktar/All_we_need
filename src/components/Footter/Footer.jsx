import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
         <footer className="footer footer-horizontal footer-center bg-black text-white rounded p-10">
 
  <nav>
    
       <div>
                    <h1 className="font-bold text-[24px] mb-2">Social Links</h1>
                    <div className="grid grid-flow-col gap-4"></div>
                    <a><FontAwesomeIcon icon={faXTwitter} className="mr-2 " /> </a>
                    <a><FontAwesomeIcon icon={faLinkedin} className="mr-2" /> </a>
                    <a><FontAwesomeIcon icon={faFacebook} className="mr-2 " /> </a>
                    
                </div>


  </nav>
  <aside>
    <h1 className="text-center py-3 text-[#FAFAFA] text-sm border-t border-gray-700 mt-6">
                © 2025 CS — All rights reserved.
            </h1>

  </aside>
</footer>
    );
};

export default Footer;