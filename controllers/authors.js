const models = require('../models')

const getAllAuthors = async (request, response) => {
  try {
    const authors = await models.Authors.findAll({
      attributes: ['id', 'nameFirst', 'nameLast']
    })

    return response.send(authors)
  } catch (error) {
    return response.status(500).send('Unable to retrieve villain list, please try again.')
  }
}

const getAuthorById = async (request, response) => {
  try {
    const { id } = request.params

    const author = await models.Authors.findOne({
      where: { id },
      include: [
        { model: models.Novels },
        { model: models.Genres }
      ]
    })

    return author
      ? response.send(author)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve villain, please try again.')
  }
}

module.exports = {
  getAllAuthors,
  getAuthorById
}
