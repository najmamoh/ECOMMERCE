import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Typography from "@mui/material/Typography";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";


export default function ProductCards(props) {
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
            marginLeft: "30%",
            color: "white",
            backgroundColor: "#019376",
          }}
        >
          Add to cart{" "}
        </Button>
      </CardActions>
    </Card>
  );
}
