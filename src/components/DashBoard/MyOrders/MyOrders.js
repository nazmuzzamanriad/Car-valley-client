import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const MyOrders = () => {
    const { user } = useAuth();
    const [manageOrder, setManageOrder] = useState([]);
    useEffect(() => {
        fetch(`https://guarded-everglades-40474.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setManageOrder(data))

    }, [])


    console.log(manageOrder)


    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('are you want to delete sure?')
        if (proceed) {
            const url = `https://guarded-everglades-40474.herokuapp.com/allorders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingOrders = manageOrder.filter(order => order._id !== id)
                        setManageOrder(remainingOrders)

                    }
                })

        }
    }








    return (
        <div>
            <Typography variant="h3" gutterBottom component="div">
                Order Details
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <TableContainer component={Paper}>
                        <Table sx={{}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Ordered Product</TableCell>
                                    <TableCell align="right">price</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Email</TableCell>

                                    <TableCell align="right">City</TableCell>
                                    <TableCell align="right">Address</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {manageOrder.map((row) => (
                                    <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.carName}
                                        </TableCell>
                                        <TableCell align="right">{row.price}</TableCell>
                                        <TableCell align="right">{row.name}</TableCell>
                                        <TableCell align="right">{row.email}</TableCell>

                                        <TableCell align="right">{row.city}</TableCell>
                                        <TableCell align="right">{row.address}</TableCell>
                                        <TableCell align="right"><Button onClick={() => handleDeleteOrder(row._id)} variant="outlined" color="error">Delete</Button></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Grid>

            </Grid>


        </div >
    );
};

export default MyOrders;