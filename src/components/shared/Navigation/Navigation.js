import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Car Valley
                    </Typography>
                    <NavLink to='/home' style={{ color: 'white', textDecoration: 'none' }} >Home</NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to='/explorecars'> <Button sx={{ color: 'white' }}>Explore Cars</Button></NavLink>


                    {user?.email && <NavLink style={{ color: 'white', textDecoration: 'none' }} to='/dashboard'><Button color="inherit">Dashboard</Button></NavLink>

                    }
                    {
                        user?.displayName && <Typography variant="button" display="block" gutterBottom>
                            {user.displayName}
                        </Typography>
                    }
                    {user?.email ?
                        <Box>

                            <Button onClick={logout} sx={{ color: 'white' }}>Logout</Button>
                        </Box> : <NavLink style={{ color: 'white', textDecoration: 'none' }} to='/login'><Button color="inherit">Login</Button></NavLink>

                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;