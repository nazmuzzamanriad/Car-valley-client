import React, { useState } from 'react';
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import car from '../../../../images/20191105_02_01_s.jpg'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {

    const { user, loginUser, error, isLoading } = useAuth();


    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const history = useHistory();
    const location = useLocation()

    const handleEmail = (e) => {

        setEmail(e.target.value)
        e.preventDefault();
    }
    const handlePass = (e) => {
        setPass(e.target.value)
        e.preventDefault();
    }

    const handleLoginUser = (e) => {
        loginUser(email, pass, location, history)
        console.log("clicked")
        e.preventDefault()
    }
    return (
        <Box sx={{ m: 3, p: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Container >
                        <Typography sx={{ color: 'blue' }} variant="h6" gutterBottom component="div">
                            Login
                        </Typography>

                        <TextField
                            onBlur={handleEmail}
                            sx={{ width: '75%', m: 3 }}
                            required
                            type='email'
                            id="standard-basic"
                            label="Your Email"
                            variant="standard"
                        />
                        <TextField
                            onBlur={handlePass}
                            sx={{ width: '75%', m: 3 }}
                            required
                            type='password'
                            id="standard-basic"
                            label="Your Password"
                            variant="standard"
                        />
                        <Button
                            onClick={handleLoginUser}
                            sx={{ width: '75%', m: 3 }}
                            variant="contained">Login
                        </Button>

                        <Typography variant="caption" display="block" gutterBottom>
                            Not a Member? <NavLink to='/register'><Button >Sign up now</Button> </NavLink>
                        </Typography>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login succesfully</Alert>}
                        {error && <Alert severity="error">{error}</Alert>}


                    </Container>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={car} alt="" />
                </Grid>

            </Grid>
        </Box>
    );
};

export default Login;