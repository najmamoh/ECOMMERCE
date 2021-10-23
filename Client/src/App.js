import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar";
import Header from "./Header";
import "./App.css";
import Footer from "./Footer";
import Home from "./Home";
import productsCards from "./productsCards";
import products from "./products";
import Checkout from "./Checkout";
import Vendors from "./Vendor";
import Rigster from "./LoginVendor"
import OneProduct from "./oneproduct";
import InfoVendor from "./InfoVendor";
import Affiliate from "./Affiliate"
import Login from "./Login"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route path="/Login" exact component={Login} />

        <Route path="/InfoVendor" exact component={InfoVendor} />
          <Route path="/OneProduct/:id" exact component={OneProduct} />
          <Route path="/Checkout" exact component={Checkout} />
          <Route path="/Rigster" exact component={Rigster} />
          <Route path="/vendors" exact component={Vendors} />
          <Route path="/Affiliate" exact component={Affiliate} />
          <Route path="/" exact component={Home} />
          <Route path="/products/:id" exact component={products} />
          <Route path="/productsCards" exact component={productsCards} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
