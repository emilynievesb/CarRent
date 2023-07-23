# CarRent

CarRent es un proyecto que tiene como objetivo desarrollar un sistema de gestión de alquiler de carros, proporcionando una plataforma eficiente y confiable para reservar vehículos para fechas específicas. El proyecto también busca facilitar el seguimiento de novedades relacionadas con los carros alquilados, como accidentes, daños o problemas mecánicos. A través de una base de datos sólida y funcionalidades especializadas, CarRent busca mejorar la experiencia de alquiler de carros y brindar un servicio de calidad a sus usuarios.

## Objetivo general:

Desarrollar un sistema de gestión de alquiler de carros que permita a los usuarios reservar vehículos para fechas específicas y brinde un seguimiento eficiente de las novedades ocurridas durante el período de alquiler.

## Objetivos específicos:

- Diseñar e implementar una base de datos relacional que almacene información sobre los carros disponibles, sus características, disponibilidad y estado.
- Desarrollar un sistema de reservas que permita a los usuarios seleccionar un carro disponible para una fecha y registrar los detalles de la reserva en la base de datos.
- Crear un mecanismo para registrar y rastrear las novedades relacionadas con los carros alquilados, como pinchazos de llantas, accidentes, daños en la carrocería, problemas mecánicos, etc.
- Implementar funcionalidades que permitan a los usuarios generar informes sobre las novedades ocurridas durante el período de alquiler, con detalles específicos de cada incidente.

## Estructura base de datos

Esta sería la estructura que tendría la base de datos para el proyecto.

![Diagrama de entidad relación](./img/diagrama.png)

## Requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu máquina:

- Node.js: https://nodejs.org
- MySQL: https://www.mysql.com

## Configuración

1.  Clona este repositorio en tu máquina local.
1.  Abre una terminal en la carpeta raíz del proyecto.
1.  Ejecuta el siguiente comando para instalar las dependencias necesarias:

        npm install

1.  Crea un archivo .env en la carpeta raíz del proyecto y agrega las siguientes variables de entorno:

        MY_CONFIG={"host":"localhost", "user":"root","database": NOMBRE_DB,"password":"", "port":3306}
        MY_SERVER={"hostname":"127.20.20.1", "port":5000}

    ###### Asegurate de cambiar NOMBRE_DB y demás configuraciones según tus necesidades

## Base de datos

Para obtener la base de datos, ejecuta el archivo `db.sql` que esta ubicado en la carpeta utils dentro de la carpeta src.

## Ejecución

Para ejecutar correctamente el servidor debes asegurarte de tener `nodemon`, ya teniendo esta dependencia, solo escribes en la consola:

        npm run dev

## Situación hipotética

En esta situación hipotética pondremos un ejemplo en todo el proceso de alquiler de un carro

###### RECUERDA QUE LA IP DEL SERVIDOR SERÁ LA CORRESPONDIENTE EN EL ARCHIVO `.env` descrita en el `hostname`. Los valores de cada dato acontinuación son netamente ejemplos de lo que podrían contener los datos de entrada.

1.  Procederemos a la creación del respectivo cliente

    - URL: `http://127.20.30.1:5005/api/post/agregarUsuario`
    - Método: `POST`
    - Datos de entrada (body):
      ```
        {
            "Documento": 1000000,
            "IdTipoDocumento": 1,
            "Nombre": "Emily Nieves",
            "Correo": "emily@hotmail.com",
            "Direccion": "Calle 100",
            "Telefono": 31111111,
            "IdNacionalidad": 2,
            "Usuario": "emilynievesb",
            "Contraseña": "emilg",
            "IdRol": 1
        }
      ```
    - Datos de salida:

            "Usuario agregado correctamente"

###### Nuestro cliente quiere alquilar uno de nuestros vehículos, usaremos el siguiente endpoint para generar el reporte de alquiler

1.  Agregar reporte de alquiler

    - URL: `http://127.20.30.1:5005/api/post/agregarReporte`
    - Método: `POST`
    - Datos de entrada (body):

      ```
        {
            "IdUsuario": 2,
            "IdCarro": 2,
            "FechaInicio": "2023-10-02",
            "FechaDevolucion": "2023-10-05"
        }
      ```

    - Datos de salida:

            "Reporte de alquiler creado correctamente, con historial de novedades 39, para que pueda reportar cualquier novedad llegado el caso"

    - Este endpoint internamente está validando la disponibilidad del carro, si está disponible entonces calcula el precio de la cotización en base al cálculo del número de horas entre fecha y fecha, el valor de la hora que tiene el carro seleccionado y así mismo se saca el valor de la fianza tomando en cuenta el valor de la cotización. Y se crea de manera automática el historial donde iran las novedades necesarias.

    - Si llegado el caso, escogen un carro que no esté disponible en esa fecha la api responderá:

            "El carro no está disponible para esa fecha, por favor seleccione otro"

###### Si llegado el caso, el cliente se llegara a enfrentar con una situación en la que se presente un daño en el vehículo es necesario que se haga su debido registro con el siguiente endpoint

2.  Agregar novedad

    - URL: `http://127.20.30.1:5005/api/post/agregarNovedad`
    - Método: `POST`
    - Datos de entrada (body):

      ```
        {
            "IdTipoNovedad": 4,
            "Descripcion":"Se estrelló el carro en vía nacional",
            "IdHistorial":1
        }
      ```

    - Datos de salida:

            "Novedad creada correctamente, se agregaron $60,000 al recargo"

    - Este endpoint internamente está haciendo un autosumado al acumulado de daños. Es decir, cada vez que se agrega una nueva novedad, el acumulado de daños se va a autoincrementando, esto es posible gracias a una función actualizadora en el historial de novedades.

###### Después del uso del vehículo, se genera la factura de cobro con el siguiente endpoint

3.  Agregar factura

    - URL: `http://127.20.30.1:5005/api/post/agregarFactura`
    - Método: `POST`
    - Datos de entrada (body):

      ```
        {
            "IdReporte":3,
            "FechaEntregaCarro":"2023-10-20"
        }
      ```

    - Datos de salida:

            "Factura creada correctamente por valor $1,154,166"

    - Este endpoint internamente valida si ya existe una factura previa de este reporte, esto con el fin de evitar doble facturación. Además también, calcula los días extras que pueden ser posibles al entregar el vehículo posterior a la fecha inicialmente pactada, revisa la fianza entregada, el valor de los daños registrados y en base a todo esto, llega a un precio final creando así la factura.

    - Llegado el caso de que la factura ya exista, la api responderá:

            "Ya existe una factura para este alquiler"

## Endpoints de agregado de datos atómicos

Si llegado el caso los datos iniciales agregados en la base de datos, no son suficientes, podrás agregar más opciones con los siguientes endpoints:

###### RECUERDA QUE LA IP DEL SERVIDOR SERÁ LA CORRESPONDIENTE EN EL ARCHIVO `.env` descrita en el `hostname`. Los valores de cada dato acontinuación son netamente ejemplos de lo que podrían contener los datos de entrada.

1.  Agregar carros

    - URL: `http://127.20.30.1:5005/api/post/agregarCarro`
    - Método: `POST`
    - Datos de entrada (body):
      ```
        {
            "Marca":"BMW",
            "Modelo":"X3",
            "NumeroPuertas":5,
            "Color":"Blanco perla",
            "Precioxhora":70000,
            "Placa":"ABC456",
            "IdSoat":2,
            "IdSeguro":3,
            "IdTecnicomecanica":4,
            "IdTipoCarro":2,
            "IdSede":3
        }
      ```
    - Datos de salida:

            "Carro agregado con exito"

1.  Agregar roles

    - URL: `http://127.20.30.1:5005/api/post/agregarRol`
    - Método: `POST`
    - Datos de entrada (body):
      ```
        {
            "Rol":"Empleado"
        }
      ```
    - Datos de salida:

            "Rol agregado correctamente"

1.  Agregar tipo de documento

    - URL: `http://127.20.30.1:5005/api/post/agregarTipoDocumento`
    - Método: `POST`
    - Datos de entrada (body):

      ```
        {
            "TipoDocumento":"Licencia de conducción"
        }
      ```

    - Datos de salida:

            "Tipo de documento agregado correctamente"

1.  Agregar nacionalidad

    - URL: `http://127.20.30.1:5005/api/post/agregarNacionalidad`
    - Método: `POST`
    - Datos de entrada (body):
      ```
        {
            "Nacionalidad":"Cubana"
        }
      ```
    - Datos de salida:

            "Nacionalidad agregada correctamente"

1.  Agregar estado de vigencia

    - URL: `http://127.20.30.1:5005/api/post/agregarEstadoVigencia`
    - Método: `POST`
    - Datos de entrada (body):
      ```
        {
            "EstadoVigencia":"Pronto a vencer"
        }
      ```
    - Datos de salida:

            "Estado agregado correctamente"

1.  Agregar soat

    - URL: `http://127.20.30.1:5005/api/post/agregarSoat`
    - Método: `POST`
    - Datos de entrada (body):

      ```
        {
            "FechaInicio": "2023-10-01",
            "FechaVencimiento": "2023-11-01",
            "IdEstado": 1
        }
      ```

    - Datos de salida:

            "Soat agregado correctamente"

1.  Agregar seguro

    - URL: `http://127.20.30.1:5005/api/post/agregarSeguro`
    - Método: `POST`
    - Datos de entrada (body):

      ```
        {
            "FechaInicio": "2023-10-01",
            "FechaVencimiento": "2023-11-01",
            "IdEstado": 1
        }
      ```

    - Datos de salida:

            "Seguro creado correctamente"

1.  Agregar tecnicomecanica

    - URL: `http://127.20.30.1:5005/api/post/agregarTecnicomec`
    - Método: `POST`
    - Datos de entrada (body):

      ```
        {
            "FechaInicio": "2023-10-01",
            "FechaVencimiento": "2023-11-01",
            "IdEstado": 1
        }
      ```

    - Datos de salida:

            "Tecnicomecanica creada correctamente"

1.  Agregar tipo de carro

    - URL: `http://127.20.30.1:5005/api/post/agregarTipoCarro`
    - Método: `POST`
    - Datos de entrada (body):

      ```
        {
            "Nombre": "Deportivo"
        }
      ```

    - Datos de salida:

            "Tipo de carro creado correctamente"

1.  Agregar tipo de novedad

    - URL: `http://127.20.30.1:5005/api/post/agregarTipoNovedad`
    - Método: `POST`
    - Datos de entrada (body):

      ```
        {
            "Nombre": "Puerta rayada",
            "Precio": 73000
        }
      ```

    - Datos de salida:

            "Tipo de novedad creada correctamente"

1.  Agregar sede

    - URL: `http://127.20.30.1:5005/api/post/agregarSede`
    - Método: `POST`
    - Datos de entrada (body):

      ```
        {
            "Ciudad": "Cali",
            "Telefono":602631025,
            "Dirección":"Calle 71 No. 32-22"
        }
      ```

    - Datos de salida:

            "Sede creada correctamente"
