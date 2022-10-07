const express = require("express");

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  console.log(`${req.url} ${req.path}`);
  next();
});

app.use((req, res, next) => {
  console.log(`${JSON.stringify(req.headers)}`);
  next();
});

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello world!");
});

app.use((req, res, next) => {
  const apiKey = req.query.apiKey;
  if (apiKey) {
    next();
  } else {
    res.status(401);
    res.send("unathourized");
  }
});

app.get("/users", (req, res) => {
  res.status(200);
  res.json([
    {
      id: 1,
      name: "Yemi Osibanjo",
    },
    {
      id: 2,
      name: "Kunle Afolayan",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
