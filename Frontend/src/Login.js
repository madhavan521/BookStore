import React, { useState } from 'react';  
import {auth} from './Firebase'
import { useNavigate } from 'react-router-dom';

const Login = () => {  
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState(''); 
    const navigate=useNavigate() 

    const handleSubmit = async(e) => {  
        e.preventDefault()
        try{
   await auth.signInWithEmailAndPassword(email,password)
   alert("Successfully login")
   navigate('/')
   setEmail('')
   setPassword('')
        }
        catch(err){
            console.log(err)
            alert(err)
        }
       
    };  

    return (  
        <div >  
        <div className='d-flex justify-content-center mt-2'>
                    <h4>Login page</h4>

        </div>
            <form onSubmit={handleSubmit} className='form'>  
                <div className='form-control'>  
                    <label>Email:</label>  
                    <input  
                        type="email"  
                        value={email}  
                        onChange={(e) => setEmail(e.target.value)}  
                        required  
                    />  
                </div>  
                <div>  
                    <label>Password:</label>  
                    <input  
                        type="password"  
                        value={password}  
                        onChange={(e) => setPassword(e.target.value)}  
                        required  
                    />  
                </div>  
                <button type="submit">Login</button>  
            </form>  

             <div className='d-flex justify-content-center mt-3'>
               <p><a href="/signup">Create a Account</a></p>

             </div>
        </div>  
    );  
};  

export default Login;