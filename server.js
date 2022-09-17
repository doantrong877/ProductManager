const express = require("express");
const cors = require("cors");
const app = express();

require("./server/config/product.config");

app.use(cors(), express.json(), express.urlencoded({extended: true}));

require("./server/routes/product.route")(app);

app.listen(8000, () => console.log("Listening to port 8000"));
