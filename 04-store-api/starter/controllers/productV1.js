const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  // Why am i not doing this
  throw new Error("Testing async errors");

  /* As we all know express sends a function called next into the middleware, which then needs to be called with or without error to make it move the request handling to the next middleware. It still works, but in case of an async function, you don't need to do that. If you want to pass an error, just throw a normal exception:

app.use(async (req, res) => {
  const user = await User.findByToken(req.get('authorization'));
 
  if (!user) throw Error("access denied");
}); */

  res.status(200).json({ msg: "Products testing route" });
};
const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "Products route" });
};

module.exports = { getAllProducts, getAllProductsStatic };
