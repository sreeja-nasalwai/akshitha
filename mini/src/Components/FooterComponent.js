import React from 'react';
import '../footer.css';




const Footer = () => {
    return (
        <footer className='footerWrapper'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <p>&copy; {new Date().getFullYear()} WorkPlace. All rights reserved.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <p>Contact us : 9876543210</p>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer;
