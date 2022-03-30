/* 
create table Planetas 
(
	IdPlaneta int not null,
	Nome varchar(50) not null,
	Rotacao float not null,
	Orbita float not null,
	Diametro float not null,
	Clima varchar(50) not null,
	Populacao int not null,
)
go 
alter table Planetas ADD CONSTRAINT PK_Planetas PRIMARY KEY (IdPlaneta)

-----------------

CREATE TABLE Pilotos
(
	IdPiloto int not null,
	Nome varchar(200) not null,
	AnoNascimento varchar(10) not null,
	IdPlaneta int not null,
)
GO
ALTER TABLE Pilotos ADD CONSTRAINT Pk_Pilotos PRIMARY KEY (IdPiloto);
GO
ALTER TABLE Pilotos ADD CONSTRAINT Fk_Pilotos_Planetas FOREIGN KEY (IdPlaneta)
REFERENCES Planetas (IdPlaneta);

-----------------

CREATE TABLE PilotosNaves
(
	IdPiloto int not null,
	IdNave int not null,
	FlagAutorizado bit not null,
)
GO
ALTER TABLE PilotosNaves ADD CONSTRAINT PK_PilotosNaves PRIMARY KEY (IdPiloto, IdNave);
GO
ALTER TABLE PilotosNaves ADD CONSTRAINT Fk_PilotosNaves_Pilotos FOREIGN KEY (IdPiloto)
REFERENCES Pilotos (IdPiloto);
GO
ALTER TABLE PilotosNaves ADD CONSTRAINT Fk_PilotosNaves_Naves FOREIGN KEY (IdNave)
REFERENCES Naves (IdNave);
GO
ALTER TABLE PilotosNaves ADD CONSTRAINT DF_PilotosNaves_FlagAutorizado DEFAULT(1) FOR FlagAutorizado

*/

CREATE TABLE HistoricoViagens
(
	IdNave int NOT NULL,
	IdPiloto int NOT NULL,
	DtSaida datetime NOT NULL,
	DtChegada datetime NULL,
)
GO

ALTER TABLE HistoricoViagens ADD CONSTRAINT FK_HistoricoViagens_PilotosNaves FOREIGN KEY (IdPiloto, IdNave)
REFERENCES PilotosNaves (IdPiloto, IdNave)

GO
ALTER TABLE HistoricoViagens CHECK CONSTRAINT FK_HistoricoViagens_PilotosNaves