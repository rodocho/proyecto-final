# API REST de Productos

Proyecto final API para administrar productos con Node.js, Express, Firebase Firestore y autenticacion JWT.

## Tecnologias

- Node.js
- Express
- Firebase Firestore
- JSON Web Token
- dotenv, cors, body-parser

## Instalacion

```bash
git clone https://github.com/rodocho/proyecto-final.git
cd proyecto-final
npm install
```

Crear un archivo `.env` en la raiz del proyecto (podes guiarte con `.env.example`):

```env
PORT=3000
JWT_SECRET=tu_clave_secreta
FIREBASE_PROJECT_ID=entrega-final-41c82
FIREBASE_CLIENT_EMAIL=tu_email_de_firebase
FIREBASE_PRIVATE_KEY="tu_clave_privada"
```

Para obtener las credenciales de Firebase: Configuracion del proyecto > Cuentas de servicio > Generar nueva clave privada.

Iniciar el servidor:

```bash
npm run start
```

El servidor corre en `http://localhost:3000`

## Estructura del proyecto

```
config/         configuracion de Firebase
controllers/    manejo de peticiones HTTP
middlewares/    autenticacion y errores
models/         conexion con Firestore
routes/         endpoints de la API
services/       logica de negocio
index.js        punto de entrada
```

## Autenticacion

Primero hay que hacer login para obtener un token:

```
POST /auth/login
```

Body:

```json
{
  "username": "admin",
  "password": "1234"
}
```

La respuesta devuelve un token. Para las rutas protegidas hay que enviarlo en el header:

```
Authorization: Bearer <token>
```

## Endpoints

### Obtener todos los productos

```
GET /api/products
```

### Obtener un producto por ID

```
GET /api/products/:id
```

### Crear un producto (requiere token)

```
POST /api/products/create
```

Body:

```json
{
  "nombre": "Mouse Gamer",
  "precio": 25000,
  "stock": 30,
  "categoria": "Perifericos"
}
```

### Eliminar un producto (requiere token)

```
DELETE /api/products/:id
```

## Codigos de respuesta

| Codigo | Descripcion |
|--------|-------------|
| 200 | OK |
| 201 | Producto creado |
| 400 | Datos invalidos |
| 401 | No autenticado |
| 403 | Token invalido |
| 404 | No encontrado |
| 500 | Error del servidor |
