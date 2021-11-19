import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import pic from '../../../../../images/20191105_02_kv_w1920.jpg'
import { Container } from '@mui/material';

const bannerBg = {
    backgroundImage: `url(${pic})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: " fixed",
    backgroundPosition: "center",
    backgroundColor: "rgba(178, 190, 181,0.4)"







}

const AboutUs = () => {
    return (
        <div>
            <Container style={bannerBg}>
                <Grid sx={{ m: 3, p: 8 }} container spacing={2}>
                    <Grid item xs={12} md={5} >
                        <Typography sx={{ fontWeight: '900', color: 'black' }} variant="h3" gutterBottom component="div">
                            About Us
                        </Typography>

                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography style={{ textAlign: 'justify', color: 'black', fontWeight: '800' }} variant="h6" gutterBottom component="div">
                            Car valley is a multinatinal car selling brand.We ensure the official car member and service from the parent companys technician.We also include the proper maintance under the hood for thr 6 months(Cost free).
                        </Typography>

                    </Grid>

                </Grid>
            </Container>


        </div >
    );
};

export default AboutUs;