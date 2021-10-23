import styled from "styled-components";
import TextField from '@mui/material/TextField';
import { BrowserRouter as Router, useHistory } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  width: 70vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;


`;

const Wrapper = styled.div`
margin-bottom: 90px;
margin-left:40%;

  width: 40%;
  padding: 25px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: 300;
  color:teal
`;

const Form = styled.form`
`;



const Button = styled.button`
  width: 40%;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 10px;

`;

const Register = () => {
  let history = useHistory();

  const [Addproducts, setAddproducts] = useState({
    userName:"",
  Email:"",
  password:"",
  ConfirmPassword:"",
  });

  function Save(e) {
    e.preventDefault();
    
      axios.post(`http://localhost:8000/user/`,Addproducts).then((res) => {
        console.log(res);

      });      
        history.push("/InfoVendor");

  }
  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form>
         
       
          <TextField  id="standard" label="Email" variant="standard"  
  onChange={(e)=>setAddproducts({...Addproducts,Email:e.target.value})}/>
          <TextField id="standard" label="password" variant="standard" style={{ 
  minWidth: "40%",
  margin: "20px 10px 0px 0px",
  padding: "10px",
  }} 
  onChange={(e)=>setAddproducts({...Addproducts,password:e.target.value})} />
   
         

        </Form>
               <Button    onClick={(e) => Save(e)} style={{marginTop:"10%"}} >Register Now</Button>  
      </Wrapper>
    </Container>
  );
};

export default Register;






