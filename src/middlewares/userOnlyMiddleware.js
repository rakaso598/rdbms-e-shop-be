function userOnly(req, res, next) {
  if (!req.userId) return next(new Error("인증되지 않은 요청입니다."));

  // 얼리리턴 이후 유저아이디가 보장된 상태 -> 바로 next
  next();
}

export default userOnly;
