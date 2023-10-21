# SONGTIFY

Bienvenido a la API de permite agregar canciones a una lista. Permite al usuario crear y gestionar la lista de canciones utilizando Express y MongoDB.

## Requisitos Previos

Para ejecutar el proyecto, clona el repositorio e instala los modulos con el siguiente comando:
```
npm install
```

Es importante crear tu propio archivo config.env y agregues las variables PORT y MONGO_URI, especificando su valor.

El proyecto se ejecuta de la siguiente manera: 
```
npm start
```

## Rutas
* GET /api/songs: Obtiene la lista de canciones.
* POST /api/songs: Crea una nueva canción.
* GET /api/songs/:id: Obtiene una canción por ID.
* PUT /api/songs/:id: Actualiza una canción por ID.
* DELETE /api/songs/:id: Elimina una canción por ID.

Puedes utilizar herramientas como Postman para interactuar con la API.