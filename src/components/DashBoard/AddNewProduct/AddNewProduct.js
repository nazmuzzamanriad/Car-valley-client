import React from 'react';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import './AddNewProduct.css'
import axios from 'axios';
import Navigation from '../../shared/Navigation/Navigation';

const AddNewProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://guarded-everglades-40474.herokuapp.com/cars', data)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .finally(alert('Product added'))






    }
    return (

        <>
            <Navigation></Navigation>
            <Container sx={{ m: 8, p: 8 }}>



                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography className='formTitle' sx={{ fontWeight: '900' }} variant="h2" gutterBottom component="div">
                            Add a New Product to the collection
                        </Typography>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className='addForm'>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input placeholder='Title' {...register("title")} /> <br />
                                <input placeholder='price' {...register("price")} /> <br />
                                <textarea placeholder='description' {...register("description")} /> <br />
                                <input placeholder='image Link' {...register("img")} /> <br />

                                <input type="submit" value='Add new Car' />
                            </form>
                        </div>

                    </Grid>

                </Grid>




            </Container>
        </>
    );
};

export default AddNewProduct;