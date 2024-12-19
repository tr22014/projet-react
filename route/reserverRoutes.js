const express = require('express');
const reserverController = require('../controllers/reserverController');
const router = express.Router();

router.post('/addAssociation', reserverController.addAssociation);
router.get('/getAllAssociations', reserverController.getAllAssociations);

module.exports = router;
