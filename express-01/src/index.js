import "dotenv/config";
import cors from "cors";
import express from "express";

import models from "./models";
import routes from "./routes";

console.log("Hello ever running Node.js project.");
console.log("process.env.MY_SECRET", process.env.MY_SECRET);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});

app.use("/session", routes.session);
app.use("/users", routes.user);
app.use("/messages", routes.message);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
