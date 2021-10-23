import { Badge } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";import { borderRight } from "@mui/system";

import { useEffect, useState } from "react";
import axios from "axios";


const Container = styled.div`
  height: 80px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  // flex: 1;
  // text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: balck;
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {

  return (
    <Container>
      
      <Wrapper>
        <Left>
          <Logo>Logo</Logo>
        </Left>
        <Center>
          <SearchContainer
            style={{
              width: "300px",
              backgroundColor: "white",
              borderRadius: "5rem",
              marginRight: "8%",
            }}
          >
            <Input
              placeholder="Search"
              style={{
                width: "300px",
                backgroundColor: "white",
                borderRadius: "5rem",
                marginRight: "8%",
              }}            />
            <Search />
          </SearchContainer>{" "}
        </Center>
        <Right style={{ marginRight: "8%" }}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Home</MenuItem>
          </Link>
          <Link
            to={`/products/616fc344b0a2c9fed10a2e2c`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem>Products</MenuItem>
          </Link>
          <MenuItem>Services</MenuItem>
          <Link
            to="/vendors"
            style={{ textDecoration: "none", color: "black" }}
          >
    <MenuItem>Vendor </MenuItem>
            </Link>
            <Link
            to="/Affiliate"
            style={{ textDecoration: "none", color: "black" }}
          >
    <MenuItem>Affiliate </MenuItem>
            </Link>

            
    
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} style={{color:"teal"}}>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
      {/* {products.map((product) => (
<h1>{product.Name}</h1>      ))} */}
    </Container>
  );
};

export default Navbar;
