const express=require('express')
const vendorController=require('../controller/vendorController')
const Router=express.Router();
Router.route('/').post(vendorController.Vendor)
.get(vendorController.findVendor)


Router.route('/:id')
.get(vendorController.findoneVendor)

module.exports=Router

