const notFound = (req, res) => {
  res
    .status(404)
    .send(
      `<h1>Route not found let's go home.</h1> <a href='/index.html'>Home</a>`
    );
};
module.exports = notFound;
