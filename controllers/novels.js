const models = require('../models')

const getAllNovels = async (request, response) => {
  try {
    const novels = await models.Novels.findAll({
      include: [
        { model: models.Authors },
        { model: models.Genres }
      ]
    })

    return response.send(novels)
  } catch (error) {
    return response.status(500).send('Unable to retrieve novel list, please try again.')
  }
}

const getNovelsById = async (request, response) => {
  try {
    const { id } = request.params

    const novel = await models.Novels.findOne({
      include: [
        { model: models.Authors, },
        { model: models.Genres, }
      ],
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
  getNovelsById
}
