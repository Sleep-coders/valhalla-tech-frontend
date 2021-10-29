import { textAlign } from "@mui/system";
import React from "react";
import background from "./403.png";

class Unauthorized extends React.Component{




    render(){

        return(
        <>
            <h1 style={{marginTop:"2%", textAlign:"center"}}> 403 - Unauthorized</h1>
            <div style={{textAlign:"center"}}> <img src="https://i.pinimg.com/originals/33/42/e4/3342e4ba684ff017acff7382cad86c7f.jpg" alt=""  /> </div>
            </>
        )
    }
}

export default Unauthorized;