const models = require('../models')

const getAllGenres = async (request, response) => {
  try {
    const genres = await models.Genres.findAll({
      attributes: ['id', 'name']
    })

    return response.send(genres)
  } catch (error) {
    return response.status(500).send('Unable to retrieve villain list, please try again.')
  }
}

const getGenresById = async (request, response) => {
  try {
    const { id } = request.params

    const genre = await models.Genres.findOne({
      where: { id },
      include: [
        { model: models.Novels },
        { model: models.Genres }
      ]
    })

    return genre
      ? response.send(genre)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve villain, please try again.')
  }
}

module.exports = {
  getAllGenres,
  getGenresById
}
