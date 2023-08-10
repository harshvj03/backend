const mongoose = require("mongoose");
require("dotenv").config();

const DB_CONNECT = process.env.DATABASE_URI;

mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "coursesDb",
}).then(() => {
    console.log('connected to mongo db')
}).catch((err) => {
    console.log(err)
})

// mongoose.connection.once("open", () => {
//   console.log("Connected to MongoDb");
// });
