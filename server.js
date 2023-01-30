const express = require("express");
const app = express();
const port = process.env.port || 5000;
const cors = require("cors");
const path = require("path");
const jsonServer = require("json-server");

const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
app.use(jsonServer.bodyParser);
app.use(middlewares);

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});
app.use(router);

app.listen(port, () => {
  console.log("server is running on port " + port);
});
