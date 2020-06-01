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

![Diseño de la vista para registrarse o autenticarse](https://raw.githubusercontent.com/ClaudiaQuezadaRiquelme/userWebApp/master/src/assets/UserWebAppMockup1.png "Diseño de la vista para registrarse o autenticarse") ![Diseño de la vista donde se encuentran las tarjetas de los usuarios](https://raw.githubusercontent.com/ClaudiaQuezadaRiquelme/userWebApp/master/src/assets/UserWebAppMockup2.png "Diseño de la vista donde se encuentran las tarjetas de los usuarios") ![Diseño de la vista donde se encuentra el detalle del usuario seleccionado](https://raw.githubusercontent.com/ClaudiaQuezadaRiquelme/userWebApp/master/src/assets/UserWebAppMockup3.png "Diseño de la vista donde se encuentra el detalle del usuario seleccionado")
