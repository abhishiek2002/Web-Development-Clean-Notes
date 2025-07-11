function sendErrorResponse(res, err) {
  const statusCode = err.statusCode;
  const message = err.message;

  return res.status(statusCode).json({
    success: false,
    message: message,
  });
}

function sendResponse(res, data, statusCode, message="Success") {
  return res.status(statusCode).json({
    success: true,
    data: data,
    message
  });
}

export { sendErrorResponse, sendResponse };
