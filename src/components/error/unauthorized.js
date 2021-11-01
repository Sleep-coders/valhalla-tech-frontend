import React from "react";
import "./error.scss";

class Unauthorized extends React.Component{




    render(){

        return(
        <>
            {/* <h1 style={{marginTop:"2%", textAlign:"center"}}> 403 - Unauthorized</h1>
            <div style={{textAlign:"center"}}> <img src="https://i.pinimg.com/originals/33/42/e4/3342e4ba684ff017acff7382cad86c7f.jpg" alt=""  /> </div> */}
            
            <div class="ghost">
  
<div class="ghost--navbar"></div>
  <div class="ghost--columns">
    <div class="ghost--column">
      <div class="code"></div>
      <div class="code"></div>
      <div class="code"></div>
      <div class="code"></div>
    </div>
    <div class="ghost--column">
      <div class="code"></div>
      <div class="code"></div>
      <div class="code"></div>
      <div class="code"></div>
    </div>
    <div class="ghost--column">
      <div class="code"></div>
      <div class="code"></div>
      <div class="code"></div>
      <div class="code"></div>
    </div>
    
  </div>
  <div class="ghost--main">
    <div class="code"></div>
    <div class="code"></div>

  </div>

</div>

<h1 class="police-tape police-tape--1">
  &nbsp;&nbsp;&nbsp;&nbsp;Error: 403&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error: 403&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error: 403&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error: 403&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error: 403&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error: 403&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error: 403
</h1>
<h1 class="police-tape police-tape--2">Forbidden&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forbidden&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forbidden&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forbidden&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forbidden&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forbidden&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
            
            </>
        )
    }
}

export default Unauthorized;