const express = require("express");
const app = express();

app.use(express.json());

app.post("/chat", (req, res) => {
    const { message } = req.body;
    // Simulate chat response
    res.json({ message: `You said: "${message}"`, response: "Chat response processed" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Chat backend running on port ${PORT}`);
});
