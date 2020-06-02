# UserWebApp

Despliegue del proyecto [aquí](https://userwebapp-2577a.web.app/).

## Resumen

UserWebApp es una single web application que tras registrarse/autenticarse en la página nos muestra un listado de colaboradores extraídos de la API gratuita [randomuser.me](​https://randomuser.me/documentation#howto). Al seleccionar alguna persona del listado, se muestra el detalle en una ficha descriptiva.

## Firebase

La autenticación fue realizada con Firebase Auth, así como también el despliegue del proyecto.

## Angular

Se utilizó el framework Angular 9, pero se utilizaron algunas herramientas anteriores por encontrar mayor cantidad de documentación. Por dicho motivo se utilizó "@angular/fire": "5.4.2" en lugar de "@angular/fire": "6.0.0".

## Unit tests

Por el momento sólo están disponibles algunas pruebas unitarias en el componente sign-in. Se evaluarán mayores pruebas en próximas iteraciones.

## End-to-end tests

No hay disponibles end-to-end tests.

## Flexbox-Responsive

Se utilizó [Bootswatch sketchy](https://bootswatch.com/sketchy/) para la estética de la aplicación. El diseño se implementó siguiendo el principio Mobile First. Las tarjetas que representan a la información de cada colaborador se acomodan según lo que permite el tamaño de la página. 

## Mockup

Mockup desarrollado en Balsamiq.

![Diseño de la vista para registrarse o autenticarse](https://raw.githubusercontent.com/ClaudiaQuezadaRiquelme/userWebApp/master/src/assets/UserWebAppMockup1.png "Diseño de la vista para registrarse o autenticarse") ![Diseño de la vista donde se encuentran las tarjetas de los usuarios](https://raw.githubusercontent.com/ClaudiaQuezadaRiquelme/userWebApp/master/src/assets/UserWebAppMockup2.png "Diseño de la vista donde se encuentran las tarjetas de los usuarios") ![Diseño de la vista donde se encuentra el detalle del usuario seleccionado](https://raw.githubusercontent.com/ClaudiaQuezadaRiquelme/userWebApp/master/src/assets/UserWebAppMockup3.png "Diseño de la vista donde se encuentra el detalle del usuario seleccionado")

### Flujo de la App a través del Mockup

<img src="https://raw.githubusercontent.com/ClaudiaQuezadaRiquelme/userWebApp/master/src/assets/UserWebAppMockup-video.gif" width="600" height="400" />

## Despliegue de la App en Firebase

Teniendo en cuenta que ya fue creado un proyecto en Firebase debido a que se implementó la autenticación, el paso siguiente es asegurarse que tengamos las herramientas globales para iniciar el despliegue:

`npm install -g firebase-tools`

Ahora es necesario enlazar la cuenta de Firebase con las firebase-tools

`firebase login`

Este comando deberá automáticamente abrir en el navegador una página para seleccionar la cuenta con la que se enlazará la herramienta de la terminal. Ahí se debe seleccionar la misma cuenta con la que está enlazado el proyecto firebase. Cuando esté listo se mostrará el siguiente enlace:

`Success! Logged in as tu-cuenta`

El siguiente paso ahora es subir el proyecto a Firebase Hosting. Debemos posicionar la terminal en la carpeta del proyecto y generar el build de Angular.

`ng build`

Al crearse el build con éxito, se crea una carpeta dist en el proyecto de Angular. El contenido de esa carpeta debemos subirlo a firebase. Para eso, iniciamos la configuración del proyecto con Firebase Tools:

`firebase init`

Al ejecutar dicho comando, se inicia un asistente de configuración. Elegimos Hosting. 

`Which Firebase CLI features do you want to set up for this...
(.) Hosting ...`

Tras presionar enter, debemos elegir el proyecto firebase relacionado con nuestro proyecto angular

`Select a default Firebase project for this directory:
(.) userWebApp...`

En el siguiente paso debemos indicar a firebase tools qué carpeta contiene nuestra aplicación. Debemos indicarle la carpeta dist/nombre-del-proyecto:

`What do you want to use as your public directory? (public) dist/userWebApp`

El siguiente paso está relacionado con las Single Page Applications. Ponemos `y`.

Finalmente Firebase notará que ya existe un archivo index.html y preguntará si quieres que lo sobre escriba. Ponemos `n`. Debemos conservar nuestro index.html

Una vez terminado lo anterior, ejecutamos el siguiente comando para visualizar nuestra aplicación:

`firebase deploy`

El despliegue exitoso nos devuelve la [url](https://userwebapp-2577a.web.app/) con nuestra app.

## Organización de tareas

Se utilizó [Trello](https://trello.com/b/dtDTe5zj/userwebapp) para el manejo de tareas.
