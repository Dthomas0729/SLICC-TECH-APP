// ========= EXTERNAL MODULES
const express = require('express');
const path = require("path");
const cors = require("cors");

// ========= INTERNAL MODULES


// ========= INSTANCE MODULES
const app = express();

// ========= CONIGURATION
// const PORT = process.env.PORT || 5000

// ========= MIDLLEWARE
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(cors());
app.use(express.json());

// ======= REACT FULL STACK MAGIC MIDDLEWARE
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "../public/index.html"));
});

// start express server on port 5000
app.listen(process.env.PORT, () => {
    console.log("SLICC Developers WE ARE LIVE!: http://localhost:5000");
});