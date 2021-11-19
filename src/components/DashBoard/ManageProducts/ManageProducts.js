import React, { useEffect, useState } from 'react';

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

const ManageProducts = () => {

    const [manageProducts, setManageProducts] = useState([]);


    useEffect(() => {
        fetch('https://guarded-everglades-40474.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setManageProducts(data))

    }, [])



    const handleDeleteProduct = (id) => {
        const proceed = window.confirm('are you want to delete sure?')
        if (proceed) {
            const url = `https://guarded-everglades-40474.herokuapp.com/products/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingOrders = manageProducts.filter(order => order._id !== id)
                        setManageProducts(remainingOrders)

                    }
                })

        }
    }
    return (
        <div>
            <Typography variant="h3" gutterBottom component="div">
                Manage Products
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <TableContainer component={Paper}>
                        <Table sx={{}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell> Products</TableCell>
                                    <TableCell align="right">price</TableCell>
                                    <TableCell align="right">Description</TableCell>


                                    <TableCell align="right">img</TableCell>

                                    <TableCell align="right">Action</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {manageProducts.map((row) => (
                                    <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.title}
                                        </TableCell>
                                        <TableCell align="right">{row.price}</TableCell>
                                        <TableCell align="right">{row.description}</TableCell>
                                        <TableCell align="right"><img width='100px' src={row.img} alt="" srcset="" /></TableCell>


                                        <TableCell align="right"><Button onClick={() => handleDeleteProduct(row._id)} variant="outlined" color="error">Delete</Button></TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Grid>

            </Grid>


        </div>
    );
};

export default ManageProducts;