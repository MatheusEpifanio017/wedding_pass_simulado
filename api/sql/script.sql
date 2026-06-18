create table users (
id int primary key auto_increment,
email varchar(100) not null,
password varchar(100) not null,
first_name varchar(100) not null,
last_name varchar(100) not null,
cpf varchar(11) not null,
role enum('SUPERADMIN', 'ADMIN', 'CEREMONIALIST')
);

create table guests (
id int primary key auto_increment,
first_name varchar(100) not null,
last_name varchar(100) not null,
email varchar(100) not null,
cpf varchar(11) not null,
phone varchar(100) not null,
event_table varchar(100),
checkin boolean default false
);

insert into users (email, password, first_name, last_name, cpf, role)
values("sdmin@senac.com", "1234", "Matheus", "Epifanio", "12345678901", "SUPERADMIN"),
	  ("admin@senac.com", "2345", "Adriano", "Anshau", "12345678902", "ADMIN"),
	  ("ceremonial@senac.com", "3456", "Paola", "Santana", "12345678903", "CEREMONIALIST");

insert into guests (first_name, last_name, email, cpf, phone, event_table, checkin)
values("Ilia", "Topuria", "convidado@senac.com", "09876543210", "99234", "Mesa 1", false),
	  ("Alexandre", "Pereira", "convidado@senac.com", "09876543211", "99235", "Mesa 2", false),
	  ("Charles", "Do Bronx", "convidado@senac.com", "09876543212", "99236", "Mesa 3", false),
	  ("Max", "Verstappen", "convidado@senac.com", "09876543213", "99237", "Mesa 4", false),
	  ("Sebastian", "Vettel", "convidado@senac.com", "09876543214", "99238", "Mesa 5", false),
	  ("Ronaldo", "Nazário", "convidado@senac.com", "09876543215", "99239", "Mesa 6", false),
	  ("Lionel", "Messi", "convidado@senac.com", "09876543216", "99240", "Mesa 7", false),
	  ("julian", "Alvares", "convidado@senac.com", "09876543217", "99241", "Mesa 8", false),
	  ("Antonie", "Griezzeman", "convidado@senac.com", "09876543218", "99242", "Mesa 8", false),
	  ("Kylian", "Mbappe", "convidado@senac.com", "09876543219", "99243", "Mesa 9", false),
	  ("Vinicius", "Junior", "convidado@senac.com", "09876543220", "99244", "Mesa 10", false),
	  ("Ousemane", "Dembele", "convidado@senac.com", "09876543221", "99245", "Mesa 11", false),
	  ("Cristian", "Pulisic", "convidado@senac.com", "09876543222", "99246", "Mesa 12", false),
	  ("Cristiano", "Ronaldo", "convidado@senac.com", "09876543223", "99247", "Mesa 13", false),
	  ("Airton", "Senna", "convidado@senac.com", "09876543224", "99248", "Mesa 14", false),
	  ("Leonardo", "Da Vinci", "convidado@senac.com", "09876543225", "99249", "Mesa 15", true),
	  ("Pedro", "Oliveira", "convidado@senac.com", "09876543226", "99250", "Mesa 16", true),
	  ("João", "Silva", "convidado@senac.com", "09876543227", "99251", "Mesa 17", true),
	  ("Derik", "Fernades", "convidado@senac.com", "09876543228", "99252", "Mesa 18", true),
	  ("Higor", "Guedez", "convidado@senac.com", "09876543229", "99253", "Mesa 19", true),
	  ("Gustavo", "Junior", "convidado@senac.com", "09876543230", "99254", "Mesa 20", true),
	  ("Guilerme", "Oliveira", "convidado@senac.com", "09876543231", "99255", "Mesa 21", true),
	  ("Kauã", "Santana", "convidado@senac.com", "09876543232", "99256", "Mesa 22", true),
	  ("Mariana", "Guedez", "convidado@senac.com", "09876543233", "99257", "Mesa 21", true),
	  ("Joelma", "Potugal", "convidado@senac.com", "098765434", "99258", "Mesa 22", true),
	  ("Giovana", "Fiorentina", "convidado@senac.com", "09876543235", "99259", "Mesa 23", true),
	  ("Maria", "Souza", "convidado@senac.com", "09876543236", "99260", "Mesa 24", true),
	  ("Luisa", "Castro", "convidado@senac.com", "09876543237", "99261", "Mesa 25", true),
	  ("Rebeca", "Masquez", "convidado@senac.com", "09876543238", "99262", "Mesa 26", true),
	  ("Andressa", "Barbosa", "convidado@senac.com", "09876543239", "99263", "Mesa 27", true),
	  ("Alexandre", "Vessozi", "convidado@senac.com", "09876543240", "99264", "Mesa 29", true),
	  ("Joui", "Jouki", "convidado@senac.com", "09876543241", "99265", "Mesa 30", true);