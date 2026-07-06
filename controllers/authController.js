import * as authService from "../services/authService.js";

export const login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "Usuario y contraseña requeridos" });
  }
  const token = authService.login(username, password);
  if (!token) {
    return res.status(401).json({ error: "Credenciales invalidas" });
  }
  res.status(200).json({ token });
};
