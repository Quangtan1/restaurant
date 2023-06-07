import React from 'react';
import { FooterOverlay,Newsletter } from '../../components';
import './Footer.css';
import { FiFacebook,FiTwitter, FiInstagram} from 'react-icons/fi'

const Footer = () => (
  <div className='app__footer'>
  <div className='app__footer-links'>
    <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>36 Trần Hưng Đạo,Tp Đồng Hới,Quảng Bình</p>
        <p className='p__opensans'>0965453815</p>
    </div>
    <div className='app__footer-links_logo'>
        <img src='https://firebasestorage.googleapis.com/v0/b/restaurantapp-c6a92.appspot.com/o/Images%2FKicochi.png?alt=media&token=99b48f5a-e245-4eaf-9dbc-a6e82c92cc7e' 
        alt='logo_kicochi'/>
        <p className='p__opensans'>Never give up</p>
        <div className='app__footer-links_icons'>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
        </div>
        <div className='app__footer-headtext'>
        <p className='p__opensans'>2022 Kicochi,All Right Reserved</p>
        </div>
    </div>
    <div className='app__footer-links_work'>
    <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>All Day</p>
        <p className='p__opensans'>10:00am-22:00pm</p>
    </div>
    
  </div>
  </div>
);

export default Footer;
