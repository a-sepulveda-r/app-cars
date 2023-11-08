# Proyecto de Rent a Car y Base de Datos SQL Server

Este proyecto consta de dos partes: un sistema web de Rent a Car y una base de datos en SQL Server. A continuación, se proporciona una breve descripción de ambas partes.

## Sistema de Rent a Car

### Descripción

El sistema de Rent a Car es una aplicación web desarrollada en React y estilada con Styled Components. Permite a la empresa registrar vehículos y listar los 10 últimos registros en una tabla. Incluye un formulario con campos para ingresar datos de vehículos.

### Características

- Formulario de ingreso de datos.
- Validación de información.
- Almacenamiento local (Local Storage).
- Versión móvil con solo el formulario.
- [Repositorio de GitHub](https://github.com/a-sepulveda-r/crudapp-autos) para el código fuente.

### Ejecución Local

Para ejecutar el proyecto de forma local, sigue estos pasos:

1. Clona el repositorio desde GitHub utilizando el siguiente enlace: [https://github.com/a-sepulveda-r/crudapp-autos.git](https://github.com/a-sepulveda-r/crudapp-autos.git).

   ```shell
   git clone https://github.com/a-sepulveda-r/crudapp-autos.git

   ```

2. Abre una terminal en el directorio del proyecto clonado.

3. Ejecuta el comando `npm install` para instalar las dependencias necesarias.

   ```shell
   npm install

   ```

4. Luego, ejecuta `npm run dev` para correr el proyecto de forma local.

   ```shell
   npm run dev

   ```

### Despliegue

Puedes ver el despliegue del proyecto en el siguiente enlace también: [https://a-sepulveda-r.github.io/crudapp-autos/](https://a-sepulveda-r.github.io/crudapp-autos/).

## Base de Datos SQL Server

### Descripción

La base de datos en SQL Server se utiliza para almacenar información relacionada con la empresa de Rent a Car. Incluye tablas para vendedores, marcas de autos, modelos de autos y solicitudes. Se han generado campos y registros de prueba para demostración.

### Procedimientos Almacenados

1. `Obtener las 3 marcas más solicitadas`: Devuelve las tres marcas más solicitadas y la cantidad de solicitudes de cada una, ordenadas descendentemente.

2. `Obtener solicitudes del mes actual`: Recupera las solicitudes del mes en curso.

3. `Obtener el vendedor que menos solicitudes haya generado en los últimos 30 días`: Obtiene el vendedor que ha generado menos solicitudes en los últimos 30 días.

4. `Obtener modelos que no tengan solicitudes`: Devuelve los modelos que no tienen solicitudes asociadas.

5. `Obtener 3 meses con más dinero en ventas`: Devuelve los tres meses con mayores ingresos en ventas, con formato (mes, año - monto).

### Repositorio de GitHub

El script SQL completo, incluyendo la estructura de la base de datos y los procedimientos almacenados, se encuentra en el [repositorio de GitHub](https://github.com/a-sepulveda-r/crudapp-autos) en el archivo `newEntries.sql`.
