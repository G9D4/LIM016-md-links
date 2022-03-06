# Markdown Links

## Índice

* [1. Introducción](#1-introducción)
* [2. Instalación](#2-instalación)
* [3. Guía de uso](#3-guía-de-uso)
* [4. Ejemplos de uso](#4-ejemplos-de-uso)
* [5. Diagrama de flujo](#5-diagrama-de-flujo)
* [6. Dependencias](#6-dependencias)

***

## 1. Introducción

Md-links es una herramienta para línea de comando (**CLI tool**), que permite obtener los links de archivos *markdown*, revisar si son funcionales o si se encuentran rotos y obtener estadísticas sobre el conjunto de links, como el total de links, cuántos estan rotos y cuántos son únicos.

Para esto necesitaremos una ruta, la cual puede ser relativa o absoluta, esta ruta puede pertenecer a un archivo o una carpeta.  Si se ingresa una carpeta con subcarpetas, la herramienta iniciará una búsqueda *recursiva* pasando por todas las subcarpetas.

Esta herramienta ha sido desarrollada con Javascript, usando Node.js y diversas dependencias para manejar las peticiones HTTP y mejorar la de interfaz de usuario.


## 2. Instalación

Para instalar la herramienta debemos recordar instalar de forma global usando --global o -g en el comando.  Podemos utilizar dos comandos, el que pertenece a la versión de este repositorio de GitHub o el de la publicación de npm.

`npm install --global G9D4/LIM016-md-links`

`npm install -g g9d4-md-links`


## 3. Guía de uso

3.	Una vez instalada, podremos invocar a través de la terminal usando el comando la siguiente sintáxis:

`md-links <ruta> [opciones]`

Md-links puede ser invocada solo con la ruta, devolviendo los links encontrados, cada uno con el título dado al link y su ruta absoluta.  Si nuestra ruta no conduce a un archivo .md obtendremos un mensaje de error.  

También puede ser invocada usando sus dos opciones **validate** y **stats**, pueden usarse individualmente o al mismo tiempo.  

**Validate (--validate o -v)**: además de los valores básicos, devolverá el código de respuesta HTTP y un mensaje OK o FAIL dependiendo de si el código de respuesta es satisfactorio.

**Stats (--stats o -s)**: devolverá dos resultados de la búsqueda, el total de links encontrados y cuántos son únicos.


## 4. Ejemplos de uso

#### **md-links ruta**
![1](https://github.com/G9D4/LIM016-md-links/blob/main/imgs/1.PNG)

Obtendremos la información básica, una lista de los links (href), cada uno con su título (text) y ruta (file)


#### **md-links ruta --validate** o **md-links ruta -v**
![2](https://github.com/G9D4/LIM016-md-links/blob/main/imgs/2.PNG)

Obtendremos además de la información básica, el código de estado HTTP (status) y el mensaje de OK o FAIL (ok), dependiendo del código obtenido.


#### **md-links ruta --stats** o **md-links ruta -s**
![3](https://github.com/G9D4/LIM016-md-links/blob/main/imgs/3.PNG)

Obtendremos el total de links (total) y la cantidad de links únicos (unique).


#### **md-links ruta --validate --stats** o **md-links ruta -v -s**
![4](https://github.com/G9D4/LIM016-md-links/blob/main/imgs/4.PNG)

Obtendremos todos los resultados y la cantidad de links "rotos" (broken).


#### **md-links --help** o **md-links -h**
![5](https://github.com/G9D4/LIM016-md-links/blob/main/imgs/5.PNG)

Obtendremos la sintaxis para usar la herramienta, la lista de opciones y un ejemplo de uso



### Casos de error

#### **md-links**

![e1](https://github.com/G9D4/LIM016-md-links/blob/main/imgs/e1.PNG)

Ingresar la ruta es necasario para el funcionamiento de la herramienta


#### **md-links -y**

![e2](https://github.com/G9D4/LIM016-md-links/blob/main/imgs/e2.PNG)

Al utilizar una opción no predeterminada, nos ofrece la opción de pedir ayuda con --help


#### **md-links carpeta/ruta-no-existente**
![e3](https://github.com/G9D4/LIM016-md-links/blob/main/imgs/e3.PNG)

Si la ruta no existe


#### **md-links carpeta/ruta-sin-archivos-md**
![e4](https://github.com/G9D4/LIM016-md-links/blob/main/imgs/e4.PNG)

Si la ruta no contiene archivos md


## 5. Diagrama de flujo

![Diagrama](https://github.com/G9D4/LIM016-md-links/blob/main/diagramas/diagramaAPI.drawio.pdf)

## 6. Entregables

"axios": "^0.25.0"

"yargs": "^17.3.1"

"chalk": "^2.4.1"

