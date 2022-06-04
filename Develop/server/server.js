const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoute = require("./routes/api.js");
const htmlRoute = require("./routes/html.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Use apiRoutes
app.use("/api", apiRoute);
app.use("/", htmlRoute);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
