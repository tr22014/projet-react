const express = require('express');
const reservationController = require('../controllers/reservationController');
const router = express.Router();

//route pour ajouter une reservation
router.post('/addReservation' , reservationController.addReservation);

// get all reservations
router.get('/getAllReservations' , reservationController.getAllReservations);

//get reservation by id
router.get('/getReservationById/:id' , reservationController.getReservationById);

//delete reservation
router.get('/deleteReservation/:id' , reservationController.deleteReservation);

module.exports = router;
