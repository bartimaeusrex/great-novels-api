const NovelsGenres = (connection, Sequelize, Authors, Genres) => {
  return connection.define('novelsGenres', {
    genreId: { type: Sequelize.INTEGER, primaryKey: true, references: Genres, key: 'id' },
    novelId: { type: Sequelize.INTEGER, primaryKey: true, references: Authors, key: 'id' },
  }, { paranoid: true })
}

module.exports = NovelsGenres
