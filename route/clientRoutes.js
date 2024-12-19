const express = require('express');
const clientController = require('../controllers/clientController');
const router = express.Router();

//route pur ajouter un nouveau client
router.post('/addClient' , clientController.addClient);

//route pour recuperer les clients 
router.get('/getAllClients' , clientController.getAllClients);

//route pour recuperer les clients par le nom complet
router.get('/getClientByName' , clientController.getClientByFullname);

//route pour recuperer les clients par ID
router.get('/getClientById' , clientController.getClientById);

//route supprimer un client 
router.delete('/deleteClient' , clientController.deleteClient);

//route pour editer les informations du client
router.put('/editClient' , clientController.editClient);

module.exports = router;
