--WITH CTEPromedio AS (
    --  	SELECT AVG(prod.Price* ordt.Quantity) as promedio
	--	FROM example.[Order] as ord inner join example.OrderDetails as ordt on ord.OrderID = ordt.OrderID 
	--inner join example.Products as prod on ordt.ProductID = prod.ProductID
	--	WHERE prod.SupplierID = p.SupplierID and month(ord.OrderDate) = month(o.OrderDate) and year(ord.OrderDate) = year(o.OrderDate)
	--	group by prod.SupplierID,  
    --    year(ord.OrderDate) , month(ord.OrderDate) 
--  )

SELECT 
  o.CustumerID,
  c.CustomerName,
  p.SupplierID,
  s.SupplierName,
    MONTH(o.OrderDate) AS Mes, 
      year(o.OrderDate) AS Anio,
    sum(p.Price*od.Quantity) AS Total,--TOTAL todo lo que se Vendió agrupado por customer, supplier, mes y año. 
     CASE 
        WHEN sum(p.Price*od.Quantity) >(
        SELECT AVG(prod.Price* ordt.Quantity) AS promedio
		    FROM example.[Order] AS ord 
            INNER JOIN example.OrderDetails AS ordt 
                ON ord.OrderID = ordt.OrderID 
	        INNER JOIN example.Products AS prod 
                ON ordt.ProductID = prod.ProductID
		        WHERE prod.SupplierID = p.SupplierID AND month(ord.OrderDate) = month(o.OrderDate) AND year(ord.OrderDate) = year(o.OrderDate)
		    GROUP BY prod.SupplierID, year(ord.OrderDate) , month(ord.OrderDate) 
            ) THEN 1
        ELSE 0
    END AS SuperoPromedio, --lo que esta por debajo del promedio por lo que se coloca un 0 
                           --en caso de ser contrario colocar un 1. 
SUM(p.Price*od.Quantity)/(
SELECT SUM(prod.Price* ordt.Quantity) AS promedio
		FROM example.[Order] AS ord2
        INNER JOIN example.OrderDetails AS ordt
            ON ord2.OrderID = ordt.OrderID 
	    INNER  JOIN example.Products AS prod 
            ON ordt.ProductID = prod.ProductID
		WHERE ord2.CustumerID = o.CustumerID AND month(ord2.OrderDate) = month(o.OrderDate) AND year(ord2.OrderDate) = year(o.OrderDate)
	GROUP BY ord2.CustumerID,  
        year(ord2.OrderDate) , month(ord2.OrderDate) 
        ) as PorcentajeVentaMensual --Se deben de usar las tablas de productos que ya se habían trabajado previamente 
    
FROM example.[OrderDetails] AS od
INNER JOIN  example.[Order] AS o 
    ON o.OrderID = od.OrderID
INNER JOIN example.Customers as c
    ON c.CustomerID=o.CustumerID
INNER JOIN example.Products as p 
    ON od.ProductID = p.ProductID
INNER JOIN example.Supplier as s
    ON p.SupplierID=s.SupplierID
--inner JOIN CTEPromedio as \\ Cte me tira eror de CTE Msg 8120, Level 16, State 1, Line 17
--ON cte.SupplierID=p.SupplierID
GROUP BY  o.CustumerID, c.CustomerName, p.SupplierID,
  s.SupplierName,MONTH(OrderDate),year(OrderDate)
   


  
	

