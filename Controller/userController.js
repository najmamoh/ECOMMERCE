const User =require('../module/userModule')
exports.createUser=async (req,res)=>{
    try {
    
     await User.create(req.body)
        res.status(201).json({
          message: "created User",
        });
      } catch (e) {
        res.status(400).json({
          message: e.message,
        });
    }}



    exports.finduser = async (req, res) => {
        try {
          const getUser = await User.find({});
          res.status(200).json({
            message:"found",
            Vendor:getUser });
        } catch (e) {
          res.status(400).json({
            message: e.message,
          });
        }
      };

      