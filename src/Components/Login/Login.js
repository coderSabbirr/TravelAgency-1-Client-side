import { CircularProgress, Container, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const{signInWithGoogle,loginUser,isLoading, }=useAuth();
   
    const location = useLocation();
    const navigate = useNavigate();



const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
}
const handleLoginSubmit = e => {
    loginUser(loginData.email, loginData.password, location, navigate);
    
    e.preventDefault();
    
}


const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate)
}
    
    return (
       <>
       <Header />
       <Container className="text-center login-sec">
        <Grid container spacing={2}>
            <Grid item sx={{ mt: 8 }} xs={12} md={12}>
            {isLoading && <CircularProgress />}
                <h1 className="login-heading">Login</h1>
                <button className="google-login" onClick={handleGoogleSignIn} ><span className="google-logo"><img src="https://i.ibb.co/GJ6gbG1/google-logo-9808.png" alt="" /></span> Google Sign In</button>
                <p className="or-sign">--------------- or Sign in with Email ---------------</p>
                <form onSubmit={handleLoginSubmit}>
                    <TextField className="your-email"
                        sx={{ width: '40%', m: 1} }
                        id="standard-basic"
                        label="Your Email" 
                        name="email"
                        onChange={handleOnChange}
                        required
                         /> <br />
                    <TextField
                        sx={{ width: '40%', m: 1 }}
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        required
                       /><br />

                    <button sx={{ width: '50%', m: 1 }} type="submit" className="login-btn"> Login </button>
                  
                     
                        <p className="create-account">Not registered yet? <NavLink to="/register" className="create-new">Create an Account</NavLink></p>
                        <div className="admin-dev">
                <p>Email:test@test.com</p>
                <p>Password:#2021devs</p>
                </div>
                </form>
                
            </Grid>
         
        </Grid>
    </Container>
       <Footer />
       </>
    );
};

export default Login;