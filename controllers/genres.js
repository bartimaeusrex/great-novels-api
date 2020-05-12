const models = require('../models')

const getAllGenres = async (request, response) => {
  try {
    const allGenres = await models.Genres.findAll()

    return response.send(allGenres)
  } catch (error) {
    return response.status(500).send('Unable to retrieve genre list, please try again.')
  }
}

const getGenreByIdWithNovelsAndAuthors = async (request, response) => {
  try {
    const { id } = request.params

    const genre = await models.Genres.findOne({
      include: [{
        include: [{
          model: models.Authors
        }],
        model: models.Novels,
      }],
      where: { id },
    })

    return genre
      ? response.send(genre)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve genre, please try again.')
  }
}

module.exports = {
  getAllGenres,
  getGenreByIdWithNovelsAndAuthors
}
