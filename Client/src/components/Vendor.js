import { BrowserRouter as Router, Link } from "react-router-dom";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
// import Box from "@mui/material/Box";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import GetAppIcon from '@mui/icons-material/GetApp';

import Typography from "@mui/material/Typography";
import { width } from "@mui/system";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const Container = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Box = styled.div`
  display: flex;
  width: 50%;
  margin: auto;
  padding: 25px;
  background-color: white;
  margin-top: 5px;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  fontSize: 25px;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  color:balck;
  background-color:white

`;

const Home = () => {
  return (
    <>
    <div style={{backgroundColor:"white"}}className="img2" > 

        <Container 
          style={{  textAlign: "center", marginLeft: "13%"}}
        >
          <Wrapper>
            <InfoContainer>
              <Title style={{fontSize:"40px"
}}>PUT YOUR PRODUCT HERE ! LET US BOOST YOUR BUSINESS
</Title>
              <Desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                tristique auctor pretium. Fusce tristique, dui quis tincidunt
                accumsan, urna justo auctor eros, non euismod purus ligula ac
              </Desc>

            </InfoContainer>     

          </Wrapper>                     

        </Container>
        <Link to="/Rigster"><Button style={{marginLeft:"35%", marginTop:"5%" ,borderRadius: "7px"}}>Start now. It’s free to sign up</Button>   </Link></div>
     {/* <div
        style={{
          backgroundColor: "white",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      > */}
      
     <div style={{display:"flex", marginTop:"5%",marginLeft:"5%",backgroundColor:"white"}}>
          <div style={{marginLeft:"5%",width:"70%",marginTop:"11px"}}>
            <h5 style={{fontSize:"25px"
}}>For product sellers</h5>
            <Typography style={{fontSize:"20px",width:"80%"}}>
            This system will ease for you to boost your sales, it enables you to sell large number of items in short term. Our 
            youth are always ready for you to advertise your product
            </Typography>
            <Link to="/Rigster"><Button style={{marginLeft:"3%", marginTop:"25%" ,boxShadow: "0 4px 8px 0 black, 0 6px 20px 0 rgba(0, 0, 0, 0.19)" ,borderRadius: "7px"}}>Start now. It’s free to sign up</Button>   </Link>

        
          </div>

          <div >
         <img style={{width:"90%" ,  borderRadius: "10px"
}} src="im.jpg"/>
         
       
         </div>{" "}
      </div >
      


         
<Card sx={{ minWidth: 275,width:"95%",margin: "auto" ,marginLeft:"5%" ,backgroundColor:"stone",marginTop:"9%"
}}>
    <Typography style={{fontSize:"25px",marginTop:"15px",marginLeft:"30%",color:"Black" , padding:"5px",borderRadius: "7px",
position:"relative",width:"40%",boxShadow: "0 4px 8px 0 turquoise, 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
    Begin your success journey - Easy steps</Typography>
<Card sx={{ minWidth: 275 ,display:"flex",marginTop:"5%",marginLeft:"9%"}}>
    
    <Card sx={{ minWidth: 275, paddingBottom:"9%"}}>
      <CardContent>
        <HowToRegIcon style={{ marginTop:"7%",fontSize:"50px"}}/>
        <Typography sx={{ marginTop:"7%",fontSize: 14 ,fontSize:"19px",color:"turquoise"}} color="text.secondary" gutterBottom>
        Step one
      </Typography>
       
       
        <Typography variant="body2" style={{fontSize:"15px"}}>
        Register           <br />
        </Typography>
      </CardContent>
      
     
    </Card>

    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <AddRoadIcon style={{ marginTop:"7%",fontSize:"50px"}}/>
        <Typography sx={{ marginTop:"7%", fontSize: 14, color:"turquoise",fontSize:"19px"}}   color="text.secondary" gutterBottom>
        Step two
        </Typography>
       
        <Typography variant="body2" style={{fontSize:"15px"}}>
        Start putting your product here         <br />
        </Typography>
      </CardContent>
    </Card>
    
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <AddRoadIcon style={{ marginTop:"7%",fontSize:"50px"}}/>

        <Typography sx={{ marginTop:"7%", fontSize: 14,fontSize:"19px" ,color:"turquoise"}} color="text.secondary" gutterBottom>
        Step three        </Typography>
       
        <Typography variant="body2" style={{fontSize:"15px"}}>
        Let our affiliates promote your items          <br />
        </Typography>
      </CardContent>
      
     
    </Card>

    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <GetAppIcon style={{marginTop:"7%",fontSize:"50px"}}/>
        <Typography sx={{  marginTop:"7%", fontSize: 14 ,fontSize:"19px",color:"turquoise"}} color="text.secondary" gutterBottom>
        Step four        </Typography>
      
        <Typography variant="body2" style={{fontSize:"15px"}}>
        Get paid. On time. Every time.

<br />
        </Typography>
      </CardContent>
      
     
    </Card>

    
    </Card>
 </Card>

    </>
  );
};

export default Home;






