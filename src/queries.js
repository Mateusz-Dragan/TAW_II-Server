const getAllTests = 'SELECT * FROM Tests';
const getTestById = 'SELECT * FROM Tests WHERE id = $1'
const checkIfTestNameExists = 'SELECT t FROM Tests t WHERE t.test_name =$1'
const addTest = 'INSERT INTO Tests (test_name, category, points) VALUES($1,$2,$3)'
const removeTest = 'DELETE FROM Tests WHERE id = $1'
const updateTest = 'UPDATE Tests SET test_name = $1'


export default {getAllTests, getTestById, checkIfTestNameExists, addTest, removeTest, updateTest}
