const Movies = require('../exportModel').Movies
let now = Date.now()
const result = (data) => {
  return { code: 200, message: 'success', results: data }
}
module.exports = {
  create (req, res) {
    return Movies.create({
      title: req.body.title,
      director: req.body.director,
      starring: req.body.starring,
      film_type: req.body.film_type,
      score: req.body.score || 89,
      evaluation_count: req.body.evaluation_count,
      making_countries: req.body.making_countries,
      production_areas: req.body.production_areas,
      year_of_production: req.body.year_of_production,
      createdAt: req.body.createdAt || now,
      updatedAt: req.body.updatedAt || now,
      version: req.body.version || 0
    })
      .then(data => res.status(200).send(result(data)))
      .catch(error => res.status(400).send(error))
  },
  list (req, res) {
    return Movies.findAll({
      // order: [
      //   []
      //   // [{ model: TodoItem, as: 'todoItems' }, 'createdAt', 'ASC'],
      // ]
    })
      .then(data => res.status(200).send(result(data)))
      .catch(error => res.status(400).send(error))
  },
  retrieve (req, res) {
    return Movies.findById(req.params.id, {})
      .then(data => {
        if (!data) {
          return res.status(404).send({
            message: 'Todo Not Found'
          })
        }
        return res.status(200).send(result(data))
      })
      .catch(error => res.status(400).send(error))
  },
  update (req, res) {
    return Movies.findById(req.params.id, {})
      .then(movies => {
        if (!movies) {
          return res.status(404).send({
            message: 'Movies Not Found'
          })
        }
        return movies
          .update({
            title: req.body.title,
            director: req.body.director,
            starring: req.body.starring,
            film_type: req.body.film_type,
            score: req.body.score,
            evaluation_count: req.body.evaluation_count,
            making_countries: req.body.making_countries,
            production_areas: req.body.production_areas,
            year_of_production: req.body.year_of_production
          })
          .then(() => res.status(200).send(movies))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  },

  destroy (req, res) {
    return Movies.findById(req.params.id)
      .then(movies => {
        if (!movies) {
          return res.status(400).send({
            message: 'movies Not Found'
          })
        }
        return movies
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  }
}
