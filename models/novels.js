const Novels = (connection, Sequelize, Authors) => {
  return connection.define('novels', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING },
    nameLast: { type: Sequelize.STRING },
    authorId: { type: Sequelize.INTEGER, references: Authors, key: 'id'},
  }, {paranoid: true })
}

module.exports = Novels
