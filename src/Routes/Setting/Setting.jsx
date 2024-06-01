import React from "react";
import Sidenav from "../../Components/Sidenav/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../../Components/Navbar/Navbar";
import List from "../../Settings/List";

const Setting = () => {
  return (

    <>
    <Navbar/>
      <div className="bgColor">
      <Box height={90}/>
      <Box sx={{ display: "flex" }}>
      <Sidenav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <List/>
      </Box>
        </Box>
      </div>
    </>
   
  );
};

export default Setting;
