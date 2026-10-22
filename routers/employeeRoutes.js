const express = require("express");
const router = express.Router();
const { createEmployee, getEmployees, getEmployeeById, updateEmployee, deleteEmployee } = require('../controllers/employeeController');

router.post('/employees', createEmployee);
router.get('/employees', getEmployees);
router.get('/employees/:eid', getEmployeeById);
router.put("/employees/:eid", updateEmployee);
router.delete('/employees', deleteEmployee);

module.exports = router;