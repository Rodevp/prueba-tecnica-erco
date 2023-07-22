# Prueba tecnica ERCO

Prueba tecnica erco energia para fullStack jr, puntos a faltar
buscador - guardar proyecto (frontend).
todos los pasos han sido completados.

## Stack de tecnolgias 

**Client:** React, Typescrip, TailwindCSS, apollo client, graphql

**Server:** Node js, apollo sever, graphql

**BD** Supabase


## Acciones del proyecto

FRONTEND

* listar proyecto
* editar proycto
* eliminar proyecto
* ver detalle del proyecto

BACKEND

* listar proyectos
* Editar proyectos
* guardar proyectos
* eliminar proyectos
* leer csv para generar la data en la base de datos

## Instalacion Front
1. ir a la carpeta de frontend
2. acceder a la carpeta **ercodash**
3. instalar dependencies 
4. correr proyecto
```bash
  cd frontend
  cd ercodash
  npm i 
  npm run dev
```
## Instalacion Backed
1. ir a la carpeta de backend
2. acceder a la carpeta **dbScript** 
3. ejecutar node script_database.js 
4. salir de carpeta e instalar dependencies
5. configurar variabales de entorno en supabase
6. correr proyecto
```bash
  cd backend
  cd dbScript
  node script_database.js

  //fuera de dbScript
  npm i 
  npm run dev
```