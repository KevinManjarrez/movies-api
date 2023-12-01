const mongoose = require("mongoose");

// Definir el esquema
const movieSchema = new mongoose.Schema({
  idMovie: {
    type: String,
    required: true,
    unique: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  director: String,
  genero: {
    type: String,
    enum: ["Acción", "Drama", "Comedia", "Ciencia ficción", "Fantasía", "Otro"],
  },
  año: {
    type: Number,
    min: 1900,
    max: new Date().getFullYear(),
  },
  calificacion: {
    type: Number,
    min: 0,
    max: 10,
  },
  sinopsis: String,
  actores: [
    {
      _id: false,
      nombre: String,
      edad: Number,
      papel: String,
    },
  ],
  fechaEstreno: {
    type: Date,
    default: Date.now,
  },
});

const Movie = mongoose.model("Movie", movieSchema, "movies");

module.exports = Movie;
