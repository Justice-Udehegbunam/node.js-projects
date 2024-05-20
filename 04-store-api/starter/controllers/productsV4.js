// With Selecting functionality
const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).select("name price");
  //the select() Function is used to determine what properties of the elements to show.

  res.status(200).json({ msg: products, nbHits: products.length });
};
const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields } = req.query;

  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  // this refactoring was done to ensure tht the sort functionality only happens if the user is sorting first and also to ensure that the other things the user placed in is also taken into consideration when filtering
  console.log(queryObject);
  let results = Product.find(queryObject);

  // sort
  if (sort) {
    //   console.log(sort);

    const sortList = sort.split(",").join(" ");
    results = results.sort(sortList);
  } else {
    results = results.sort("createdAt");
  }

  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    results = results.select(fieldsList);

    /* the line of code const fieldsList = fields.split(",").join(" "); is necessary for the following reasons:
    Handling multiple fields: The fields variable is expected to contain a string of multiple field names separated by commas (e.g., "name,price,description"). The split() method splits this string into an array of individual field names.
    Removing commas and adding spaces: The join(" ") method then joins the array elements back into a string, but this time with spaces instead of commas. This is necessary because Mongoose's select() method expects a string with spaces separating the field names, not commas.
    For example, if fields is "name,price", the code would convert it to "name price", which is the correct format for Mongoose's select() method.
    Without this line of code, the select() method would not work correctly, and the results would not be filtered to include only the specified fields.
    By converting the comma-separated string to a space-separated string, the code ensures that Mongoose's select() method receives the correct format, which is essential for retrieving only the desired fields from the database.

   */
  }

  const products = await results;

  res.status(200).json({ msg: products, nbHits: products.length });
};

module.exports = { getAllProducts, getAllProductsStatic };
