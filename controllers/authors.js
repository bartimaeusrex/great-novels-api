const models = require('../models')

const getAllAuthors = async (request, response) => {
  try {
    const authors = await models.Authors.findAll()

    return response.send(authors)
  } catch (error) {
    return response.status(500).send('Unable to retrieve authors list, please try again.')
  }
}

const getAuthorById = async (request, response) => {
  try {
    const { id } = request.params

    const author = await models.Authors.findOne({
      include: [{
        model: models.Novels,
        include: [{ model: models.Genres }]
      }],
      where: { id }
    })

    return author
      ? response.send(author)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve author, please try again.')
  }
}

module.exports = {
  getAllAuthors,
  getAuthorById
}
