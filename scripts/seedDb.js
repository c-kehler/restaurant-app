const { User, Venue } = require("../models");
const bcrypt = require("bcrypt");

const seedDb = async () => {
  try {
    await User.destroy({
      where: {}
    });

    await Venue.destroy({
      where: {}
    });
    async function encryptedPassword(password) {
      let encrypted = await bcrypt.hash(
        password,
        Number(process.env.SALT_ROUNDS)
      );
      return encrypted;
    }

    const alex = await User.create({
      name: "Alex",
      email: "alex@thompson.com",
      password: "password"
    });

    const chris = await User.create({
      name: "Chris",
      email: "chris@thompson.com",
      password: "password"
    });

    // await chris.setVenues([venue1]);
    // await alex.setVenues([venue2]);
  } catch (e) {
    console.error(e);
  }
};

const run = async () => {
  try {
    await seedDb();
  } catch (e) {
    console.error(e);
  } finally {
    process.exit();
  }
};

run();
