import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Individual from './Individual';
import Navigation from '../../shared/Navigation/Navigation';
import Footer from '../Home/Footer/Footer';



const ExploreCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://guarded-everglades-40474.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (
        <div>
            <Navigation></Navigation>
            <h1>Explore Cars</h1>

            <Grid container spacing={2}>

                {
                    cars.map(car => <Individual key={car._id} car={car} ></Individual>)
                }



            </Grid>

            <Footer></Footer>








        </div>
    );
};

export default ExploreCars;