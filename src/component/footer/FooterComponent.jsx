

import { FaFacebook } from 'react-icons/fa'
import './footer.css'
import { MdEmail } from 'react-icons/md'
import { SlSocialPintarest } from 'react-icons/sl'


export default function FooterComponent() {

    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="left-footer">
                        <ul className='footer-content'>
                            <li className='footer-item'><h4>The Collection</h4></li>
                            <li className='footer-item'><p>Seamaster 300</p></li>
                            <li className='footer-item'><p>Spinning</p></li>
                            <li className='footer-item'><p>Tissot</p></li>
                            <li className='footer-item'><p>Omega</p></li>
                            {/* <li className='footer-item'><p>Orient</p></li>
                            <li className='footer-item'><p>Longines</p></li>
                            <li className='footer-item'><p>Bently</p></li>
                            <li className='footer-item'><p>Orient</p></li> */}
                        </ul>
                    </div>
                    <div className="center-footer">
                        <ul className='footer-content'>
                            <li className='footer-item'><h4>The wathes</h4></li>
                            <li className='footer-item'><p>Hotline: 02877777777</p></li>
                            <li className='footer-item'><p>Email: TheWatches@gmail.com</p></li>
                            <li className='footer-item'><p>Address: Ho Chi Minh City, VietNamese</p></li>
                            <li className='footer-item'>
                                <ul>
                                    <li><FaFacebook /></li>
                                    <li><MdEmail /></li>
                                    <li><SlSocialPintarest /></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    <div className="right-footer">
                        <ul className='footer-content'>
                            <li className='footer-item'><h4>Copyright by Me SA. All rights reserved.</h4></li>
                            <li className='footer-item'><p>Terms of Use</p></li>
                            <li className='footer-item'><p>Cookie Notice</p></li>
                            <li className='footer-item'><p>Privacy Notice</p></li>
                            <li className='footer-item'><p>  Cookies Settings</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        
        </>
    )
}