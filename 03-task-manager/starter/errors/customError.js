class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

/* Here's a breakdown of what's happening:
class CustomAPIError extends Error: This line declares a new class called CustomAPIError that inherits from the built-in Error class.
constructor(message, statusCode) { ... }: This is the constructor function for the CustomAPIError class. It takes two parameters:
message: a string that represents the error message.
statusCode: a number that represents the HTTP status code associated with the error.
super(message);: This line calls the constructor of the parent class (Error) with the message parameter. This sets the error message for the custom error.
this.statusCode = statusCode;: This line sets a new property called statusCode on the custom error object, using the statusCode parameter passed to the constructor.
By extending the built-in Error class, this custom error class inherits all the properties and methods of the Error class, plus the additional statusCode property. */

const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode);
};

module.exports = { CustomAPIError, createCustomError };
