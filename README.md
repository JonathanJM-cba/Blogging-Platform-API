# 📘 API RESTful - Plataforma de Blogs Personales

Esta API RESTfull desarrollada con **Node.js**, **Express**, **Sequelize** y **PostgreSQL** permite gestionar publicaciones de un blog personal. Soporta operaciones CRUD completas y filtrado por término de búsqueda.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- Sequelize
- PostgreSQL

---

## ⚙️ Instalación

1. Clonar el repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd nombre-del-proyecto
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Crear archivo `.env` con la siguiente estructura:

   ```env
   PORT=puerto_servidor
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=tu_nombre_base_datos
   DB_USER=tu_usuario_base_datos
   DB_PASSWORD=tu_contraseña_base_datos
   ```

4. Iniciar servidor en modo desarrollo:
   ```bash
   npm run dev
   ```

---

## 📌 Endpoints

### 🔹 Crear publicación

- **Método:** `POST`
- **Ruta:** `/posts`
- **Descripción:** Crea una nueva publicación.
- **Body esperado:**
  ```json
  {
    "title": "Título del post",
    "content": "Contenido del post",
    "category": "Tecnología",
    "tags": ["JavaScript", "Node.js"]
  }
  ```

---

### 🔹 Obtener todas las publicaciones

- **Método:** `GET`
- **Ruta:** `/posts`
- **Descripción:** Obtiene todas las publicaciones.

---

### 🔹 Obtener publicación por término

- **Método:** `GET`
- **Ruta:** `/posts/filter`
- **Descripción:** Obtiene las publicaciones que contengan lo descripto en la query "term" ya sea por el título o contenido o categoría.
- **Parámetros opcionales:**
  - `term`: Término de búsqueda para filtrar por título, contenido o categoría.
- **Ejemplo:** `/posts/filter?term=node`

---

### 🔹 Obtener publicación por ID

- **Método:** `GET`
- **Ruta:** `/posts/:id`
- **Descripción:** Obtiene una publicación específica por su ID.

---

### 🔹 Actualizar publicación

- **Método:** `PUT`
- **Ruta:** `/posts/:id`
- **Descripción:** Actualiza una publicación existente.
- **Body esperado:**
  ```json
  {
    "title": "Nuevo título",
    "content": "Contenido actualizado",
    "category": "Actualizada",
    "tags": ["Backend", "Node.js"]
  }
  ```

---

### 🔹 Eliminar publicación

- **Método:** `DELETE`
- **Ruta:** `/posts/:id`
- **Descripción:** Elimina una publicación por su ID.

---

## 🛡️ Validaciones

- Todos los campos (`title`, `content`, `category`, `tags`) son obligatorios.
- El campo `tags` debe ser un array de strings.
- Se utilizan validaciones con `express-validator`.

---

## 🧪 Comandos útiles

| Comando                        | Descripción                           |
| ------------------------------ | ------------------------------------- |
| `npm run dev`                  | Inicia el servidor en modo desarrollo |
| `npm start`                    | Inicia el servidor en producción      |
| `npx sequelize-cli db:migrate` | Ejecuta las migraciones de Sequelize  |

---

## 📌 Estado del proyecto

- [x] CRUD de publicaciones
- [x] Filtro por término (`term`)
- [x] Validaciones
- [x] Manejo de errores
- [ ] Autenticación de usuarios
- [ ] Paginación

---

## 📚 Referencias

Este proyecto se basó en el desafío propuesto por [roadmap.sh](https://roadmap.sh) para proyectos backend:
🔗 https://roadmap.sh/projects/blogging-platform-api

---

## 👨‍💻 Autor

- **Nombre:** Jonathan Muñoz
- **Correo:** [jonathan20cba@gmail.com]
