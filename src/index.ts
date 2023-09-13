import express from "express";

const server = express();

const port = 3000;

server
  .get("/", (req, res) => {
    res.send({
      message: "This is first commit!",
    });
  })
  .get("/random", (req, res) => {
    res.send({
      number: Math.floor(Math.random() * 100),
    });
  });

server.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});
