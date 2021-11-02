const producModel = require("../Module/ProductModule");
exports.products = async (req, res) => {
  try {
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

