Lugo cree el schema core en el cual cree la tabla usuario
create table core.usuario
(
id_usuario      bigserial   not null,
nombre          VARCHAR(200),
nickname        varchar(100),
email           varchar(100),
contrasenia     varchar(300),
estado_registro int4        not null default 1,
usuario_reg     varchar(30) not null default "current_user"(),
fecha_reg       timestamp   not null default now(),
host_reg        varchar(30) not null default inet_client_addr(),
usuario_mod     varchar(30) null,
fecha_mod       timestamp   null,
host_mod        varchar(30) null,
CONSTRAINT id_usuario_pk primary key (id_usuario)
);