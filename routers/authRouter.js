const express = require("express");
const authRouter = express.Router();
const { passport, jwtSign } = require("../auth/auth.js"); // import enhanced passport instance

// matches '/auth/signup' route
authRouter.post("/signup", async (req, res, next) => {
  passport.authenticate("signup", async (err, user) => {
    try {
      console.log("user from /signup", user);

      const { email, id } = user;
      const payload = { email, id };
      const token = jwtSign(payload);
      return res.json({ user, token, message: "User successfully created" });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

// matches '/auth/login' route
authRouter.post("/login", (req, res, next) => {
  // res.status(200).json({message: "So far so good!"})

  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err) {
        const error = new Error("An Error Occurred");
        return next(error);
      }

      if (!user) {
        let error = new Error(info.message || "error occred");
        error.staus = 400;
        return next(error);
      }

      req.login(user, { session: false }, async error => {
        if (error) return next(error);

        const { email, id } = user;
        const payload = { email, id };
        const token = jwtSign(payload);

        // return the user object and token
        return res.json({ user, token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

module.exports = authRouter;
