const express = require('express');
const tableController = require('../controllers/tableController');
const router = express.Router();

//route pour ajouter une table
router.post('/addTable' , tableController.addTable);

// get all tables
router.get('/getAllTables' , tableController.getAllTables);

//get table by id
router.get('/getTableById/:id' , tableController.addTable);

//delete table
router.get('/deleteTable/:id' , tableController.deleteTable);


module.exports = router;
