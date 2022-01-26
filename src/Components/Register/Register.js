import { Alert, CircularProgress, Container, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';




const Register = () => {
    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();
    const location = useLocation();

    const { user, registerUser, isLoading, authError,signInWithGoogle } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            return
        }

        registerUser(loginData.email, loginData.password, loginData.name, navigate);


    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }
    return (
        <>
        <Header />
        <Container className="text-center register">
            {/* <Grid container spacing={2}> */}
            <Grid item sx={{ mt: 8 }} xs={12} md={12}>
                <h1 className="login-heading">Sign Up</h1>
                <button className="google-login" onClick={handleGoogleSignIn} ><span className="google-logo"><img src="https://i.ibb.co/GJ6gbG1/google-logo-9808.png" alt="" /></span> Google Sign In</button>
                <p className="or-sign">------------or Sign Up with Email------------</p>
                {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <TextField className="your-email"
                        sx={{ width: '40%', m: 1 }}
                        id="standard-basic"
                        label="Your Name"
                        name="name"
                        onBlur={handleOnBlur}
                        required
                    /> <br />
                    <TextField
                        sx={{ width: '40%', m: 1 }}
                        id="standard-basic"
                        label="Your Email"
                        name="email"
                        type="email"
                        onBlur={handleOnBlur}
                        required />
                    <br />
                    <TextField
                        sx={{ width: '40%', m: 1 }}
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name="password"
                        onBlur={handleOnBlur}
                        required
                    />  <br />
                    <TextField
                        sx={{ width: '40%', m: 1 }}
                        id="standard-basic"
                        label="ReType Your Password"
                        type="password"
                        name="password2"
                        onBlur={handleOnBlur}
                        required
                    />
                    <br />
                    <button  type="submit" className="sign-up-btn">Sign Up</button> <br />
                    
                        <p className="Already-account">Already have an Account? <NavLink to="/login" className="new-sign-in">Sign in </NavLink></p>
                   
                </form>}
                {isLoading && <CircularProgress />}
                {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
            </Grid>

         
        </Container>
        <Footer />
        </>
    );
};

export default Register;