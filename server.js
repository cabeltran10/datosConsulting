if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const expressMongoDb = require("express-mongo-db");
const MongoClient = require("mongodb").MongoClient;

const app = express();

// Connecting to database
let db;
MongoClient.connect(process.env.DATABASE_URL, (err, database) => {
  if (err) return console.log(err);

  db = database;
  console.log("Connected to database");

  app.listen(app.get("port"), () =>
    console.log(`Server on port ${app.get("port")}`)
  );
});

// Settings
app.set("port", process.env.PORT || 5000);
app.set("routes", path.join(__dirname, "/routes"));

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressMongoDb(process.env.DATABASE_URL));

// Importing Routes
const transactionRouter = require("./routes/transactionRouter");

// Routes
app.use("/transactions", transactionRouter);

// Extra
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
} else {
  app.use(express.static("client/build"));

  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
