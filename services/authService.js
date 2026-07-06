import jwt from "jsonwebtoken";

const usuario = {
  username: "admin",
  password: "1234",
};

export const login = (username, password) => {
  if (username !== usuario.username || password !== usuario.password) {
    return null;
  }
  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};
