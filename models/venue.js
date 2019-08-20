module.exports = (db, Sequelize) => {
  return db.define("venue", {
    rating: Sequelize.INTEGER,
    name: Sequelize.STRING,
    address: Sequelize.STRING
  });
};
