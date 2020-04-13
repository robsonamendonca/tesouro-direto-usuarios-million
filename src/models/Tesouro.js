// Tesouro:{
//     codTesouro: "",
//     codUser: boolean,
//     valorInvest: boolean,
//     dataInvest: Date,
//     }
// codTesouro, codUser, valorInvest, dataInvest
const mongoose = require('../config/database'); 

const TesouroSchema = new mongoose.Schema({
    codTesouro: {
    type: Number,
    required: true,
  },
  codUser: {
    type: Number,
    required: true,
  },
  valorInvest: {
    type: Number,
    required: true,
  },
  dataInvest: {
    type: Date,
    default: Date.now,
  },    
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const Tesouro = mongoose.model('Tesouro', TesouroSchema);

module.exports = Tesouro;