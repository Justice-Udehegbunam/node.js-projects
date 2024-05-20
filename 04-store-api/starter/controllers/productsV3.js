// With Sorting
const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).sort("-name");
  //the sort() Function is used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If "-" is omitted, the elements are sorted in ascending, ASCII character order.

  res.status(200).json({ msg: products, nbHits: products.length });
};
const getAllProducts = async (req, res) => {
  const { featured, company, name, sort } = req.query;

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
  if (sort) {
    //   console.log(sort);

    const sortList = sort.split(",").join(" ");
    /* Handling multiple sort fields: The sort variable is expected to contain a string of multiple   field names separated by commas (e.g., "name,price,createdAt"). The split() method splits this string into an array of individual field names.
        Removing commas and adding spaces: The join(" ") method then joins the array elements back into a string, but this time with spaces instead of commas. This is necessary because Mongoose's sort() method expects a string with spaces separating the field names, not commas.
        For example, if sort is "name,price", the code would convert it to "name price", which is the correct format for Mongoose's sort() method.
        Without this line of code, the sort() method would not work correctly, and the results would not be sorted as intended. 
      */
    results = results.sort(sortList);
  } else {
    results = results.sort("createdAt");
  }
  const products = await results;

  res.status(200).json({ msg: products, nbHits: products.length });
};

module.exports = { getAllProducts, getAllProductsStatic };
