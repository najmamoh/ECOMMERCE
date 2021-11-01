import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import productsCards from "./components/productsCards";
import products from "./components/products";
import Checkout from "./components/Checkout";
import Vendors from "./components/Vendor";
import Rigster from "./components/LoginVendor"
import OneProduct from "./components/oneproduct";
import InfoVendor from "./components/InfoVendor";
import Affiliate from "./components/Affiliate"
import Login from "./components/Login"
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
          <Route path="/Checkout/:id" exact component={Checkout} />
          <Route path="/Rigster" exact component={Rigster} />
          <Route path="/vendors" exact component={Vendors} />
          <Route path="/Affiliate" exact component={Affiliate} />
          <Route path="/" exact component={Home} />
          <Route path="/products/" exact component={products} />
          <Route path="/productsCards" exact component={productsCards} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
