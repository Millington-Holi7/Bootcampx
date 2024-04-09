SELECT day, count(*) as number_of_assignments, SUM(duration) as duraton
FROM assignments 
GROUP BY day 
ORDER BY day;