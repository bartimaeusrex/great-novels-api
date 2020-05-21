const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const AuthorsModel = require('./authors')
const GenresModel = require('./genres')
const NovelsModel = require('./novels')
const NovelsGenresModel = require('./novelsgenres')

const environment = process.env.NODE_ENV || 'development'
const {
  username, password, database, host, dialect
} = allConfigs[environment]

const connection = new Sequelize(database, username, password, { host, dialect })

const Authors = AuthorsModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)
const Novels = NovelsModel(connection, Sequelize, Authors)
const NovelsGenres = NovelsGenresModel(connection, Sequelize, Novels, Genres)

Novels.belongsTo(Authors)
Authors.hasMany(Novels)

Novels.belongsToMany(Genres, { through: NovelsGenres })
Genres.belongsToMany(Novels, { through: NovelsGenres })

module.exports = {
  Authors,
  Novels,
  Genres,
  NovelsGenres,
  Op: Sequelize.Op
}



