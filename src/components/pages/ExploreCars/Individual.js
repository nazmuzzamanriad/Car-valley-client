import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';


const Individual = ({ car }) => {
    const { _id, title, description, img, price } = car;
    const cardStyle = {
        display: 'block',
        width: '30vw',
        transitionDuration: '0.3s',
        height: '35vw'
    }
    return (
        <>

            <Grid item xs={12} md={4}>
                <Card style={cardStyle}   >
                    <CardMedia
                        component="img"
                        height="194"

                        width='auto'
                        image={img}
                        alt="Paella dish"
                    />

                    <CardContent>
                        <Typography variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {price}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {description}
                        </Typography>

                        <Link to={`/purchase/${_id}`} ><Button variant="contained">Order Now</Button></Link>



                    </CardContent>


                </Card>
            </Grid>


        </>
    );
};

export default Individual;