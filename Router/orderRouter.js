const express = require("express");

const Router = express.Router();

const orderController = require("../Controller/OrderController");
Router.route("/")
  .post(orderController.saveOrder)
  .get(orderController.getOrders);

module.exports = Router;