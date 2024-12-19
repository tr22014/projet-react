const Tbl = require('../models/table');

let tables = [
  { table_id: 1, table_number: 10, table_capacity: 4, table_menu: 'A' },
  { table_id: 2, table_number: 12, table_capacity: 2, table_menu: 'B' }
];
// Ajouter une nouvelle table
exports.addTable = async (req, res) => {
  try {
    const table = new Tbl(req.body);
    await table.save();
    res.status(201).json({ message: 'Table ajoutée avec succès', table });
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de l\'ajout de la table', error });
  }
};

// Afficher toutes les tables
exports.getAllTables = async (req, res) => {
  try {
    const tables = await Tbl.find();
    res.status(200).json(tables);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la récupération des tables', error });
  }
};

exports.getTableById = async (req , res) =>{
  try{
    const { id } = req.params;
    const table = await Tbl.findById(id);
    if(table){
      res.status(200).json(table);
    }else{
      res.status(404).json({ message: 'Table non trouvée' });
    }
  }catch(error){
    res.status(400).json({ message: 'Erreur lors de la récupération de la table', error });
  }
};

exports.deleteTable = async (req , res) =>{
  try{
    const {id} = req.params;
    const table = await Tbl.findByIdAndDelete(id);
    if(table){
      res.status(200).json({ message: 'Table supprimée avec succès' });
    }else{
      res.status(404).json({ message: 'Table non trouvée' });
    }
  }catch(error){
    res.status(400).json({ message: 'Erreur lors de la suppression de la table', error });
  }
};
