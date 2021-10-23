import styled from "styled-components";
import TextField from '@mui/material/TextField';
import { BrowserRouter as Router, Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
const Container = styled.div`
  width: 95vw;
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

  width: 50%;
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
  display: flex;
  flex-wrap: wrap;
`;

// const TextField = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 20px 10px 0px 0px;
//   padding: 10px;
//   border-radius: 10px;


// `;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 10px;

`;

const Register = () => {
  const [Addproducts, setAddproducts] = useState({
    FullName: "",
    Phone: '',
    Email: "",
    Company: "",
    Address: "",
  });

  function Save(e) {
    e.preventDefault();
    
      axios.post(`http://localhost:8000/Vendor/`,Addproducts).then((res) => {
        console.log(res);
      });
  }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
         
        <TextField id="standard-basic" label="FullName" variant="standard" style={{  flex: 1,
  minWidth: "40%",
  margin: "20px 10px 0px 0px",
  padding: "10px",

  }}       onChange={(e)=>setAddproducts({...Addproducts,FullName:e.target.value})}
  />

          <TextField  id="standard-basic" label="Phone" variant="standard"  style={{  flex: 1,
  minWidth: "40%",
  margin: "20px 10px 0px 0px",
  padding: "10px",
  }}
  onChange={(e)=>setAddproducts({...Addproducts,Phone:e.target.value})}/>

          <TextField id="standard-basic" label="Email" variant="standard" style={{  flex: 1,
  minWidth: "40%",
  margin: "20px 10px 0px 0px",
  padding: "10px",
  }} 
  onChange={(e)=>setAddproducts({...Addproducts,Email:e.target.value})} />

          <TextField id="standard-basic" label="Company" variant="standard"  style={{  flex: 1,
  minWidth: "40%",
  margin: "20px 10px 0px 0px",
  padding: "10px",
  }}
  onChange={(e)=>setAddproducts({...Addproducts,Company:e.target.value})}/>

<TextField id="standard-basic" label="Address" variant="standard"  style={{  flex: 1,
  minWidth: "40%",
  margin: "20px 10px 0px 0px",
  padding: "10px",
  }}
  onChange={(e)=>setAddproducts({...Addproducts,Address:e.target.value})}/>
         
        </Form>
        <Link
            to="/products"
            style={{ textDecoration: "none", color: "black" }}
          >
        <Button style={{marginTop:"10%"}} >CREATE</Button>
          </Link>
          {/* onClick={(e) => Save(e)} */}
      </Wrapper>
    </Container>
  );
};

export default Register;







