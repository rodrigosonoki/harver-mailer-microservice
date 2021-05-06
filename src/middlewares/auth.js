require("dotenv/config");

const auth = (req, res, next) => {
  if (req.headers.auth !== process.env.AUTH_TOKEN) {
    return res.status(403).json({ message: "Token inválido." });
  }
  next();
};

export default auth;
