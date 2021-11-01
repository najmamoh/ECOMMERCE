const Express=require('express')
const bodyparser=require('body-parser')
const cors = require('cors')
require('dotenv').config({path:"./config.env"})
require('./Server')
const path = require("path")
const App=Express()
App.use(bodyparser())
App.use(cors())
// App.use((req,res,next)=>
// {console.log('hi')
// next()}
// )
const userRouter=require('./Router/userRouter')
App.use('/user',userRouter);


const ProductRouter=require('./Router/ProductRouter')
App.use('/product',ProductRouter)


const AffiliateRouter=require('./Router/AffiliateRouter')
App.use('/Affiliate',AffiliateRouter)

const VendorRouter=require('./Router/vendorRouter')
App.use('/Vendor',VendorRouter)

const orderRouter=require('./Router/orderRouter')
App.use('/Order',orderRouter)



App.use('*',(req,res)=>{
App.use(Express.static("Client/build"))
res.send(path.resolve(__dirname,'Client','build','index.html'))
})


const port=process.env.port
App.listen(port,()=>{
    console.log(`listing on port  ${port}` );
})