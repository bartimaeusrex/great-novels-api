const models = require('../models')

const getAllNovels = async (request, response) => {
  try {
    const novels = await models.Novels.findAll({
      attributes: ['id', 'title'],
      include: [
        { model: models.Authors },
        { model: models.Genres },
      ]
    })

    return response.send(novels)
  } catch (error) {
    return response.status(500).send('Unable to retrieve novel list, please try again.')
  }
}

const getNovelsByIdWithAuthorsAndGenres = async (request, response) => {
  try {
    const { id } = request.params

    const novel = await models.novels.findOne({
      include: [{ model: models.authors, },
        { model: models.genres, }],
      where: { id }
    })

    return novel
      ? response.send(novel)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve novel, please try again.')
  }
}

module.exports = {
  getAllNovels,
  getNovelsByIdWithAuthorsAndGenres
}
