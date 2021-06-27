import React from "react";
import { HomeWrapper } from "./Home.style";
import background from "./6602.jpg";

const Home = () => {
  return (
    <div>
      <img src={background} style = {{position:"fixed",width:"100%",height:'100%'}}/>
	  <h1 style = {{position: 'fixed', left: '25%', top:'25%'}}>Hello</h1>
    </div>
  );
};

export default Home;
