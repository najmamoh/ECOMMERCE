const express = require("express");
const productController = require("../Controller/productController");
const Router = express.Router();
Router.route("/")
  .post(productController.products)
  .get(productController.findproduct);

Router.route("/:id").get(productController.getfind).put(productController.update)
module.exports = Router;
