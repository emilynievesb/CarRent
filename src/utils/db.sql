
CREATE DATABASE CarRentDB;
USE CarRentDB;

/*TABLA ROLES*/
CREATE TABLE roles (
    id_rol INT AUTO_INCREMENT NOT NULL,
    nombre_rol VARCHAR(50) NOT NULL,
    CONSTRAINT pk_roles PRIMARY KEY (id_rol)
);

/*TABLA TIPO DOCUMENTO*/
CREATE TABLE tipo_documento(
    id_tipo_doc INT AUTO_INCREMENT NOT NULL,
    nombre_tipo_documento VARCHAR(60) NOT NULL,
    CONSTRAINT pk_tipo_documento PRIMARY KEY (id_tipo_doc)
);

CREATE TABLE nacionalidades(
    id_nacionalidad INT AUTO_INCREMENT NOT NULL,
    nombre_nacionalidad VARCHAR(30) NOT NULL,
    CONSTRAINT pk_nacionalidades PRIMARY KEY (id_nacionalidad)
);

/*TABLA USERS*/
CREATE TABLE users(
    id_user INT AUTO_INCREMENT NOT NULL,
    doc_user INT NOT NULL,
    id_tipo_doc INT NOT NULL,
    nombre_user VARCHAR(60) NOT NULL,
    correo_user VARCHAR(60) NOT NULL,
    direccion_user VARCHAR(60) NOT NULL,
    telefono_user INT(10) NOT NULL,
    id_nacionalidad INT NOT NULL,
    nickname_user VARCHAR(40) NOT NULL,
    contrasena_user VARCHAR(16) NOT NULL,
    id_rol INT NOT NULL,
    CONSTRAINT pk_users PRIMARY KEY (id_user),
    CONSTRAINT fk_UsersRol FOREIGN KEY (id_rol) REFERENCES roles(id_rol),
    CONSTRAINT fk_UsersTipoDocumento FOREIGN KEY (id_tipo_doc) REFERENCES tipo_documento(id_tipo_doc),
    CONSTRAINT fk_UsersNacionalidad FOREIGN KEY (id_nacionalidad) REFERENCES nacionalidades(id_nacionalidad)
);

/*TABLA ESTADO VIGENCIA*/
CREATE TABLE estado_vigencia (
    id_estado INT AUTO_INCREMENT NOT NULL,
    nombre_estado VARCHAR(20) NOT NULL,
    CONSTRAINT pk_estado_vigencia PRIMARY KEY (id_estado)
);

/*TABLA SOAT*/
CREATE TABLE soat(
    id_soat INT AUTO_INCREMENT NOT NULL,
    fecha_inicio_soat DATE NOT NULL,
    fecha_vencimiento_soat DATE NOT NULL,
    id_estado INT NOT NULL,
    CONSTRAINT pk_soat PRIMARY KEY (id_soat),
    CONSTRAINT fk_SoatEstado FOREIGN KEY (id_estado) REFERENCES estado_vigencia(id_estado)
);

/*TABLA SEGURO*/
CREATE TABLE seguro(
    id_seguro INT AUTO_INCREMENT NOT NULL,
    fecha_inicio_seguro DATE NOT NULL,
    fecha_vencimiento_seguro DATE NOT NULL,
    id_estado INT NOT NULL,
    CONSTRAINT pk_seguro PRIMARY KEY (id_seguro),
    CONSTRAINT fk_SeguroEstado FOREIGN KEY (id_estado) REFERENCES estado_vigencia(id_estado)
);

/*TABLA TECNICOMEC*/
CREATE TABLE tecnicomec(
    id_tecnicomec INT AUTO_INCREMENT NOT NULL,
    fecha_inicio_tecnicomec DATE NOT NULL,
    fecha_vencimiento_tecnicomec DATE NOT NULL,
    id_estado INT NOT NULL,
    CONSTRAINT pk_tecnicomec PRIMARY KEY (id_tecnicomec),
    CONSTRAINT fk_TecnicomecEstado FOREIGN KEY (id_estado) REFERENCES estado_vigencia(id_estado)
);

/*TABLA TIPO DE NOVEDAD*/
CREATE TABLE tipo_novedad(
    id_tipo_novedad INT AUTO_INCREMENT NOT NULL,
    nombre_tipo_novedad VARCHAR(80) NOT NULL,
    precio_tipo_novedad INT NOT NULL,
    CONSTRAINT pk_tipo_novedad PRIMARY KEY (id_tipo_novedad)
);

/*TABLA TIPO DE CARRO*/
CREATE TABLE tipo_carro(
    id_tipo_carro INT AUTO_INCREMENT NOT NULL,
    nombre_tipo_carro VARCHAR(60) NOT NULL,
    CONSTRAINT pk_tipo_carro PRIMARY KEY (id_tipo_carro)
);

CREATE TABLE sedes(
    id_sede INT AUTO_INCREMENT NOT NULL,
    ciudad_sede VARCHAR(30) NOT NULL,
    telefono_sede INT(12) NOT NULL,
    direccion_sede VARCHAR(20) NOT NULL,
    CONSTRAINT pk_sedes PRIMARY KEY (id_sede)
);

/*TABLA CARROS*/
CREATE TABLE carros(
    id_carro INT AUTO_INCREMENT NOT NULL,
    marca_carro VARCHAR(20) NOT NULL,
    modelo_carro VARCHAR(20) NOT NULL,
    numero_puertas_carro INT NOT NULL,
    color_carro VARCHAR(10) NOT NULL,
    precio_hora_carro INT NOT NULL,
    placa_carro VARCHAR(8) NOT NULL,
    id_soat INT NOT NULL,
    id_seguro INT NOT NULL,
    id_tecnicomec INT NOT NULL,
    id_tipo_carro INT NOT NULL,
    id_sede INT NOT NULL,
    CONSTRAINT pk_carros PRIMARY KEY (id_carro),
    CONSTRAINT fk_CarrosSoat FOREIGN KEY (id_soat) REFERENCES soat(id_soat),
    CONSTRAINT fk_CarrosSeguro FOREIGN KEY (id_seguro) REFERENCES seguro(id_seguro),
    CONSTRAINT fk_CarrosTecnicomec FOREIGN KEY (id_tecnicomec) REFERENCES tecnicomec(id_tecnicomec),
    CONSTRAINT fk_CarrosSede FOREIGN KEY (id_sede) REFERENCES sedes(id_sede),
    CONSTRAINT fk_CarrosTipoCarro FOREIGN KEY (id_tipo_carro) REFERENCES tipo_carro(id_tipo_carro)
);

/*TABLA HISTORIAL NOVEDADES*/
CREATE TABLE historial_novedades(
    id_historial INT AUTO_INCREMENT NOT NULL,
    acumulado_daños INT,
    CONSTRAINT pk_historial PRIMARY KEY (id_historial)
);

/*TABLA NOVEDADES*/
CREATE TABLE novedades(
    id_novedad INT AUTO_INCREMENT NOT NULL,
    id_tipo_novedad INT NOT NULL,
    descripcion_novedad VARCHAR(95) NOT NULL,
    id_historial INT NOT NULL,
    CONSTRAINT pk_novedades PRIMARY KEY (id_novedad),
    CONSTRAINT fk_NovedadesHistorial FOREIGN KEY (id_historial) REFERENCES historial_novedades(id_historial),
    CONSTRAINT fk_NovedadesTipoNovedad FOREIGN KEY (id_tipo_novedad) REFERENCES tipo_novedad(id_tipo_novedad)
);

/*TABLA REPORT ALQUILER*/
CREATE TABLE reporte_alquiler(
    id_reporte_alquiler INT AUTO_INCREMENT NOT NULL,
    id_user INT NOT NULL,
    id_carro INT NOT NULL,
    fecha_inicio_alquiler DATE NOT NULL,
    fecha_final_alquiler DATE NOT NULL,
    precio_cotizado_alquiler INT NOT NULL,
    monto_fianza INT NOT NULL,
    id_historial_novedades INT NOT NULL,
    CONSTRAINT pk_reporte_alquiler PRIMARY KEY (id_reporte_alquiler),
    CONSTRAINT fk_ReporteUsers FOREIGN KEY (id_user) REFERENCES users(id_user),
    CONSTRAINT fk_ReporteHistorialNovedades FOREIGN KEY (id_historial_novedades) REFERENCES historial_novedades(id_historial),
    CONSTRAINT fk_ReportesCarros FOREIGN KEY (id_carro) REFERENCES carros(id_carro)
);

/*TABLA FACTURA*/
CREATE TABLE factura(
    id_factura INT AUTO_INCREMENT NOT NULL,
    id_reporte_alquiler INT NOT NULL,
    fecha_final_real TIMESTAMP,
    dias_extra INT,
    total_pago_alquiler INT,
    CONSTRAINT pk_factura PRIMARY KEY (id_factura),
    CONSTRAINT fk_FacturaReporte FOREIGN KEY (id_reporte_alquiler) REFERENCES reporte_alquiler(id_reporte_alquiler)
);

/***********************INSERTS*/


/* INSERT TIPOS DE DOCUMENTO */
INSERT INTO tipo_documento (nombre_tipo_documento) VALUES
    ('Cédula de ciudadanía'),
    ('Pasaporte'),
    ('Cédula de extranjería');

/* INSERT NACIONALIDADES */
INSERT INTO nacionalidades (nombre_nacionalidad) VALUES
    ('Colombia'),
    ('Estados Unidos'),
    ('España');

/* INSERT ROLES */
INSERT INTO roles (nombre_rol) VALUES
    ('Cliente'),
    ('Administrador');

/* INSERT SEDES */
INSERT INTO sedes (ciudad_sede, telefono_sede, direccion_sede) VALUES
    ('Bogotá', 1234567890, 'Calle 123 #45-67'),
    ('Medellín', 9876543210, 'Carrera 678 #12-34'),
    ('Cali', 5678901234, 'Avenida 987 #56-78');

/* INSERT ESTADO VIGENCIA */
INSERT INTO estado_vigencia (nombre_estado) VALUES
    ('Vigente'),
    ('Vencido');

/* INSERT SOAT */
INSERT INTO soat (fecha_inicio_soat, fecha_vencimiento_soat, id_estado) VALUES
    ('2023-01-01', '2024-01-01', 1),
    ('2023-02-15', '2024-02-15', 1),
    ('2023-03-20', '2024-03-20', 1),
    ('2023-04-10', '2024-04-10', 1),
    ('2023-05-05', '2024-05-05', 1),
    ('2023-06-12', '2024-06-12', 1);

/* INSERT SEGURO */
INSERT INTO seguro (fecha_inicio_seguro, fecha_vencimiento_seguro, id_estado) VALUES
    ('2023-01-01', '2024-01-01', 1),
    ('2023-02-15', '2024-02-15', 1),
    ('2023-03-20', '2024-03-20', 1),
    ('2023-04-10', '2024-04-10', 1),
    ('2023-05-05', '2024-05-05', 1),
    ('2023-06-12', '2024-06-12', 1);

/* INSERT TECNICOMEC */
INSERT INTO tecnicomec (fecha_inicio_tecnicomec, fecha_vencimiento_tecnicomec, id_estado) VALUES
    ('2023-01-01', '2024-01-01', 1),
    ('2023-02-15', '2024-02-15', 1),
    ('2023-03-20', '2024-03-20', 1),
    ('2023-04-10', '2024-04-10', 1),
    ('2023-05-05', '2024-05-05', 1),
    ('2023-06-12', '2024-06-12', 1);

/* INSERT TIPO DE NOVEDAD */
INSERT INTO tipo_novedad (nombre_tipo_novedad, precio_tipo_novedad) VALUES
    ('Rasguño pequeño', 50000),
    ('Abolladura', 80000),
    ('Rotura de espejo', 100000),
    ('Daño en llanta', 60000),
    ('Rasguño grande', 70000),
    ('Rotura de vidrio', 120000);

/* INSERT HISTORIAL NOVEDADES */
INSERT INTO historial_novedades (acumulado_daños) VALUES
    (0),
    (150000),
    (300000),
    (500000),
    (700000),
    (850000);

/* INSERT TIPO DE CARRO */
INSERT INTO tipo_carro (nombre_tipo_carro) VALUES
    ('Sedán'),
    ('SUV'),
    ('Camioneta'),
    ('Deportivo'),
    ('Compacto'),
    ('Furgoneta');


/* INSERT CARROS */
INSERT INTO carros (marca_carro, modelo_carro, numero_puertas_carro, color_carro, precio_hora_carro, placa_carro, id_soat, id_seguro, id_tecnicomec, id_tipo_carro, id_sede) VALUES
    ('Toyota', 'Corolla', 4, 'Negro', 50000, 'ABC123', 1, 2, 3, 1, 1),
    ('Honda', 'Civic', 4, 'Gris', 45000, 'DEF456', 2, 3, 4, 1, 2),
    ('Chevrolet', 'Spark', 5, 'Blanco', 40000, 'GHI789', 3, 4, 5, 2, 1),
    ('Ford', 'Mustang', 2, 'Rojo', 70000, 'JKL012', 4, 5, 6, 2, 2),
    ('Mazda', 'CX-5', 4, 'Azul', 55000, 'MNO345', 5, 6, 1, 1, 3),
    ('Nissan', 'Sentra', 4, 'Plateado', 48000, 'PQR678', 6, 1, 2, 1, 3);

/* INSERT NOVEDADES */
INSERT INTO novedades (id_tipo_novedad, descripcion_novedad, id_historial) VALUES
    (1, 'Pequeño rasguño en la puerta izquierda.', 2),
    (2, 'Abolladura en la parte trasera del vehículo.', 3),
    (3, 'Espejo lateral izquierdo roto.', 1),
    (4, 'Daño en la llanta delantera derecha.', 4),
    (5, 'Rasguño grande en el capó.', 5),
    (6, 'Vidrio trasero roto.', 6);

/* INSERT USERS */
INSERT INTO users (doc_user, id_tipo_doc, nombre_user, correo_user, direccion_user, telefono_user, id_nacionalidad, nickname_user, contrasena_user, id_rol) VALUES
    (12345678, 1, 'Juan Pérez', 'juan@example.com', 'Calle 123 #45-67', 3001234567, 1, 'juan123', 'contrasena123', 1),
    (98765432, 2, 'Jane Smith', 'jane@example.com', 'Avenue 456 #78-90', 4009876543, 2, 'jane456', 'password456', 1),
    (87654321, 1, 'Carlos González', 'carlos@example.com', 'Carrera 789 #12-34', 2008765432, 1, 'carlos77', 'pass77', 1),
    (54321678, 1, 'Emily Brown', 'emily@example.com', 'Street 345 #67-89', 5005432167, 2, 'emilyB', 'p@ssw0rd', 1),
    (65437890, 3, 'Michael Johnson', 'michael@example.com', 'Main Road 890 #45-67', 7006543789, 2, 'mikeJ', 'qwerty123', 1),
    (78901234, 1, 'Laura Fernández', 'laura@example.com', 'Plaza 567 #12-34', 1007890123, 1, 'laurita', 'abcde567', 1);

/* INSERT ADMINISTRADOR */
INSERT INTO users (doc_user, id_tipo_doc, nombre_user, correo_user, direccion_user, telefono_user, id_nacionalidad, nickname_user, contrasena_user, id_rol) VALUES
    (12340001, 1, 'Admin CarRent', 'admin@example.com', 'Admin Avenue 1', 9999999999, 1, 'admin', 'admin123', 2);

/* INSERT REPORT ALQUILER */
INSERT INTO reporte_alquiler (id_user, id_carro, fecha_inicio_alquiler, fecha_final_alquiler, precio_cotizado_alquiler, monto_fianza, id_historial_novedades) VALUES
    (1, 1, '2023-07-01', '2023-07-08', 350000, 200000, 1),
    (2, 2, '2023-07-05', '2023-07-09', 320000, 180000, 2),
    (3, 3, '2023-07-10', '2023-07-13', 240000, 150000, 3),
    (4, 4, '2023-07-15', '2023-07-21', 420000, 250000, 4),
    (5, 5, '2023-07-18', '2023-07-20', 440000, 270000, 5),
    (6, 6, '2023-07-20', '2023-07-23', 270000, 150000, 6);

/* INSERT FACTURA */
INSERT INTO factura (id_reporte_alquiler, fecha_final_real, dias_extra, total_pago_alquiler) VALUES
    (1, '2023-07-08 12:00:00', 0, 350000),
    (2, '2023-07-09 10:30:00', 1, 330000),
    (3, '2023-07-13 09:15:00', 0, 240000),
    (4, '2023-07-21 14:45:00', 0, 420000),
    (5, '2023-07-20 17:30:00', 0, 440000),
    (6, '2023-07-23 11:00:00', 0, 270000);
