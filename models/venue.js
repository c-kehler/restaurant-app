module.exports = (db, Sequelize) => {
  return db.define("venue", {
    rating: Sequelize.DOUBLE,
    name: Sequelize.STRING,
    number: Sequelize.STRING,
    URL: Sequelize.STRING
  });
};
