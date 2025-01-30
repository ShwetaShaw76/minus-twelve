const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());

app.post("/generate", async (req, res) => {
    let prompt = req.body.prompt;
    if (!prompt) res.status(400).json({ success: false, message: "Bad Request" });
    const response = await fetch("https://bf.dallemini.ai/generate", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            prompt
        })
    });
    const data = await response.json();
    data.images = data.images.map((i) => 'data:image/png;base64,' + i)
    res.status(200).json({ success: true, data })
});

app.listen(3000, () => {
    console.log("Express Server started on https://localhost:3000")
})