import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import './Purchase.css'
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';
import Navigation from '../../shared/Navigation/Navigation';



const Purchase = () => {


    const [car, setCar] = useState({});
    const { user } = useAuth();
    const { id } = useParams();




    useEffect(() => {
        const url = `https://guarded-everglades-40474.herokuapp.com/cars/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data))

    }, [])

    console.log(car)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {


        const order = { city: data.city, address: data.address, phone: data.phone, name: user.displayName, email: user.email, carName: car.title, price: car.price }
        console.log(data)


        axios.post('https://guarded-everglades-40474.herokuapp.com/orders', order)
            .then(res => {
                if (res) {
                    alert('Data inserted to server')
                }
            })
            .finally(() => reset(''))
    }


    return (
        <div>
            <Navigation></Navigation>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ color: 'blue', m: 3, p: 3 }} variant="h4" gutterBottom component="div">
                    User Name: {user.displayName}
                </Typography>
                <Typography sx={{ color: 'blue', m: 3, p: 3 }} variant="h4" gutterBottom component="div">
                    Email:  {user.email}
                </Typography>

            </div>

            <>
                <Grid sx={{ m: 3, p: 3 }} container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Card  >
                            <CardMedia
                                component="img"
                                height="194"

                                width='auto'
                                image={car.img}
                                alt="Paella dish"
                            />

                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {car.title}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {car.price}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {car.description}
                                </Typography>









                            </CardContent>


                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className='addForm'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Typography sx={{ color: 'white' }} variant="h5" component="div">
                                    Place Your Order
                                </Typography>







                                <input placeholder='city' {...register("city")} /> <br />

                                <textarea placeholder='address' {...register("address")} /> <br />
                                <input placeholder='phone number' {...register("phone")} /> <br />


                                <input type="submit" value='Place Order' />
                            </form>
                        </div>



                    </Grid>
                </Grid>


            </>


        </div>
    )

};

export default Purchase;