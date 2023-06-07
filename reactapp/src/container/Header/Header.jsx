import React from 'react';
import {SubHeading} from '../../components'
import {images} from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
        <SubHeading title="Chase the new flavour"/>
        <h1 className='app__header-h1'>The Key to Fine Dinning</h1>
        <p className='p__opensans' style={{margin: '2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie.Condimentum volupat morbi facillsis quam scelerisque.Et,penatibus aliquam amet tellus</p>
        <button type='button' className='custom__button'>Explore Menu </button>

    </div>

    <div className='app__wrapper_img'>
        <img src='https://firebasestorage.googleapis.com/v0/b/restaurantapp-c6a92.appspot.com/o/Images%2FKicochidesign.png?alt=media&token=613ea126-fad7-421e-b367-167b6dfebfc7' 
        alt='header img'/>
    </div>
  </div>

  
);

export default Header;
