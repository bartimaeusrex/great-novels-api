const express = require('express')

const { getAuthorById } = require('./controllers/authors')
const { getGenresById } = require('./controllers/genres')
const { getNovelsById } = require('./controllers/novels')
const { getNovelGenresById } = require('./controllers/novelGenres')

const app = express()

app.get('/authors/:id', getAuthorById)
app.get('/genres/:id', getGenresById)
app.get('/novels/:id', getNovelsById)
app.get('/novelGenres/:id', getNovelGenresById)

app.listen(8080, () => {
console.log('Listening on port 8080....')
})

/*

1.
**GET** http://localhost:8080/authors

authors:
  id
  nameFirst
  nameLast
  createdAt
  updatedAt

... and all others

2.
**GET** http://localhost:8080/authors/2

authors:
  id
  nameFirst
  nameLast
  createdAt
  updatedAt
  // --
  novels:
    id
    title
    authorId // a foreign key
    createdAt
    updatedAt
    // --
    genres:       // straight up from genres,
                  // but with added novelsGenres object
      id
      name
      createdAt
      updatedAt
      // --
      novelsGenres
        genreId // a foreign key
        novelId // a foreign key
        createdAt
        updatedAt

... and all other genres for novel
... and all other novels for author (moot point)

3.
**GET** http://localhost:8080/genres

  genres:
    id
    name
    createdAt
    updatedAt

... and all other genres

4.
**GET** http://localhost:8080/genres/2

      id
      name
      createdAt
      updatedAt
      // --
      novels // NOT novelgenres!! as in previous one
        id
        title
        createdAt
        updatedAt
        // --
        novelsGenres:
          genreId // a foreign key
          novelId // a foreign key
          createdAt
          updatedAt
        // --
        author:
          id
          nameFirst
          nameLast
          createdAt
          updatedAt
...

5.
**GET** http://localhost:8080/novels

        id
        title
        createdAt
        updatedAt
        // --
        author:
          id
          nameFirst
          nameLast
          createdAt
          updatedAt
        genres:
          id
          name
          createdAt
          updatedAt
          // --
          novelsGenres
            genreId // a foreign key
            novelId // a foreign key
            createdAt
            updatedAt

... and all other genres for novel
... all other novels

6.
**GET** http://localhost:1337/novels/4

        id
        title
        createdAt
        updatedAt
        // --
        author:
          id
          nameFirst
          nameLast
          createdAt
          updatedAt
        genres:
          id
          name
          createdAt
          updatedAt
          novelsGenres:
            genreId // a foreign key
            novelId // a foreign key
            createdAt
            updatedAt

... and all other genres for novel
... same as /novels, but only need other GENRES


*/