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

const getNovelsByIdentifier = async (request, response) => {
  try {
    const { identifier } = request.params

    const novel = await models.Novels.findOne({
      include: [
        { model: models.Authors, },
        { model: models.Genres, }
      ],
      where: {
        [models.Op.or]: [
          { id: identifier },
          { title: { [models.Op.like]: `%${identifier}%` } }
        ]
      },
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
  getNovelsByIdentifier
}
