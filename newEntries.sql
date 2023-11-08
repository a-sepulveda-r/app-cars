
CREATE DATABASE NewEntries;
GO

USE NewEntries;
GO

-- Crear tablas
CREATE TABLE MarcaAuto (
    MarcaAutoID INT PRIMARY KEY,
    Nombre VARCHAR(50)
);

CREATE TABLE ModeloAuto (
    ModeloAutoID INT PRIMARY KEY,
    Nombre VARCHAR(50),
    MarcaAutoID INT,
    FOREIGN KEY (MarcaAutoID) REFERENCES MarcaAuto(MarcaAutoID)
);

CREATE TABLE Vendedor (
    VendedorID INT PRIMARY KEY,
    Nombre VARCHAR(50)
);

CREATE TABLE Solicitudes (
    SolicitudID INT PRIMARY KEY,
    VendedorID INT,
    ModeloAutoID INT,
    FechaSolicitud DATE,
    MontoVenta DECIMAL(10, 2),
    FOREIGN KEY (VendedorID) REFERENCES Vendedor(VendedorID),
    FOREIGN KEY (ModeloAutoID) REFERENCES ModeloAuto(ModeloAutoID)
);

INSERT INTO MarcaAuto (MarcaAutoID, Nombre)
VALUES
    (1, 'Chevrolet'),
    (2, 'Toyota'),
    (3, 'Ford'),
    (4, 'Honda'),
    (5, 'Volkswagen'),
    (6, 'Nissan'),
    (7, 'BMW'),
    (8, 'Mercedes-Benz'),
    (9, 'Audi'),
    (10, 'Hyundai');

INSERT INTO ModeloAuto (ModeloAutoID, Nombre, MarcaAutoID)
VALUES
    (1, 'Sail', 1),
    (2, 'Corolla', 2),
    (3, 'F-150', 3),
    (4, 'Civic', 4),
    (5, 'Jetta', 5),
    (6, 'Altima', 6),
    (7, '3 Series', 7),
    (8, 'C-Class', 8),
    (9, 'A3', 9),
    (10, 'Elantra', 10);

INSERT INTO Vendedor (VendedorID, Nombre)
VALUES
    (1, 'Juan Pérez'),
    (2, 'María González'),
    (3, 'Roberto Rodríguez'),
    (4, 'Luisa Fernández'),
    (5, 'Manuel López');

INSERT INTO Solicitudes (SolicitudID, VendedorID, ModeloAutoID, FechaSolicitud, MontoVenta)
VALUES
    (1, 1, 1, '2023-10-15', 25000000), 
    (2, 2, 3, '2023-10-16', 30000000), 
    (3, 3, 5, '2023-10-18', 28000000), 
    (4, 4, 7, '2023-11-05', 40000000), 
    (5, 5, 9, '2023-11-10', 35000000), 
    (6, 1, 2, '2023-11-12', 27000000),  
    (7, 1, 3, '2023-11-13', 31000000);  

-- Crear los procedimientos almacenados
-- Procedimiento para obtener las 3 marcas más solicitadas
CREATE PROCEDURE GetTop3RequestedBrands
AS
BEGIN
    SELECT TOP 3 M.Nombre AS Marca, COUNT(S.SolicitudID) AS CantidadSolicitudes
    FROM MarcaAuto M
    LEFT JOIN ModeloAuto MA ON M.MarcaAutoID = MA.MarcaAutoID
    LEFT JOIN Solicitudes S ON MA.ModeloAutoID = S.ModeloAutoID
    GROUP BY M.Nombre
    ORDER BY CantidadSolicitudes DESC;
END;

-- Procedimiento para obtener solicitudes del mes actual
CREATE PROCEDURE GetRequestsInCurrentMonth
AS
BEGIN
    DECLARE @CurrentMonth DATE = GETDATE();
    SELECT * FROM Solicitudes
    WHERE MONTH(FechaSolicitud) = MONTH(@CurrentMonth) AND YEAR(FechaSolicitud) = YEAR(@CurrentMonth);
END;

-- Procedimiento para obtener el vendedor que menos solicitudes haya generado en los últimos 30 días
CREATE PROCEDURE GetSellerWithFewestRequestsLast30Days
AS
BEGIN
    DECLARE @Last30DaysStart DATE = DATEADD(DAY, -30, GETDATE());
    SELECT TOP 1 V.Nombre AS Vendedor, COUNT(S.SolicitudID) AS CantidadSolicitudes
    FROM Vendedor V
    LEFT JOIN Solicitudes S ON V.VendedorID = S.VendedorID
    WHERE FechaSolicitud >= @Last30DaysStart
    GROUP BY V.Nombre
    ORDER BY CantidadSolicitudes;
END;

-- Procedimiento para obtener modelos que no tienen solicitudes
CREATE PROCEDURE GetModelsWithNoRequests
AS
BEGIN
    SELECT M.Nombre AS Modelo, M.MarcaAutoID
    FROM ModeloAuto M
    WHERE NOT EXISTS (SELECT 1 FROM Solicitudes S WHERE S.ModeloAutoID = M.ModeloAutoID);
END;

-- Procedimiento para obtener 3 meses con más dinero en ventas
CREATE PROCEDURE GetTop3MonthsBySales
AS
BEGIN
    SELECT TOP 3
        DATENAME(MONTH, FechaSolicitud) + ' ' + CAST(YEAR(FechaSolicitud) AS VARCHAR) AS MesAnio,
        SUM(MontoVenta) AS TotalVentas
    FROM Solicitudes
    GROUP BY DATENAME(MONTH, FechaSolicitud), YEAR(FechaSolicitud)
    ORDER BY TotalVentas DESC;
END;

-- Ejecutar los procedimientos almacenados

EXEC GetRequestsInCurrentMonth;

EXEC GetSellerWithFewestRequestsLast30Days;

EXEC GetModelsWithNoRequests;

EXEC GetTop3RequestedBrands;

EXEC GetTop3MonthsBySales;