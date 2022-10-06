const express = require("express");
const app = express();

app.use(express.urlencoded());

app.post("/auth", (req, res) => {
  // This server is only available to nginx
  const streamkey = req.body.key;

  // you can make a database of users instead
  if (streamkey === "supersecret") {
    res.status(200).send();
    return;
  }

  // reject the stream
  res.status(403).send();
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
