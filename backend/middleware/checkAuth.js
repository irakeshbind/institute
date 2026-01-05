
module.exports = {
  generateToken: (payload) => {
    const token = jwt.sign(payload, "234", {
      expiresIn: "1d",
    });
    return token;
  },
  verifytoken: (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(404).json({
        message: "token not found",
      });
    }
    try {
      const newTOken = token.split(" ")[1];
      // console.log(newTOken)
      const verify = jwt.verify(newTOken, "234");
      req.user = verify;
      next();
    } catch (err) {
      res.status(500).json({
        message: "Error in verification token",
        err,
      });
    }
  },
};
