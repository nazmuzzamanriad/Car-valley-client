import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MyOrders from '../MyOrders/MyOrders';

import { Button } from '@mui/material';
import {

    Switch,
    Route,
    Link,

    useRouteMatch,
    NavLink
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ExploreCars from '../../pages/ExploreCars/ExploreCars';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../../PrivateRoute/AdminRoute/AdminRoute';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';


const drawerWidth = 200;

function DashBoard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            {
                !admin && <Box>
                    <Link to="/home"><Button variant="contained" sx={{ m: 2 }}>Home </Button></Link> <br></br>
                    <Link to="/explorecars"><Button variant="contained" sx={{ m: 2 }}>Explore more </Button></Link> <br></br>
                    <Link to={`${url}`}><Button variant="contained" sx={{ m: 2 }}>My Order</Button></Link><br></br>
                    <Link to={`${url}/review`}><Button variant="contained" sx={{ m: 2 }}>Review</Button></Link>  <br></br>

                    <Link to={`${url}/pay`}><Button variant="contained" sx={{ m: 2 }}>PAY</Button></Link> <br></br>
                    <Button onClick={logout} variant="contained" sx={{ m: 2, color: 'red', fontWeight: '600' }}>Logout</Button>
                </Box>
            }
            {
                admin && <Box>
                    <Link to="/home"><Button variant="contained" sx={{ m: 2 }}>Home </Button></Link> <br></br>
                    <Link to={`${url}/makeadmin`}><Button variant="contained" sx={{ m: 2 }} >Make Admin</Button></Link> <br></br>
                    <NavLink to={`${url}/addnewproduct`}><Button variant="contained" sx={{ m: 2 }}>Add a Product</Button></NavLink> <br></br>
                    <NavLink to={`${url}/manageproducts`}><Button variant="contained" sx={{ m: 2 }}>Manage Products</Button></NavLink> <br></br>
                    <NavLink to={`${url}/manageallorders`}><Button variant="contained" sx={{ m: 2 }}>Manage All Orders</Button></NavLink> <br></br>
                    <Button onClick={logout} variant="contained" sx={{ m: 2, color: 'red', fontWeight: '600' }}>Logout</Button>
                </Box>
            }


            {/* <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}


        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        DashBoard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/explorecars`}>
                        <ExploreCars></ExploreCars>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>

                    <AdminRoute path={`${path}/makeAdmin`} >
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addnewproduct`} >
                        <AddNewProduct></AddNewProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageallorders`} >
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproducts`} >
                        <ManageProducts></ManageProducts>
                    </AdminRoute>

                </Switch>

            </Box>

        </Box >


    );
}

DashBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashBoard;
