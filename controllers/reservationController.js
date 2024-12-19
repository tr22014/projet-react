const Reservation = require('../models/reservation');

let reservations = [
  { reservation_id: 1, date: '10/09/2024', Time: '21:30', nbr_prsn: 5 ,  table_id: 5 },
  { reservation_id: 2, date: '25/12/2024', Time: '20:00', nbr_prsn: 2 , table_id: 4 }
];
// Ajouter une réservation
exports.addReservation = async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).json({ message: 'Réservation ajoutée avec succès', reservation });
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de l\'ajout de la réservation', error });
  }
};

// Afficher toutes les réservations
exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la récupération des réservations', error });
  }
};

// Récupérer une réservation par son ID
exports.getReservationById = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await Reservation.findById(id);

    if (reservation) {
      res.status(200).json(reservation);
    } else {
      res.status(404).json({ message: 'Réservation non trouvée' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la récupération de la réservation', error });
  }
};

// Supprimer une réservation par son ID
exports.deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await Reservation.findByIdAndDelete(id);

    if (reservation) {
      res.status(200).json({ message: 'Réservation supprimée avec succès' });
    } else {
      res.status(404).json({ message: 'Réservation non trouvée' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la suppression de la réservation', error });
  }
};
