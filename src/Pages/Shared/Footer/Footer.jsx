import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer>
            <div className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <h2 className="text-3xl font-bold font-serif">
                        College Booking
                    </h2>
                    <p>College Booking Ltd.<br />Providing reliable education information since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Contact us</span>
                    <Link><span className='font-semibold'>Address:</span> Road # 137, Block # SE(F), <br /> Gulshan-2, Dhaka-1212.</Link>
                    <Link><span className='font-semibold'>Phone: </span> 012893749</Link>
                    <Link><span className='font-semibold'>Email:</span> art&craft@gmail.com</Link>
                </div>

                <div>
                    <span className="footer-title">Follow us</span>

                    <div className="grid grid-flow-col gap-4">
                        <FaFacebook className='h-5 w-5 text-white'></FaFacebook>
                        <FaInstagram className='h-5 w-5 text-white'></FaInstagram>
                        <FaTwitter className='h-5 w-5 text-white'></FaTwitter>
                    </div>
                </div>

            </div>
            <div className="footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by College Booking Ltd</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;