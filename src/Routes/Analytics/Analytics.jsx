import React from "react";
import Sidenav from "../../Components/Sidenav/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../../Components/Navbar/Navbar";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Analytics.css'
import GeoChart from "../../Chart/GeoChart";
import PieChart from "../../Chart/PieChart";
import { Bchart } from "../../Chart/Bchart";
import CountUp from 'react-countup';

const Analytics = () => {
  return (

    <>
   <div  className="bgColor">
   <Navbar/>
      <div>
      <Box height={50}/>
      <Box sx={{ display: "flex" }}>
      <Sidenav />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Box height={20}/>
      <Grid container spacing={2}>
        <Grid item xs={3}>
        <Stack spacing={2} >
        <Card sx={{ minWidth: 50 + "%", height:130 }} className="gradient">
      <CardContent>
        <div className="pementIcon">
        
        </div>
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
        Visitors
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{color:"#ffffff",fontWeight:"600",fontSize:"21px"}}>
        $<CountUp delay={0.3} end={22000} duration={3.1}/>
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
        Since last week
        </Typography>
      
      </CardContent>
    </Card>
        <Card sx={{ minWidth: 50 + "%", height:130 }}className="gradient">
      <CardContent>
        <div className="pementIcon">
     
        </div>
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
        Visitors
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{color:"#ffffff",fontWeight:"600",fontSize:"21px"}}>
        $<CountUp delay={0.3} end={20000} duration={3.1}/>
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
        Since last week
        </Typography>
      </CardContent>
    </Card>

    </Stack>
    </Grid>
     <Grid item xs={3}>
        <Stack spacing={2} >
        <Card sx={{ minWidth: 50 + "%", height:130 }} className="gradientLight">
      <CardContent>
        <div className="pementIcon">
         
        </div>
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
        Visitors
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{color:"#ffffff",fontWeight:"600",fontSize:"21px"}}>
         $ <CountUp delay={0.3} end={20000} duration={3.1}/>
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
        Since last week
        </Typography>
      </CardContent>
    </Card>
        <Card sx={{ minWidth: 39 + "%", height:130 }} className="gradientLight">
      <CardContent>
        <div className="pementIcon">
         
        </div>
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
         Visitors
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{color:"#ffffff",fontWeight:"600",fontSize:"21px"}}>
         $ <CountUp delay={0.3} end={32000 } duration={3.1}/>
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
        Since last week
        </Typography>
      </CardContent>
    </Card>
    <br />
       
    </Stack>
        </Grid>

        <Grid item xs={6}>
        <Stack spacing={2} >
        <Card sx={{ minWidth: 49 + "%", height:275 }} >
        <Stack spacing={2} direction="row">
        <Bchart/>  
       </Stack>
      
    </Card>
    
     </Stack>
        </Grid>
      </Grid>
      <Box height={20}/>
      <Grid container spacing={2}>
        <Grid item xs={7}>
        <Card sx={{height:40 + "vh"}}>
      <CardContent>
        <GeoChart/>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={5}>
        <Card sx={{height:40 + "vh"}}>
      <CardContent>
      <PieChart/>
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
export default Analytics;