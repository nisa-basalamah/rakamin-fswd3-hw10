const errorHandler = (error, request, response, next) => {
  if (error.name === "ErrorNotFound") {
    response.status(404).json({
      message: "The requested data could not be found.",
    });
  } else {
    response.status(500).json({
      message: "Internal server error.",
    });
  }
};

module.exports = errorHandler;
