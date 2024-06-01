import React from "react";
import Sidenav from "../../Components/Sidenav/Sidenav";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Navbar from "../../Components/Navbar/Navbar";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import './Home.css'
import StoreIcon from '@mui/icons-material/Store';
import PaymentIcon from '@mui/icons-material/Payment';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Accorodin from "../../Components/Accorodin/Accorodin";
import ChatBar from "../../Chart/ChartBar";
import CountUp from 'react-countup';

const Home = () => {
  return (

    <>
   <div className="bgColor">
   <Navbar/>
      <div>
      <Box height={50}/>
      <Box sx={{ display: "flex" }}>
      <Sidenav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Box height={20}/>
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <Stack spacing={2} direction="row">
        <Card sx={{ minWidth: 49 + "%", height:150 }} className="gradient">
      <CardContent>
        <div className="pementIcon">
          <PaymentIcon/>
        </div>
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
        <CountUp delay={0.2} end={500} duration={0.3}/>
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
          Total Earnings
        </Typography>
         
      </CardContent>
    </Card>
        <Card sx={{ minWidth: 49 + "%", height:150 }} className="gradientLight">
      <CardContent>
        <div className="pementIcon">
            <ShoppingBagIcon/>
        </div>
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
          <CountUp delay={0.4} end={900} duration={3.6}/>
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
         Total Orders
        </Typography>
        
      </CardContent>
    </Card>
    </Stack>
        </Grid>
        <Grid item xs={4}>
        <Stack spacing={2} >
        <Card sx={{ maxWidth: 395 }} className="gradientLight" >
        <Stack spacing={2} direction="row">
        <div className="iconStyled">
        <StoreIcon /> 
      </div>    
       <div className="shop">
       <span className="priceTitle">$203k</span>
       <br />
        <span className="totalPrice">Total Income</span>
       </div>
       </Stack>
      
    </Card>
    <Card sx={{ maxWidth: 395 }} className="gradientBar">
        <Stack spacing={2} direction="row">
        <div className="iconStyle">
        <StoreIcon /> 
      </div>    
       <div className="shop">
       <span className="priceTitle">$203k</span>
       <br />
        <span className="totalPrice">Total Income</span>
       </div>
       </Stack>
    </Card>
     </Stack>
        </Grid>
      </Grid>
      <Box height={20}/>
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <Card sx={{height:60 + "vh"}}>
      <CardContent>
        <ChatBar/>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={4}>
        <Card sx={{height:60 + "vh"}}>
      <CardContent>
     <div className="shop">
       <span className="priceTitle">Popolar Products</span>
       </div>
   
    <Accorodin/>
      </CardContent>
    </Card>
        </Grid>
      </Grid>
      </Box>
        </Box>
      </div>
   </div>
    </>
   
  );
};

export default Home;
