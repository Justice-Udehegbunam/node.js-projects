const { CustomAPIError } = require("../errors/customError");

// why we use the below syntax is because Defining error-handling middleware functions in the same way as other middleware functions, except error-handling functions have four arguments instead of three: (err, req, res, next).

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ message: "Something went wrong please try again!" });
};

module.exports = errorHandlerMiddleware;
