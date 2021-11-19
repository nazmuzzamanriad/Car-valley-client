import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import useAuth from '../../hooks/useAuth';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'
import axios from 'axios';
import Grid from '@mui/material/Grid';



// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };


const Review = () => {
    const [opinion, setOpinion] = useState('')
    const [rating, setRating] = useState('')
    const { user } = useAuth();
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    const handleText = (e) => {
        setOpinion(e.target.value)


    }

    const handleRating = (e) => {
        setRating(e.target.value)
    }

    const handleReview = (e) => {
        const review = { name: user.displayName, email: user.email, des: opinion, rate: rating }

        axios.post('https://guarded-everglades-40474.herokuapp.com/reviews', review)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .finally(alert("Review Added")
            );

        e.preventDefault();
    }

    return (
        <div >
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <form onSubmit={handleReview}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Write Your Review
                        </Typography>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Name:  {user.displayName}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Email:{user.email}
                        </Typography>
                        <TextField
                            onBlur={handleText}
                            sx={{ width: '100%', m: 1 }}
                            required
                            type='text'
                            id="standard-basic"
                            label="Give your opinion"
                            variant="standard"

                        /> <br />
                        <TextField
                            onBlur={handleRating}
                            sx={{ width: '100%', m: 1 }}
                            required
                            type='number'
                            id="standard-basic"
                            label="Give rating within 1 to 5"
                            variant="standard"

                        /> <br />
                        <Button type='submit'>place review</Button>

                    </form>

                </Grid>

            </Grid>



        </div>
    );
};

export default Review;






// <Button onClick={handleOpen}>Click to give a review</Button>
// <Modal
//     open={open}
//     onClose={handleClose}
//     aria-labelledby="modal-modal-title"
//     aria-describedby="modal-modal-description"
// >
//     <Box sx={style}>
        // <Typography id="modal-modal-title" variant="h6" component="h2">
        //     Name:  {user.displayName}
        // </Typography>
        // <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        //     Email:{user.email}
        // </Typography>
        // <TextField
        //     onBlur={handleText}
        //     sx={{ width: '100%', m: 1 }}
        //     required
        //     type='text'
        //     id="standard-basic"
        //     label="Give your opinion"
        //     variant="standard"

        // /> <br />
        // <TextField
        //     onBlur={handleRating}
        //     sx={{ width: '100%', m: 1 }}
        //     required
        //     type='number'
        //     id="standard-basic"
        //     label="Give rating within 1 to 5"
        //     variant="standard"

        // /> <br />
        // <><Button onSubmit={() => handleReview}>place review</Button></>



//     </Box>


// </Modal>