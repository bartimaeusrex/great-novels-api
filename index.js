const express = require('express')

const { getAllAuthors, getAuthorByIdWithNovelsAndGenres } = require('./controllers/authors')
const { getAllGenres, getGenreByIdWithNovelsAndAuthors } = require('./controllers/genres')
const { getAllNovels, getNovelsByIdWithAuthorsAndGenres } = require('./controllers/novels')

const app = express()

app.get('/authors/', getAllAuthors)
app.get('/authors/:id', getAuthorByIdWithNovelsAndGenres)

app.get('/genres/', getAllGenres)
app.get('/genres/:id', getGenreByIdWithNovelsAndAuthors)

app.get('/novels/', getAllNovels)
app.get('/novels/:id', getNovelsByIdWithAuthorsAndGenres)

app.all('*', (request, response) => response.status('404')
  .send('Can\'t find anything!'))

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 8080....')
})
