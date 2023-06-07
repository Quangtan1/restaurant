import React,{ useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import {FaShoppingCart} from "react-icons/fa"
import './Navbar.css';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { useNavigate} from 'react-router-dom';

const carousels = [
  {
    title: 'tet sum vay2',
    url: 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-c6a92.appspot.com/o/Images%2Fanhcarousel.png?alt=media&token=5bad4a28-cf2a-4a1a-90d5-4a7f2d2b2af3',
  },
  {
    title: 'tet sum vay2',
    url: 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-c6a92.appspot.com/o/Images%2Ftesumvay.jpg?alt=media&token=4555969f-7f94-46fc-9b90-69e73ec1ee98',
  }
]
const delay = 2500;

const Navbar = ({user}) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(()=>{
      navigate('/login');
    })
  }
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === carousels.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <nav className='app__navbar'>
    <div className="slideshow">
      <div className='navbar-header'>
        <div>
          <div className='app__navbar-logo'>
          <img 
          src='https://firebasestorage.googleapis.com/v0/b/restaurantapp-c6a92.appspot.com/o/Images%2FPicture1.png?alt=media&token=6f9cd617-6f67-4a08-8bd5-fadfbb796380'
          alt='app logo'
          className='logo'/>
      </div>
        </div>
        <div>
          <ul className='app__navbar-links'>
          <li ><Link to="/home" className='links' >Home</Link></li>
          <li ><Link to="/about" className='links'>About</Link></li>
          <li ><Link to="/menu" className='links'>Menu</Link></li>
          <li ><Link to="/award" className='links'>Award </Link></li>
          <li ><Link to="/contact" className='links'>Contact</Link></li>
          </ul>
        </div>
        <div className='app__navbar-login'>
      {!user&&<>
        <Link className='links'to="/login">Login</Link>
      </>}
        <Link to="/cart" className='links'>
          <FaShoppingCart size={20}/>
          
        </Link>
      {user&&<>
        <Link className='links' to='/home'>{user}</Link>
        <button className='btn btn-danger btn-md'
        onClick={handleLogout}>LOGOUT</button>
      </>}
     
        <hr />
        <a href='/' className='links'>Book Table</a>
            <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
      {toggleMenu && (
        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
        <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
        <ul className='app__navbar-smallscreen_links'>
        <li ><Link to="/home" className='links' >Home</Link></li>
        <li ><Link to="/about" className='links'>About</Link></li>
        <li ><Link to="/menu" className='links'>Menu</Link></li>
        <li ><Link to="/award" className='links'>Award </Link></li>
        <li ><Link to="/contact" className='links'>Contact</Link></li>
    </ul>
      </div>
      )}
    </div>
    </div>
      </div>
      <div className='opacity-carousel'></div>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {carousels.map((carousel, index) => (
          <div
            className="slide"
            key={index}
          >
            <img src={carousel.url} alt='tet'/>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {carousels.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
      
    </div>
    
  </nav>

  )
}
  

export default Navbar;
