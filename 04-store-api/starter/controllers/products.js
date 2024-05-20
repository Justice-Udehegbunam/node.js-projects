// With filteration
const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ featured: true });
  // when you leave the curly braces empty it just means that u want it to return all the data it has in the db but when u pass in parameters it tells the database what to fetch based on ur schema
  res.status(200).json({ msg: products });
};
const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "Products route" });
};

module.exports = { getAllProducts, getAllProductsStatic };
