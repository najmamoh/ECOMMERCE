import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
// import Box from "@mui/material/Box";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Typography from "@mui/material/Typography";

const Container = styled.div`
  width: 70%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Box = styled.div`
  display: flex;
  width: 70%;
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
`;

const Home = () => {
  return (
    <>
      <div className="img">
        <Container
          style={{ textAlign: "center", marginLeft: "13%", marginTop: "2%" }}
        >
          <Wrapper>
            <InfoContainer>
              <Title>More Sales. Less Work.</Title>
              <Desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                tristique auctor pretium. Fusce tristique, dui quis tincidunt
                accumsan, urna justo auctor eros, non euismod purus ligula ac
              </Desc>
<Link to="/Vendon">
              <Button>Start now. It’s free to sign up.</Button></Link>
            </InfoContainer>
          </Wrapper>
        </Container>
      </div>
      <div
        style={{
          backgroundColor: "white",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <Box>
          <div>
            <h5>For product sellers</h5>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tristique auctor pretium. Fusce tristique, dui quis tincidunt
              <h6>See More..</h6>
            </Typography>
          </div>
          <div style={{ marginLeft: "20%" }}>
            <h5>For sales partners</h5>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tristique auctor pretium. Fusce tristique, dui quis tincidunt
            </Typography>
            <h6>See More..</h6>
          </div>{" "}
        </Box>
        <Button style={{ marginLeft: "40%" }}>
          Start now. It’s free to sign up.
        </Button>
      </div>
    </>
  );
};

export default Home;
