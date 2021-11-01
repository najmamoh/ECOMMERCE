import ProductsCards from "./productsCards";
import { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Products = () => {
  const { id } = useParams();

  const [products, setproducts] = useState([]);

  useEffect(() => {
  
    axios.get(`http://localhost:8000/product/`).then((res) => {
      console.log(res.data.data);
      setproducts(res.data.data);

      
    });

  }, []);
  return (
    // <div className="img">
    //    <div>
    //    <h1 className="titel">TOGETHER FOR SUCCESS LET US START</h1>
    //     <input type="text" className="input"></input>
    //       </div>
    <Container style={{ width: "70%", margin: "auto" }}>
      {products.map((product) => (
        <ProductsCards data={product} />
      ))}
      {/* <ProductsCards /> */}
    </Container>
  );
};

export default Products;
