
DROP DATABASE CarRentDB;
CREATE DATABASE CarRentDB;
USE CarRentDB;

/*TABLA ROLES*/
CREATE TABLE roles (
    id_rol INT AUTO_INCREMENT NOT NULL,
    nombre_rol VARCHAR(50) NOT NULL,
    CONSTRAINT pk_roles PRIMARY KEY (id_rol)
);

/*TABLA USERS*/
CREATE TABLE users(
    id_user INT AUTO_INCREMENT NOT NULL,
    nombre_user VARCHAR(60) NOT NULL,
    nickname_user VARCHAR(40) NOT NULL,
    contrasena_user VARCHAR(16) NOT NULL,
    id_rol INT NOT NULL,
    CONSTRAINT pk_users PRIMARY KEY (id_user),
    CONSTRAINT fk_UsersRol FOREIGN KEY (id_rol) REFERENCES roles(id_rol)
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
    CONSTRAINT pk_tipo_novedad PRIMARY KEY (id_tipo_novedad)
);

/*TABLA TIPO DE CARRO*/
CREATE TABLE tipo_carro(
    id_tipo_carro INT AUTO_INCREMENT NOT NULL,
    nombre_tipo_carro VARCHAR(60) NOT NULL,
    CONSTRAINT pk_tipo_carro PRIMARY KEY (id_tipo_carro)
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
    CONSTRAINT pk_carros PRIMARY KEY (id_carro),
    CONSTRAINT fk_CarrosSoat FOREIGN KEY (id_soat) REFERENCES soat(id_soat),
    CONSTRAINT fk_CarrosSeguro FOREIGN KEY (id_seguro) REFERENCES seguro(id_seguro),
    CONSTRAINT fk_CarrosTecnicomec FOREIGN KEY (id_tecnicomec) REFERENCES tecnicomec(id_tecnicomec),
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

/* TABLA ROLES */
INSERT INTO roles (nombre_rol) VALUES
    ('Administrador'),
    ('Usuario');

/* TABLA USERS */
INSERT INTO users (nombre_user, nickname_user, contrasena_user, id_rol) VALUES
    ('Juan Pérez', 'juan123', 'contraseña123', 1),
    ('María López', 'marialo', 'pass456', 2);

/* TABLA ESTADO VIGENCIA */
INSERT INTO estado_vigencia (nombre_estado) VALUES
    ('Vigente'),
    ('Vencido');

/* TABLA SOAT */
INSERT INTO soat (fecha_inicio_soat, fecha_vencimiento_soat, id_estado) VALUES
    ('2023-01-01', '2024-01-01', 1),
    ('2022-06-15', '2023-06-15', 2);

/* TABLA SEGURO */
INSERT INTO seguro (fecha_inicio_seguro, fecha_vencimiento_seguro, id_estado) VALUES
    ('2023-01-01', '2024-01-01', 1),
    ('2022-06-15', '2023-06-15', 2);

/* TABLA TECNICOMEC */
INSERT INTO tecnicomec (fecha_inicio_tecnicomec, fecha_vencimiento_tecnicomec, id_estado) VALUES
    ('2023-01-01', '2024-01-01', 1),
    ('2022-06-15', '2023-06-15', 2);

/* TABLA TIPO DE NOVEDAD */
INSERT INTO tipo_novedad (nombre_tipo_novedad) VALUES
    ('Daño exterior'),
    ('Daño interior'),
    ('Problema mecánico');

/* TABLA TIPO DE CARRO */
INSERT INTO tipo_carro (nombre_tipo_carro) VALUES
    ('Sedán'),
    ('SUV'),
    ('Camioneta');

/* TABLA CARROS */
INSERT INTO carros (marca_carro, modelo_carro, numero_puertas_carro, color_carro, precio_hora_carro, placa_carro, id_soat, id_seguro, id_tecnicomec, id_tipo_carro) VALUES
    ('Toyota', 'Corolla', 4, 'Rojo', 100, 'ABC123', 1, 1, 1, 1),
    ('Honda', 'CR-V', 4, 'Azul', 120, 'DEF456', 2, 2, 2, 2);

/* TABLA HISTORIAL NOVEDADES */
INSERT INTO historial_novedades (acumulado_daños) VALUES
    (500),
    (1000);

/* TABLA NOVEDADES */
INSERT INTO novedades (id_tipo_novedad, descripcion_novedad, id_historial) VALUES
    (1, 'Rasguño en la puerta izquierda', 1),
    (2, 'Tapicería manchada', 1),
    (3, 'Problema en la transmisión', 2);

/* TABLA REPORT ALQUILER */
INSERT INTO reporte_alquiler (id_user, id_carro, fecha_inicio_alquiler, fecha_final_alquiler, precio_cotizado_alquiler, monto_fianza, id_historial_novedades) VALUES
    (1, 1, '2023-07-01', '2023-07-05', 400, 200, 1),
    (2, 2, '2023-07-03', '2023-07-07', 480, 250, 2);

/* TABLA FACTURA */
INSERT INTO factura (id_reporte_alquiler, fecha_final_real, dias_extra, total_pago_alquiler) VALUES
    (1, '2023-07-05 12:00:00', 0, 400),
    (2, '2023-07-08 10:00:00', 1, 530);
