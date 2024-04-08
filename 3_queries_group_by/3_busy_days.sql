SELECT day, count(*) as total_assignments 
FROM assignments 
GROUP BY day 
Having count(*) >= 10 
ORDER BY day ASC;