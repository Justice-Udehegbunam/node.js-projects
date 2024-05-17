const asyncWrapper = (callback) => {
  return async (req, res, next) => {
    try {
      await callback(req, res, next);
    } catch (error) {
      next(error);
      // the reason why we use this next() "function parameter" is to get aa custom error handling for our website, "If you pass an error to next() and you do not handle it in a custom error handler"
    }
  };
};
module.exports = asyncWrapper;
