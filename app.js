const express = require('express')
const app = express()
const cors = require("cors");
const bodyParser = require("body-parser");

const user_routes = require("./routes/user-routes");

app.use(cors());
app.use(bodyParser.json());

app.use("/api", user_routes);

app.listen(5050)