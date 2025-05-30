const express = require("express");
const app = express();
const port = 3000;

// Middleware tp parse JSON req
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.json({message: "Hello K8s"})
})

// Start Server
app.listen(port, () => {
    console.log(`HIII server is running at http://localhost:${port}`);
})