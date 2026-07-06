import db from "../config/firebase.js";

const coleccion = "productos";

export const obtenerTodos = async () => {
  const snapshot = await db.collection(coleccion).get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const obtenerPorId = async (id) => {
  const doc = await db.collection(coleccion).doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() };
};

export const crear = async (datos) => {
  const ref = await db.collection(coleccion).add(datos);
  const doc = await ref.get();
  return { id: doc.id, ...doc.data() };
};

export const eliminar = async (id) => {
  const doc = await db.collection(coleccion).doc(id).get();
  if (!doc.exists) return null;
  await db.collection(coleccion).doc(id).delete();
  return { id: doc.id, ...doc.data() };
};
