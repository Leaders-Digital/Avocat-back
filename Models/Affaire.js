const mongoose = require('mongoose');
const { Schema } = mongoose;

const affaireSchema = new Schema({
  titre: {
    type: String,
    required: true,
  
  },
  description: {
    type: String,
  
  },
  client: {
    type: Schema.Types.ObjectId,
    ref: 'Client',  // Reference to the Client model
    required: true
  },
  avocat: {
    type: Schema.Types.ObjectId,
    ref: 'Avocat',  // Reference to the Avocat model
    required: true
  },
  typeAffaire: {
    type: String,
    required: true,
  },
  etat: {
    type: String,
    enum: ['En cours', 'Clôturée'],  // Define possible states for the case
    required: true
  },
  dateOuverture: {
    type: Date,
    default: Date.now  // Default to the current date when an affair is created
  },
  dateCloture: {
    type: Date
  },
  documents: [{
    type: String,
  }],
  notes: {
    type: String,
  }
});

// Create and export the Affaire model
const Affaire = mongoose.model('Affaire', affaireSchema);
module.exports = Affaire;
