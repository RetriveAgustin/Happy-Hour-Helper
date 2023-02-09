export const cors = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Request-With,Content-Type,Accept"
  );
  res.header("Access-Control-Allow-Nethods", "GET,POST,PUT,DELETE,OPTIONS");
  next();
};
