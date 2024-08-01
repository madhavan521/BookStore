import React, { useState } from 'react';  
import {auth} from './Firebase'
import { useNavigate } from 'react-router-dom';

const Signup = () => {  
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');
    const navigate=useNavigate()  

    const handleSubmit = async(e) => {  
        e.preventDefault()
        try{
            await auth.createUserWithEmailAndPassword(email, password);
               alert("Register Successfully !! Please login")
   navigate('/login')
   setEmail('')
   setPassword('')        }
        catch(err){
            console.log(err)
            alert(err)
        }
       
    };  

    return (  
        <div >  
        <div className='d-flex justify-content-center mt-2'>
                    <h4>Create a Account</h4>

        </div>
            <form onSubmit={handleSubmit}>  
                <div>  
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
                <button type="submit">Register</button>  
            </form>  
            <div className='d-flex justify-content-center mt-3'>
               <p><a href="/login">Back to Login</a></p>

             </div>
        </div>  
    );  
};  

export default Signup;