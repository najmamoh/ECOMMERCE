const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({

      name: String,
      quantity: Number,
      price: Number,
      total: Number,
      image: String,
 
});

const orderModel = mongoose.model("Order", orderSchema);

module.exports = orderModel;