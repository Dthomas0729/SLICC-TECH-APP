const express = require('express');
const app = express();
const path = require("path");


app.use(express.static("public"));

app.use((req, res, next) => {
    console.log(req.headers);
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 5000
app.listen(5000, () => {
    console.log("server started on port 5000");
});