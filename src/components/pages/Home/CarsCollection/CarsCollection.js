import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';


import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';


const CarsCollection = () => {

    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('https://guarded-everglades-40474.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data.slice(0, 6)))

    }, [])

    // const cardStyle = {
    //     display: 'block',
    //     width: '30vw',
    //     transitionDuration: '0.3s',
    //     height: '35vw'
    // }
    return (
        <>
            <Typography sx={{ color: 'blue', m: 3 }} variant="h3" gutterBottom component="div">
                Cars Collection
            </Typography>


            <Grid container spacing={2}>

                {
                    cars.map(car =>

                        <Grid item xs={12} md={4} >
                            <Card   >
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

                                    <Link to={`/purchase/${car._id}`}>   <Button variant="contained">Order Now</Button></Link>



                                </CardContent>


                            </Card>
                        </Grid>




                    )
                }



            </Grid>






        </ >);

};

export default CarsCollection;



