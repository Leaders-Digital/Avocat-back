const mongoose = require('mongoose');
const { Schema } = mongoose;

const clientSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telephone: {
    type: String,
  },
  adresse: {
    type: String,
  },
  entreprise: {
    type: String,
  },
  dateInscription: {
    type: Date,
    default: Date.now
  },
  notes: {
    type: String,
  },
  type: {
    type: String,
    enum: ['client', 'prospect'],
    required: true
  },
  affaires: [{
    type: Schema.Types.ObjectId,
    ref: 'Affaire'
  }]
});

// Create and export the Client model
const Client = mongoose.model('Client', clientSchema);
module.exports = Client;
