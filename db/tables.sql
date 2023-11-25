use db_list;

create table tb_admin(
	id_admin    int primary key auto_increment,
	nm_admin    varchar(100), 
	ds_email    varchar(100), 
	ds_senha    varchar(100)
);

create table tb_usuario(
	id_usuario  int primary key auto_increment,
	nm_usuario  varchar(100), 
	ds_email    varchar(100), 
	ds_senha    varchar(100)
);

CREATE TABLE tb_tarefa (
    id_tarefa 	   INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario 	int,
    nm_titulo 	   VARCHAR(100),
    ds_conteudo   VARCHAR(500),
    data_tarefa   VARCHAR(5)
);

-- Criação do Trigger
DELIMITER //

CREATE TRIGGER trig_before_insert_tb_tarefa
BEFORE INSERT ON tb_tarefa
FOR EACH ROW
BEGIN
    SET NEW.data_tarefa = DATE_FORMAT(NOW(), '%d-%m');
END;
//

DELIMITER ;