import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';
function HeroBanner() {
  return (
    <Box
      sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
      position='relative'
      p='20px'>
      <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}
        mb='23px'
        mt='30px'>
        Sweat, Smile, <br /> Repeat
      </Typography>
      <Typography lineHeight='35px' fontSize='22px' mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        href='#exercises'
        variant='contained'
        color='error'
        sx={{ backgroundColor: '#ff2625', padding: '10px' }}>
        Explore Exercises
      </Button>
      <Typography
        className='hero-banner-bigText'
        fontSize='180px'
        fontWeight='600'
        color='#ff2625'
        sx={{ opacity: '0.1', lg: 'block', xs: 'none' }}>
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  );
}

export default HeroBanner;
