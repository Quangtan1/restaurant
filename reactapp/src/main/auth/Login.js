import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { auth } from "../../firebase";
import { useNavigate} from 'react-router-dom'




export default function () {

const navigate = useNavigate();

const [email, setEmail] = useState('');
const [password, setPassWord] = useState('');

const [errorMsg,setErrorMsg] = useState('');
const [successMsg, setSuccessMsg] = useState('');

const handleLogin = (e) =>{
  e.preventDefault();
  // console.log(email,password);
  auth.signInWithEmailAndPassword(email,password).then(() => {
    setSuccessMsg('Login Successfull');
    setEmail('');
                  setPassWord('');
                  setErrorMsg('');
                  setTimeout(() => {
                      setSuccessMsg('');
                      navigate('/home');
                  },3000)
  }).catch(error => setErrorMsg(error.message));
}
  return (
    <div className="container">
      <br></br>
      <br></br>
      <h1>Sign Up</h1>
      <hr></hr>
      {successMsg&&<>
        <div className="alert alert-success">{successMsg}</div>
        <br></br>
        </>}
      <form className="form-group" autoComplete="off" onSubmit={handleLogin}>
        <label>Email</label>
        <input type='text' className="form-control" required
        onChange={(e) => setEmail(e.target.value)}
        value={email} />
        <br></br>
        <label>PassWord</label>
        <input type='text' className="form-control" required
        onChange={(e) => setPassWord(e.target.value)}
        value={password}/>
        <br></br>
        <div className="btn-box">
            <span>Already have an account Register
            <Link to='/register' className="link">Here</Link>
            </span>
            <button className="btn btn-success btn-md">Sign Up</button>
        </div>

      </form>
      {errorMsg&&<>
            <br></br>
        <div className="alert alert-danger">{errorMsg}</div>
        </>}

    </div>
  )
}