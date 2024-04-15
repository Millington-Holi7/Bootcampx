// get all teachers that made an assistance request during a cohort.
// Accept the cohort name as input from the user

const { Pool } = require("pg"); //database connection code

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "bootcampx",
});



 const queryString = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = $1
ORDER BY teacher;`;

const cohortName = process.argv[2];

const values = [cohortName || 'JUL02'];

pool.query(queryString, values)

.then((res) => {
  res.rows.forEach((row) => {
    console.log(
      `${row.cohort}: ${row.teacher} `
    );
  });
})

.catch((error) =>{
  console.log(error);
});
