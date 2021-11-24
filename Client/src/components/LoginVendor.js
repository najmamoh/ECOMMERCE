import styled from "styled-components";
import TextField from '@mui/material/TextField';
import { BrowserRouter as Router, useHistory } from "react-router-dom";

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
  color:#159b80
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
  background-color: #159b80;
  color: white;
  cursor: pointer;
  border-radius: 10px;

`;

const Register = () => {
  let history = useHistory();

  const [User, setAdduser] = useState({
    userName:"",
  Email:"",
  password:"",
  ConfirmPassword:"",
  role:""
  });

  function Save(e) {
    e.preventDefault();
    
      axios.post(`http://localhost:8000/user`,User).then((res) => {
        
        console.log(res);

      });      
        history.push("/InfoVendor");

  }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
         
        <TextField id="standard-basic" label="UserName" variant="standard" style={{  flex: 1,
  minWidth: "40%",
  margin: "20px 10px 0px 0px",
  padding: "10px",

  }}       onChange={(e)=>setAdduser({...User,userName:e.target.value})}
  />
          <TextField  id="standard-basic" label="Email" variant="standard"  style={{  flex: 1,
  minWidth: "40%",
  margin: "20px 10px 0px 0px",
  padding: "10px",
  }}
  onChange={(e)=>setAdduser({...User,Email:e.target.value})}/>
          <TextField id="standard-basic" label="password" variant="standard" type="password" style={{  flex: 1,
  minWidth: "100%",
  margin: "20px 10px 0px 0px",
  padding: "10px",
  }} 
  onChange={(e)=>setAdduser({...User,password:e.target.value})} /><br/>
          {/* <TextField id="standard-basic" label="Confirm Password" variant="standard" type="password"  style={{  flex: 1,
  minWidth: "40%",
  margin: "20px 10px 0px 0px",
  padding: "10px",
  }}
  onChange={(e)=>setAdduser({...User,ConfirmPassword:e.target.value})}/> */}
         
<select style={{  flex: 1,
  minWidth: "5%",
  margin: "20px 10px 0px 0px",
  padding: "10px",
  borderRadius:"5px"
  }}
 onChange={(e)=>setAdduser({...User,role:e.target.value})}>
  <option value="user">Affiliate</option>
  <option value="vendor">Vendor</option>
</select><br/>

{/* <p>Are you a vendor click <a href="https://abnas-admin-herokuapp.com">here</a>to sign up</p> */}
        </Form>
               <Button    onClick={(e) => Save(e)} style={{marginTop:"10%"}} >Register Now</Button>  
      </Wrapper>
    </Container>
  );
};

export default Register;






