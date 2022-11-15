export const getStudentsQuerry = "SELECT * FROM students";
export const getStudentByIdQuerry = "SELECT * FROM students WHERE id = $1";
export const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";
export const addStudentQuery =
  "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
export const deleteStudentQuery = "DELETE FROM students WHERE id = $1";
export const updateStudentQuery = "UPDATE students SET name = $1 WHERE id = $2";
