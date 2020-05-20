CREATE TABLE example.fact_summary(
CustomerID int not null,
CustomerName varchar(20) not null,
SupplierID int not null,
SupplierName varchar(20) not null,
mes int null,
anio int null,
total int null,
SuperoPromedio int null,
PorcentajeVentaMensual decimal not null
)
CREATE TABLE example.settings(
    [Key] VARCHAR (20) NOT NULL,
    [VALUE] INT NOT NULL
)
INSERT INTO example.settings([Key],[VALUE])VALUES('anio',1997)
            
CREATE PROCEDURE example.SP_FACT_SUMMARY(
@CustomerID int not null,
@CustomerName varchar(50) not null,
@SupplierID int not null,
@SupplierName varchar(50) not null,
@mes int null,
@anio int null,
@total int null,
@SuperoPromedio int null,
@PorcentajeVentaMensual decimal (12,8) not null
as
begin
declare @anio int;
set @anio = (select [Value]from example.settings where [Key] = 'anio')