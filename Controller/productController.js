const producModel = require("../Model/ProductModel");
exports.products = async (req, res) => {
  try {

    // Modal: price=10 comission=5

    // comission: 
// const product={
//   name:"iphone case",
//   price:10,
//   commission:10
// }
//     // order 15
//     //5
//     const order = 20;  //Iphone case price 20$
//     const commission = 10; //iphone case comission 10$

//     const adminComission = comission / 100 * 40; // 4
//     const affilateComission = comission / 100 * 60; //6
// await order.create({

// })

    // await commission.create({
    //   user:123413412312312,
    //   product:21312312312,
    //   comission:affilateComission  //6
    // })

    await producModel.create(req.body);
    res.status(201).json({
      message: "created product",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.findproduct = async (req, res) => {
  try {
    const product = await producModel
      .find({ user: req.params.id })
      .populate("User");

    res.status(200).json({
      message: "Foud",
      data: product,
    });
  } catch (e) {
    console.log(e.message);
  }
};

exports.getfind = async (req, res) => {
  try {
    const product = await producModel.findById(req.params.id).populate();

    res.status(200).json({
      message: "all products",
      data: product,
    });
  } catch (e) {
    console.log(e.message);
  }
};



exports.update = async (req, res) => {
  try {
    const product = await producModel.findByIdAndUpdate(req.params.id);

    res.status(200).json({
      message: "updated",
      data: product,
    });
  } catch (e) {
    console.log(e.message);
  }
};



//vedor products

