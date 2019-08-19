const Sequelize = require("sequelize");
const UserModel = require("./user");
const VenueModel = require("./venue");
const bcrypt = require("bcrypt");

const db = new Sequelize({
  database: "rest_db",
  dialect: "postgres"
});

const User = UserModel(db, Sequelize);

const Venue = VenueModel(db, Sequelize);

Venue.belongsToMany(User, {
  onDelete: "cascade",
  through: "user_venues"
});

User.belongsToMany(Venue, {
  onDelete: "cascade",
  through: "user_venues"
});

User.beforeCreate(async (user, options) => {
  const hashedPassword = await bcrypt.hash(user.password, 12);
  user.password = hashedPassword;
});

module.exports = { db, User, Venue };
