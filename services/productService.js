import * as productModel from "../models/productModel.js";

export const listar = async () => {
  return await productModel.obtenerTodos();
};

export const buscarPorId = async (id) => {
  return await productModel.obtenerPorId(id);
};

export const crearProducto = async (datos) => {
  const { nombre, precio, stock, categoria } = datos;
  if (!nombre || precio == null || stock == null || !categoria) {
    throw { status: 400, mensaje: "Faltan campos obligatorios" };
  }
  return await productModel.crear({
    nombre,
    precio: Number(precio),
    stock: Number(stock),
    categoria,
  });
};

export const eliminarProducto = async (id) => {
  const producto = await productModel.eliminar(id);
  if (!producto) {
    throw { status: 404, mensaje: "Producto no encontrado" };
  }
  return producto;
};
