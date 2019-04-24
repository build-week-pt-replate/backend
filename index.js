//* Import express server
const server = require("./api/server");

//* Test server
server.get("/", (req, res) => {
  res.json("The server is running!");
});

//* Listener
const PORT = process.env.PORT || 3500;
server.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
});
