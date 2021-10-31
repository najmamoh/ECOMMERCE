import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import  Modal  from './model'
// import { GlobalStyle } from './globalStyles';
import Typography from "@mui/material/Typography";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";


export default function ProductCards(props) {
  const [url,seturl]=React.useState()
  const params=useParams()
  const createUrl = (username, productId) => {
    return 'localhost:3000/product/' + productId + '/' + username;
  };

function promoteClick(){
const url=createUrl("asma",params.id)
seturl(url)
console.log(url)
}


// const [showModal, setShowModal] = useState(false);

// const openModal = () => {
//   setShowModal(prev => !prev);
// };
  return (
    <Card sx={{ maxWidth: 256, marginTop: 5, marginRight: "6px" }}>
      <Link to={`/OneProduct/${props.data._id}`}>
        {" "}
        <CardMedia
          component="img"
          height="194"
          image="../img.jpg"
          alt="Paella dish"
        />
      </Link>

      <CardContent>
        <Typography style={{ fontSize: "25px" }}>{props.data.Name}</Typography>
        <Typography style={{ fontSize: "25px" }}>
          ${props.data.Price}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          style={{
            color: "white",
            backgroundColor: "#019376",
          }}
        >
          Add to cart{" "}
        </Button>
        <Button     style={{
            marginLeft: "10%",
          }} onClick={promoteClick}>promote</Button>
        {/* <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle /> */}
        

      </CardActions>  
        {/* <h1>{url}</h1> */}

    </Card>
  );
}
