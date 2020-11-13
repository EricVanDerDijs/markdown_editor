# Markdown Editor
-----

## ¿Como correr este proyecto de forma local?

1. Clonar este repositorio
```
    git clone https://github.com/EricVanDerDijs/markdown_editor.git
```
2. Navega a a la carpeta creada
```
    cd markdown_editor
```
3. Instala las dependencias del backend
```
    yarn --cwd ./backend
```
4. Copia en la carpeta raíz del backend (./backend) un archivo de variables de entoro (.env) que contenga lo siguiente
```
    HOST=0.0.0.0
    PORT=1337
    DATABASE_URI={{MI_DATABASE_URI}}
```
5. Inicia el servidor de desarrollo de backend
```
    yarn --cwd ./backend develop
```
6. En una segunda terminal navega a la carpeta raíz del proyecto (markdown_editor) e instala las dependencias de la aplicación web
```
    yarn --cwd ./markdown_frontend_web
```
7. Inicia el servidor de desarrollo de la aplicación web
```
    yarn --cwd ./markdown_frontend_web start
```
8. Navega a **http://localhost:3000/**
9. Podrás encontrar el administrador de backend en **http://localhost:1337/admin/**

Video de la aplicación corriendo:  
[VIDEO](https://drive.google.com/file/d/1DUUGAEcRAPM-3_qw75se_zG_gl_MrECC/view?usp=sharing)

Espero les guste!