const express = require("express");
const productController = require("../Controller/productController");
const verifyToken = require("../middleware/auth");

const Router = express.Router();
Router.route("/")
  .post(productController.products)
  .get(verifyToken,productController.findproduct);

Router.route("/:id").get(productController.getfind).put(productController.update)
module.exports = Router;
