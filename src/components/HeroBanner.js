import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: {lg: '212px', xs: '70px'},
            ml: {sm: '50px'},
            
        }} 
        position="relative" 
        p= "20">
            <Typography color= "#FF2625" fontWeight="600" fontSize="26px">
                    Fitness Club
            </Typography>
            <Typography fontWeight={700}
                sx={{fontSize:{lg: '44px', xs: "40px"}}}
                mb= "23px" mt= "30px"
            >
                Sweat, Smile <br/> and Repeat
            </Typography>
            <Typography fontSize="26px" lineHeight="35px" mb={4}>
                Check out the most effective exercises
            </Typography>
            <Button 
                variant="contained" 
                color= "error" 
                href='#exercises'
                sx={{backgroundColor: '#ff2625', padding: '10px'}}
                >
                Explore Exercises
            </Button>
            <Typography
                fontWeight={600} 
                color="rgba(255, 38, 37, 0.3)"
                fontSize="150px"
                paddingBottom='50px'
                style={{ transform: 'rotate(45deg)' }}
            >
                exercise boi!
            </Typography>
            <img 
                src= {HeroBannerImage} 
                alt='banner' 
                className='hero-banner-img'/>
        </Box>
    )
}

export default HeroBanner