// With filteration
const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const search = "alb";
  const products = await Product.find({
    name: { $regex: search, $options: "i" },
    /* 
      The following are options  available for use with regular expression.

      Option
      Description
      i
      Case insensitivity to match upper and lower cases. For an example, see Perform Case-Insensitive Regular Expression Match.
      m
      For patterns that include anchors (i.e. ^ for the start, $ for the end), match at the beginning or end of each line for strings with multiline values. Without this option, these anchors match at beginning or end of the string. For an example, see Multiline Match for Lines Starting with Specified Pattern.

      If the pattern contains no anchors or if the string value has no newline characters (e.g. \n), the m option has no effect.

      x
      "Extended" capability to ignore all white space characters in the $regex pattern unless escaped or included in a character class.

      Additionally, it ignores characters in-between and including an un-escaped hash/pound (#) character and the next new line, so that you may include comments in complicated patterns. This only applies to data characters; white space characters may never appear within special character sequences in a pattern.

      The x option does not affect the handling of the VT character (i.e. code 11).

      s
      Allows the dot character (i.e. .) to match all characters including newline characters. For an example, see Use the . Dot Character to Match New Line.
      u
      Supports Unicode. This flag is accepted, but is redundant. UTF is set by default in the $regex operator, making the u option unnecessary. 
   */
  });
  // when you leave the curly braces empty it just means that u want it to return all the data it has in the db but when u pass in parameters it tells the database what to fetch based on ur schema
  res.status(200).json({ msg: products, nbHits: products.length });
};
const getAllProducts = async (req, res) => {
  //  console.log(req.query);
  // the console log there is used to acess the query-string parameters

  const { featured, company, name } = req.query;

  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  /* Dynamic query building: By using an object (queryObject) to build the query, you can dynamically add or remove conditions based on the query string parameters. This makes the code more flexible and reusable.
    Type coercion: The line queryObject.featured = featured === "true" ? true : false; converts the string value of featured to a boolean. This is useful when working with query string parameters, which are always strings.
  */

  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  console.log(queryObject);
  const products = await Product.find(queryObject);
  res.status(200).json({ msg: products, nbHits: products.length });
};

module.exports = { getAllProducts, getAllProductsStatic };
