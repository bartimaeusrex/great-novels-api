const novelGenres = (connection, Sequelize, Authors, Genres) => {
  return connection.define('novelGenres', {
    genreId: { type: Sequelize.INTEGER, primaryKey: true, references: Genres, key: 'id' },
    novelId: { type: Sequelize.INTEGER, primaryKey: true, references: Authors, key: 'id' },
  }, {paranoid: true })
}

module.exports = novelGenres

// both foreign keys / compound primary key
// not even sure this has to be a separate model??
// -- THINK THIS SHOULD BE IN NOVELS or GENRES...
// Review video at around 37 minutes.