const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/api/v2/berry/:id", (req, res) => {
    console.log(res.data)
    res.status(200).send(res.data)
})

app.listen(4004, () => console.log("Server running on 4004"))