class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
    //since the errors are operational errors so this property has been set to true.

    Error.captureStackTrace(this, this.constructor);
    //Reason for using {this.constructor} is when the error class is called and the constructor is set then then the constructor will not appear in the stackTrace...
  }
}

module.exports = AppError;
