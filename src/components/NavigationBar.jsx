import React from "react";
import Box from "@mui/material/Box";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const NavigationBar = () => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          display: "inline-flex",
          justifyContent: "center",
          height: "100px",

        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            p: "2%",
            pr:'10px',
            justifyContent: "center",
          }}
        >
          <MonetizationOnIcon sx={{ fontSize: "3rem" }} />
        </Box>
        <Box sx={{
            pt:'10px'
        }}><h2>CryptoZz</h2> </Box>
        
      </Box>
    </div>
  );
};
export default NavigationBar;
