import * as productService from "../services/productService.js";

export const obtenerTodos = async (req, res, next) => {
  try {
    const productos = await productService.listar();
    res.status(200).json(productos);
  } catch (err) {
    next(err);
  }
};

export const obtenerPorId = async (req, res, next) => {
  try {
    const producto = await productService.buscarPorId(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.status(200).json(producto);
  } catch (err) {
    next(err);
  }
};

export const crear = async (req, res, next) => {
  try {
    const producto = await productService.crearProducto(req.body);
    res.status(201).json(producto);
  } catch (err) {
    next(err);
  }
};

export const eliminar = async (req, res, next) => {
  try {
    const producto = await productService.eliminarProducto(req.params.id);
    res.status(200).json(producto);
  } catch (err) {
    next(err);
  }
};
