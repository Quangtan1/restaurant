import React,{useState}  from "react";
import { Link } from 'react-router-dom';
import { auth,db } from "../../firebase";
import { useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../../components/loader/Loader";



export default function () {
    const navigate = useNavigate();

    const [fullName, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [cpassword, setCPassWord] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const [errorMsg,setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const handleRegister = (e) =>{
        e.preventDefault();
        if (password !== cpassword) {
            toast.error("Passwords do not match.")
        }
        setIsLoading(true);
        // console.log(fullName,email,password);
        auth.createUserWithEmailAndPassword(email,password,cpassword).then((credentials) => {
            console.log(credentials);
            db.collection('users').doc(credentials.user.uid).set({
                FullName: fullName,
                Email: email,
                Password: password,
                CPassword: cpassword,
            }).then(() => {
                toast.success("Register Successfully")
                setFullname('');
                setEmail('');
                setPassWord('');
                setCPassWord('');
                setIsLoading(false);
                setErrorMsg('');
                setTimeout(() => {
                    setSuccessMsg('');
                    navigate('/login');
                },3000)
            }).catch(error => setErrorMsg(error.message));
        }).catch((error) =>{
            setErrorMsg(error.message)
        })
    }
    
    return (
        <>
        <ToastContainer />
        {isLoading && <Loader/>}
    <div className="container">
        <br></br>
        <br></br>
        <h1>Sign Up</h1>
        <hr></hr>
        {successMsg&&<>
        <div className="alert alert-success">{successMsg}</div>
        <br></br>
        </>}
        <form className="form-group" autoComplete="off" onSubmit={handleRegister}>
        <label>FullName</label>
        <input type='text' className="form-control"
        onChange={(e) => setFullname(e.target.value)}
        value={fullName} 
        required/>
        <br></br>
        <label>Email</label>
        <input type='text' className="form-control" required
        onChange={(e) => setEmail(e.target.value)}
        value={email} />
        <br></br>
        <label>PassWord</label>
        <input type='password' className="form-control" required
        onChange={(e) => setPassWord(e.target.value)}
        value={password}/>
        <br></br>
        <label>Confirm PassWord</label>
        <input type='password' className="form-control" required
        onChange={(e) => setCPassWord(e.target.value)}
        value={cpassword}/>
        <br></br>
        <div className="btn-box">
            <span>Already have an account Login
            <Link to='/login' className="link">Here</Link>
            </span>
            <button className="btn btn-success btn-md">Register</button>
        </div>

        </form>
        {errorMsg&&<>
            <br></br>
        <div className="alert alert-danger">{errorMsg}</div>
        </>}

        </div>
        </>
        )
        }