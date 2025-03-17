function authentication(req, res, next) {
  const token = req.headers.authorization?.split("Basic ")[1];
  if (!token) return next();

  const userId = token.slice(1, -1);
  req.userId = userId;

  next();
}

module.exports = authentication;
