# Instalar Webpack

Para ejecutar el proyecto se debe tener instalado `nodejs` como requisito

- Para ejecutar el proyecto debemos primero comprobar si esta instalado nodejs para ello colocamos en la consola

  ```bash
  # Desde la consola
  > npm -v # o bien
  > node -v
  ```

- Para instalar las depencias desde la consola colocamos

  ```bash
  # Desde la consola
  > npm install | npm i # para instalar las depencias de nodejs
  > npm run dev # para ejecutar tailwindcss en modo watch
  ```

Dependencias webpack

```bash
> webpack webpack-cli webpack-dev-server
> @babel/core @babel/preset-env babel-loader
> html-webpack-plugin mini-css-extract-plugin
> postcss-loader css-loader style-loader
> node-sass sass-loader
> style-loader css-loader
> file-loader url-loader
```
