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
import { useHistory } from "react-router-dom";


const Register = () => {
    const { user, handleCreateUser, error, isLoading } = useAuth();
    const history = useHistory();




    // capturing the input value...
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [pass2, setPass2] = useState('');
    const [name, setName] = useState('');
    // handler to get input value and set to the state variable
    const handleEmail = (e) => {

        setEmail(e.target.value)
        e.preventDefault();
    }
    const handlePass = (e) => {
        setPass(e.target.value)
        e.preventDefault();
    }
    const handlePass2 = (e) => {
        setPass2(e.target.value)
        e.preventDefault();
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleNewUser = (e) => {
        if (pass !== pass2) {
            alert('Your password did not match')
            return;
        }
        handleCreateUser(email, pass, name, history);
        e.preventDefault();
    }


    return (
        <Box sx={{ m: 3, p: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Container >
                        <Typography sx={{ color: 'blue' }} variant="h6" gutterBottom component="div">
                            Register
                        </Typography>

                        {
                            !isLoading && <form onSubmit={handleNewUser}>
                                <TextField
                                    onBlur={handleName}
                                    sx={{ width: '75%', m: 3 }}
                                    required
                                    type='text'
                                    id="standard-basic"
                                    label="Your name"
                                    variant="standard"
                                />
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
                                <TextField
                                    onBlur={handlePass2}
                                    sx={{ width: '75%', m: 3 }}
                                    required
                                    type='password'
                                    id="standard-basic"
                                    label="rewrite your Password"
                                    variant="standard"

                                />
                                <Button
                                    type='submit'
                                    sx={{ width: '75%', m: 3 }}
                                    variant="contained">Register
                                </Button>


                            </form>
                        }

                        <Typography variant="caption" display="block" gutterBottom>
                            Already a Member? <NavLink to='/login'><Button >Login now</Button> </NavLink>
                        </Typography>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
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

export default Register;