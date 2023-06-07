import React, { useEffect, useState } from 'react';
import MainComponent from './main/MainComponent';
import { Routes, Route, Navigate, withRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Footer, Header } from './container';
import { Navbar } from './components';
import AboutComponent from './main/AboutComponent';
import MenuComponent from './components/MenuComponent/MenuComponent';
import Login from './main/auth/Login';
import Register from './main/auth/Register';
import "bootstrap/dist/css/bootstrap.min.css";
import { auth,db } from './firebase';
import AddProduct from './components/MenuComponent/AddProduct';



function App() {
  //getting current user function
  function GetCurrentUser() {
    const [user, setUser] = useState(null);
    useEffect(()=> {
        auth.onAuthStateChanged(user=> {
          if(user){
            db.collection('users').doc(user.uid).get().then(snapshot =>{
              setUser(snapshot.data().FullName);
            })
          }else{
            setUser(null);
          }
        })
    },[])
    return user;
  }

  const user = GetCurrentUser();
  // console.log(user);
  return (
    <div>
      <BrowserRouter>
    <Navbar user={user} />
    

    <Routes>
        <Route exact path='/home' element={<MainComponent />}/>
        <Route path='/about' element={<AboutComponent />} />
        <Route path='/menu' element={<MenuComponent />}/>
        <Route path='/addproduct' element={<AddProduct />}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>

    <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App

