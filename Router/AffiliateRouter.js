const express=require('express')
const AffiliateController=require('../Controller/AffiliateController')
const Router=express.Router();
Router.route('/').post(AffiliateController.Affiliate)
.get(AffiliateController.findAffiliate)



module.exports=Router

