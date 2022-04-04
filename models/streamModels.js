const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const data = JSON.parse(fs.readFileSync("./data/streams.json"));
console.log(data);

const createStream = (req, res) => {
  console.log(req.body.title);
  console.log(req.body.description);
  const current = new Date().toLocaleDateString();
  const streamData = data;
  const userInput = {
    id: uuidv4(),
    timestamp: current,
    title: req.body.title,
    description: req.body.description,
  };
  console.log(userInput);
  streamData.push(userInput);
  fs.writeFile("./data/streams.json", JSON.stringify(streamData), () => {
    res.send({
      status: "success",
      data: data,
    });
  });
};
module.exports = { createStream };
