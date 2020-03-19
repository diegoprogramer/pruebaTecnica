 1)  SELECT conduc.nombre AS nombre,conduc.municipio AS municipio FROM conductores conduc LEFT JOIN trabajos trab ON conduc.codigoc  = trab.codigc LEFT JOIN proyectos  pry ON trab.codigop = pry.codigop where pry.cliente not like 'Henry Pulido' or pry.cliente is null;
2 SELECT pry.descripcion AS descripcion, pry.cliente AS cliente, IF( machine.precio_hora is null or trab.tiempo is null ,'0',trab.tiempo * machine.precio_hora) AS facturar_total
FROM proyectos pry LEFT JOIN trabajos trab ON pry.codigop = trab.codigop LEFT JOIN maquinas machine ON machine.codigom = trab.codigom
ORDER BY p.cliente,facturar_total;
3 SELECT DISTINCT(municipio) FROM(SELECT conduc.municipio AS municipio, conduc.nombre AS nombre ,pry.codigop AS codigo, count(pry.codigop) AS cantidad
FROM conductores conduc LEFT JOIN trabajos trab ON conduc.codigo = trab.codigc LEFT JOIN proyectos pry ON pry.codigop = trab.codigop
GROUP BY conduc.nombre having count(pry.codigop)>2) AS t1;
4 update maquinas set precio_hora = precio_hora+(SELECT (0.1) * min(precio_hora) FROM maquinas)
where precio_hora <> (SELECT max(precio_hora) FROM maquinas);
5  CREATE VIEW miVista AS SELECT conduc.nombre AS nombre, pry.descripcion AS descripcion,AVG(trab.tiempo) AS promedio 
FROM conductores conduc LEFT JOIN trabajos trab ON conduc.codigo = trab.codigc LEFT JOIN proyectos pry ON pry.codigop = trab.codigop
GROUP BY pry.descripciON;
