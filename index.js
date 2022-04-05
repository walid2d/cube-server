const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
const controller = require("./models/streamModels.js");
// Middlewares
app.use(express.json());
app.use(cors());
//routes
app.route("/stream/new").post(controller.createStream);
app.route("/stream/all").get(controller.getStreams);
app.route("/stream/:id").get(controller.getStreamById);
app.route("/stream/edit/:id").put(controller.editStream);
//listen
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
