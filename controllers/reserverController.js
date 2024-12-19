const Reserver = require('../models/reserver');

// Ajouter une association entre un client et une réservation
exports.addAssociation = async (req, res) => {
  try {
    const reserver = new Reserver(req.body);
    await reserver.save();
    res.status(201).json({ message: 'Association ajoutée avec succès', reserver });
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de l\'ajout de l\'association', error });
  }
};

// Afficher toutes les associations
exports.getAllAssociations = async (req, res) => {
  try {
    const associations = await Reserver.find();
    res.status(200).json(associations);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la récupération des associations', error });
  }
};
