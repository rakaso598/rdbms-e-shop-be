function userOnly(req, res, next) {
  if (!req.userId) return next(new Error("인증되지 않은 요청입니다..."));

  next();
}

module.exports = userOnly;
