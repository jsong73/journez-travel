//importing express library
const express = require("express");
const app = express();
//importing the connection.js file
const sequelize = require("./config/connection");
//connect to the available port if not specified use port 3003
const PORT = process.env.PORT || 3003;
//importing the models folder
const Model = require("./models");
//importing controllers folder
const controllers = require("./controllers");
//importing bcrypt library
const bcrypt = require("bcrypt");
//importing express session library
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// app.use(express.json());
// app.use(express.urlencoded({ extended: true })); 

const sess = {
    secret: "Super secret secret",
    cookie: {
      maxAge: 300000,
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };
  
app.use(controllers);
app.use(session(sess));

//to connect to port using express
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, (err) => console.log(`listening to port ${PORT}`));
})
