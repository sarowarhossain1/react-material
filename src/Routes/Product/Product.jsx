import React from "react";
import Sidenav from "../../Components/Sidenav/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../../Components/Navbar/Navbar";
import ProductsList from "../Products/ProductsList";


const Product = () => {
  return (

    <>
   <div>
   <Navbar/>
      <div className="bgColor">
      <Box height={90}/>
      <Box sx={{ display: "flex" }}>
      <Sidenav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <ProductsList/>
      </Box>
        </Box>
      </div>
   </div>
    </>
   
  );
};

export default Product;
