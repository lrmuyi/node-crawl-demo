const db = require("../model");

module.exports = db.defineModel(
  "movies",
  {
    title: {
      type: db.STRING(100),
      allowNull: true
    },
    director: {
      type: db.STRING(100),
      allowNull: true
    },
    starring: {
      type: db.STRING(100),
      allowNull: true
    },
    film_type: {
      type: db.STRING(32),
      allowNull: true
    },
    score: {
      type: db.BIGINT,
      allowNull: true
    },
    evaluation_count: {
      type: db.BIGINT(11),
      allowNull: true
    },
    making_countries: {
      type: db.STRING(32),
      allowNull: true
    },
    production_areas: {
      type: db.STRING(32),
      allowNull: true
    },
    year_of_production: {
      type: db.BIGINT,
      allowNull: true
    }
  },
  {
    timestamps: false,
    autoIncrement: true
  }
);
