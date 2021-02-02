# Proyecto Api Rest Trianafy
Este repositorio contiene un proyecto de una api rest cuya tematica principal es la música.

Para utilizar clona el repositorio y crea un archivo .env con las siguientes variables :
- PORT=3000
- DB_URI=mongodb://localhost/Trianafy
- JWT_SECRET = loquequieras
- BCRYPT_ROUNDS=12 
- JWT_LIFETIME=7d 
- JWT_ALGORITHM=HS256 

Tras hacer esto, esta api tiene las siguientes funcionalidades(pueden ser probadas con programas como postman):
- Registro http://localhost:3000/auth/register 
- Login http://localhost:3000/auth/login
- Obtener canciones GET http://localhost:3000/songs
- Obtener cancion en concreto GET http://localhost:3000/songs/:id
- Añadir Cancion POST http://localhost:3000/songs/:id
- Borrar Cancion DELETE http://localhost:3000/songs/:id
- Editar Cancion PUT http://localhost:3000/songs/:id
- Obtener listas de reproduccion GET http://localhost:3000/list
- Obtener lista GET http://localhost:3000/list/:id
- Nueva Lista POST http://localhost:3000/list
- Editar lista PUT http://localhost:3000/list/:id
- Eliminar lista DELETE http://localhost:3000/list/:id