

// review vid starting conveniently at exactly 40 minutes!!
// and the full rendition at 45:35....

const Sequelize = require('sequelize')
const AuthorsModel = require('./authors')
const NovelsModel = require('./novels')
const GenresModel = require('./genres')
const NovelsGenresModel = require('./novelsgenres')

const connection = new Sequelize('great-novels', 'great-novels', 'novels;TheyrrrreGrrrrEAAAT$!', {
  host: 'localhost', dialect: 'mysql'
})

const Authors = AuthorsModel(connection, Sequelize)
const Novels = NovelsModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)
const NovelsGenres = NovelsGenresModel(connection, Sequelize)

Novels.hasMany(Genres)
// Genres.hasMany(Novels) // novels to genre is many-to-many
// Novels.hasMany(Genres) // which is why the novelsGenres!!
NovelsGenres.belongsTo(Authors)
Authors.hasMany(NovelsGenres)


module.exports = {
  Authors,
  Novels,
  Genres,
  NovelsGenres
}



