import React from 'react';
import loaderImg from '../../assets/loaderImg.gif'
import './Loader.css'


const Loader = () => {
  return (
    <div className='wrapper'>
        <div className='loader'>
            <img src={loaderImg} alt='Loading...'/>
        </div>
    </div>
  )
}

export default Loader