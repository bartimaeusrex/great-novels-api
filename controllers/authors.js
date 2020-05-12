const models = require('../models')

const getAllAuthors = async (request, response) => {
  try {
    const allAuthors = await models.Authors.findAll()

    return response.send(allAuthors)
  } catch (error) {
    return response.status(500).send('Unable to retrieve authors list, please try again.')
  }
}

const getAuthorByIdWithNovelsAndGenres = async (request, response) => {
  try {
    const { id } = request.params

    const author = await models.Authors.findOne({
      include: [{
        include: [{ model: models.Genres }],
        model: models.Novels
      }],
      where: { id },
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
  getAuthorByIdWithNovelsAndGenres
}
