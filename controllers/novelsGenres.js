const models = require('../models')

const getAllNovelsGenres = async (request, response) => {
  try {
    const novelsGenres = await models.NovelsGenre.findAll({
      attributes: ['genreId', 'novelId']
    })

    return response.send(novelsGenres)
  } catch (error) {
    return response.status(500).send('Unable to retrieve villain list, please try again.')
  }
}

const getNovelsGenresById = async (request, response) => {
  try {
    const { id } = request.params

    const novel = await models.NovelsGenres.findOne({
      where: { id }
    })

    return novel
      ? response.send(novel)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve villain, please try again.')
  }
}

module.exports = {
  getAllNovelsGenres,
  getNovelsGenresById
}
