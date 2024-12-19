const client = require('../models/client');
const Client = require('../models/client');

let clients = [
  { client_id: 1, firstname: 'John', lastname: 'Doe', email: 'john.doe@example.com' , numero : 1000000000},
  { client_id: 2, firstname: 'Jane', lastname: 'Smith', email: 'jane.smith@example.com', numero : 1000000001 }
];
// Ajouter un nouveau client
exports.addClient = async (req, res) => {
  try {
    const client = new Client(req.body);
    await client.save();
    res.status(201).json({ message: 'Client ajouté avec succès', client });
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de l\'ajout du client', error });
  }
};

// Affichage de tous les clients
exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la récupération des clients', error });
  }
};
exports.getClientByFullname = async (req, res) => {
    try {
      // Récupérer le prénom et le nom de famille de la requête
      const { firstname, lastname } = req.params;
  
      // Trouver le client par son prénom et son nom de famille
      const client = await Client.findOne({ firstname, lastname });
  
      // Si le client est trouvé, renvoyer les informations
      if (client) {
        res.status(200).json(client);
      } else {
        res.status(404).json({ message: 'Client non trouvé' });
      }
    } catch (error) {
        //message d'erreur
      res.status(400).json({ message: 'Erreur lors de la récupération du client', error });
    }
  };

  exports.getClientById = async (req,res)=>{
    try{
      const{ id } = req.params;
      const client = await client.findById(id);

      if(client){
        res.status(200).json(client); //renvoyer les info si existe
      }else{
        rs.status(404).json({message: 'Client non trouvé'}); 
      }
    }catch(error){
      res.status(404).json({message: 'Erreur lors de la récupération du client', error});
    }

  };

  exports.deleteClient = async (req,res)=>{
    try{
      const{id} = req.params;
      const client = await client.findByIdanddelete(id);

      if(client){
        res.status(200).json({message:'client supprimed successfully'});
      }else{
        res.status(404).json({message:'client not suppressed'});
      }
    }catch(error){
      res.status(404).json({message:'Erreur lors de la suppression du client', error});
    }
  };

  exports.editClient = async (req,res)=>{
    try{
      const {id} = req.params;
      const updates = req.body ;

      const updatedClient = await Client.findByIdAndUpdate(id , updates , {new : true , runValidators : true});
      if (!updatedClient) {
        return res.status(404).json({ message: 'Client non trouvé' });
      }
  
      res.status(200).json({ message: 'Client mis à jour avec succès', updatedClient });
    }catch (error) {
      res.status(400).json({ message: 'Erreur lors de la mise à jour du client', error });
    }
  };