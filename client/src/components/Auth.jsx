import React,{useState} from'react';
import Cookies from 'universal-cookie'
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import signinImage from '../assets/signup.jpg';


const Auth=()=>
{
    const initialState = {
        fullName:'',
        userName:'',
        password:'',
        confirmPassword:'',
        phoneNumber:'',
        avatarURL:''
    }

    const[form,setForm] = useState(initialState);
    const [isSignup,setIsSignup]=useState(true);

    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
        // console.log(form);
    };


    const switchMode=()=>{
        setIsSignup((prevIsSignup)=>!prevIsSignup);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(form);
    }

    return(
    <div className="auth__form-container">
        <div className="auth__form-container_fields">
            <div className="auth__form-container_fields-content">
                <p>{isSignup?"Sign Up":"Sign In"}</p>
                <form onSubmit={handleSubmit} >
                    {isSignup &&(
                        // <div className="auth__form-container_fields-content_input">
                        <div>
                            
                            <TextField id="outlined-basic" 
                            className="auth__form-container_fields-content_input"
                            fullWidth
                            // size="small"
                            label="Full Name" 
                            variant="outlined" 
                            name="fullName"
                            onChange={handleChange}
                            required
                            />
                         </div>
                    )}
                    
                    <div>
                            <TextField id="outlined-basic" 
                            fullWidth
                            // size="small"
                            className="auth__form-container_fields-content_input"
                            label="User Name" 
                            variant="outlined" 
                            name="userName"
                            onChange={handleChange}
                            required
                            />
                    </div>

                    {isSignup &&(
                        <div>
                        
                        <TextField id="outlined-basic" 
                        fullWidth
                        // size="small"
                        className="auth__form-container_fields-content_input"
                        label="Phone Number" 
                        variant="outlined" 
                        name="phoneNumber"
                        onChange={handleChange}
                        required
                        />
                        </div>
                    )}

                    {isSignup &&(
                        <div>
                        <TextField id="outlined-basic" 

                        fullWidth
                        // size="small"
                        className="auth__form-container_fields-content_input"
                        label="Avatar URL" 
                        variant="outlined" 
                        name="avatarUrl"
                        onChange={handleChange}
                        required
                        />
                    </div>
                    )}

                    <div>
                        <TextField
                            className="auth__form-container_fields-content_input"
                            id="outlined-password-input"
                            fullWidth
                            // size="small"
                            label="Password"
                            type="password"
                            
                            name="password"
                            onChange={handleChange}
                            required
                            />
                    </div>

                    {isSignup &&(
                        <div>
                        <TextField
                            className="auth__form-container_fields-content_input"
                            id="outlined-password-input"
                            fullWidth
                            // size="small"
                            label="Confirm Password"
                            type="password"
                            
                            name="confirmPassword"
                            onChange={handleChange}
                            required
                            />
                        </div>
                    )}

                <div className="auth__form-container_fields-content_button">
                        
                        <Button variant="contained" color="success" size="large">{isSignup?"Sign Up":"Sign In"}</Button>
                </div>    

                </form>
                
                <div className="auth__form-container_fields-account">
                        <p>
                            {isSignup ?
                            "Already have an account? "
                            :"Don't have an account? "   
                            }

                            <span onClick={switchMode}>
                                {isSignup?"Sign In":"Sign Up"}
                            </span>
                        </p>
                </div>
            </div>
        </div>
        
        <div className="auth__form-container_image">
            <img src={signinImage} alt="sign in"/>
        </div>

    </div>
    )
}

export default Auth;
