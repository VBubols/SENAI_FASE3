-- id, nome, telefone, email
CREATE TABLE contatos (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	telefone VARCHAR(11),
	email VARCHAR(55) NOT NULL UNIQUE
);

-- População teste ficticia
INSERT INTO contatos (nome, telefone, email) VALUES
('Ana Silva', '11987654321', 'ana.silva@email.com'),
('Bruno Oliveira', '21976543210', 'bruno.o@provider.net'),
('Carla Souza', '31965432109', 'carla.souza@webmail.com'),
('Diego Santos', '41954321098', 'diego.santos@fastmail.com'),
('Elena Martins', '51943210987', 'elena.m@corp.com.br'),
('Fabio Lima', '61932109876', 'fabio.lima@tech.io'),
('Gisele Rocha', '71921098765', 'gisele.r@service.com'),
('Hugo Mendes', '81910987654', 'hugo.mendes@online.de'),
('Iara Costa', '91909876543', 'iara.costa@mailbox.org'),
('Joao Pereira', '11912345678', 'joao.p@connect.com'),
('Karen Alves', '21923456789', 'karen.alves@site.com'),
('Lucas Ferraz', '31934567890', 'lucas.f@global.net'),
('Marina Dias', '41945678901', 'marina.dias@inbox.com'),
('Natan Gomes', '51956789012', 'natan.g@digital.com'),
('Olivia Paiva', '61967890123', 'olivia.p@portal.com'),
('Paulo Nunes', '71978901234', 'paulo.nunes@express.com'),
('Quiteria Luz', '81989012345', 'quiteria.l@vision.com'),
('Ricardo Vaz', '91990123456', 'ricardo.v@cloud.net'),
('Sandra Meira', '11901234567', 'sandra.m@prime.com'),
('Tiago Ramos', '21911223344', 'tiago.ramos@smart.io'),
('Ursula Lima', '31922334455', 'ursula.l@pro.com.br'),
('Vitor Hugo', '41933445566', 'vitor.hugo@dev.com'),
('Wagner Jota', '51944556677', 'wagner.j@build.it'),
('Xenia Maria', '61955667788', 'xenia.m@flow.com'),
('Yuri Bento', '71966778899', 'yuri.bento@sync.me'),
('Zilda Arns', '81977889900', 'zilda.a@health.org'),
('Arthur Neto', '91988990011', 'arthur.n@legacy.com'),
('Beatriz Fox', '11999001122', 'beatriz.f@nova.com'),
('Caio Castro', '21900112233', 'caio.c@star.net'),
('Dora Aventure', '31911223344', 'dora.a@explore.com');