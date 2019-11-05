## PASOS PARA SUBIR APLICACIÓN NODE CON ES6 A HEROKU

1. Cambios en la aplicación:
  - Comprobar que el fichero `.env` contiene todas las variables que vas a utilizar; MONGODB_URI(Apuntando a MONGO ATLAS), SECRET_TOKEN, PORT...
  - Cambiar las dependencias de las variables por su equivalente de `process.env`
  - Eliminar de la clase `MongoManager` la declaración de la variable privada `#config`. Y sustituir la declaración del constructor y las llamadas por `this._config`. Sustituir el parámetro que recibe la clase al ser instanciada (export default new MongoManager(process.env.MONGODB_URI)).

2. Incluir todos los archivos de la aplicación (archivos __`.mjs`__), con sus respectivas carpetas, dentro de un directorio __`src`__. El resto de ficheros, incluida la carpeta `node_modules`, quedan fuera del directorio `src`.

3. Añadimos a la raiz del proyecto (fuera de la carpeta src) un fichero con el nombre de __`.balbelrc.js`__ con el siguiente contenido:

```javascript

module.exports = { 
    presets: [
      ['@babel/preset-env', { targets: ['node 6'] }],
    ],
    plugins: [
      ['@babel/plugin-transform-classes', { loose: true }],
      ['@babel/plugin-transform-destructuring', { loose: true }],
      ['@babel/plugin-transform-spread', { loose: true }] ,
      ['@babel/plugin-syntax-import-meta'],
      ["@babel/plugin-transform-runtime"] 
    ],
    env: { 
     
      mjs: {
        presets: [
          ['@babel/preset-env', { modules: 'commonjs' }],
        ], 
      },
    },
  };
  
  ```
  
  4. Instalamos los siguientes package como dependencias de desarrollo: `npm install --save-dev`
  
    - @babel/cli,
    - @babel/core,
    - @babel/node,
    - @babel/preset-env,
    - @babel/runtime,
    - @babel/plugin-transform-runtime
  
  5. Añadimos las siguientes líneas al fichero __package.json__, dentro del apartado __"scripts"__:
   
   ```json
    "build": "npm run build:mjs",
    "build:js": "babel src",
    "build:mjs": "npm run build:js -- --env-name mjs --out-dir api",
  
  ```
  
  6. Lanzamos la compilación desde el terminal con: `npm run build`
  
  7. Sobre el directorio generado (__`api`__) buscamos y sustituimos las extensiones `.mjs` por `.js`
  
  8. Comprobamos que todo funciona corriendo la aplicación con el comando __`heroku local`__
  
   

  
  
