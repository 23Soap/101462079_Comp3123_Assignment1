const Employee = require('../models/Employee');

const createEmployee = async (req, res) => {
    try {
        const { first_name,
            last_name,
            email,
            position,
            salary,
            department,
            date_of_joining,
            user,
            userId } = req.body;
        const newEmployee = new Employee({
            first_name,
            last_name,
            email,
            position,
            salary,
            department,
            date_of_joining,
            user,
            userId
        });
        await newEmployee.save();
        res.status(201).json({ message: "Employee created successfully", employee: newEmployee });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

const getEmployees = async (req, res) => {
    try {
        const { userId } = req.query;
        if (!userId) return res.status(400).json({ message: "userId is required" });

        const employees = await Employee.find({ user: userId });
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

const getEmployeeById = async (req, res) => {
    try {
        const { userId } = req.query;
        const employee = await Employee.findOne({ _id: req.params.eid, user: userId });
        if (!employee) return res.status(404).json({ message: "Employee not found." });
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

const updateEmployee = async (req, res) => {
    try {
        const { eid } = req.params;
        const updatedData = req.body;
        const updatedEmployee = await Employee.findByIdAndUpdate(eid, updatedData, { new: true });
        if (!updatedEmployee) return res.status(404).json({ message: "Employee not found." });
        res.status(200).json({ message: "Employee updated successfully", employee: updatedEmployee });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

const deleteEmployee = async (req, res) => {
    try {
        const { eid, userId } = req.query;
        const deletedEmployee = await Employee.findOneAndDelete({ _id: eid, user: userId });
        if (!deletedEmployee) return res.status(404).json({ message: "Employee not found." });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

module.exports = { createEmployee, getEmployees, getEmployeeById, updateEmployee, deleteEmployee };