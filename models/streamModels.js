const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const data = JSON.parse(fs.readFileSync("./data/streams.json"));

getStreams = (req, res) => {
  fs.readFile("./data/streams.json", "utf-8", (err, data) => {
    const allData = JSON.parse(data);
    if (err) {
      res.send("error reading data");
    } else {
      res.send(allData);
    }
  });
};
const getStreamById = function (req, res) {
  const singleStream = data.find((v) => v.id === req.params.id);
  if (singleStream) {
    res.status("200").json({
      status: "Sucess",
      data: singleStream,
    });
  } else {
    res.status("404").json({
      status: "Stream not found",
    });
  }
};

const createStream = (req, res) => {
  console.log(req.body);
  console.log(req.body.description);
  const current = new Date().toLocaleDateString();
  const streamData = data;
  const userInput = {
    id: uuidv4(),
    userid: req.body.userId,
    userpfp: req.body.userPfp,
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
module.exports = { createStream, getStreams, getStreamById };
