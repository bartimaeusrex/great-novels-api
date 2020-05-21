const models = require('../models')

const getAllAuthors = async (request, response) => {
  try {
    const authors = await models.Authors.findAll()

    return response.send(authors)
  } catch (error) {
    return response.status(500).send('Unable to retrieve authors list, please try again.')
  }
}

const getAuthorByIdentifier = async (request, response) => {
  try {
    const { identifier } = request.params

    const author = await models.Authors.findOne({
      where: {
        [models.Op.or]: [
          { id: identifier },
          { nameLast: { [models.Op.like]: `%${identifier}%` } }
        ]
      },
      include: [{
        model: models.Novels,
        include: [{ model: models.Genres }]
      }],
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
  getAuthorByIdentifier
}
