const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>DevOps Docker Application</title>
        </head>
        <body>
            <h1>🚀 Docker Compose Application</h1>
            <h2>Frontend Container is Running!</h2>
            <p>Frontend → Backend → PostgreSQL</p>
        </body>
        </html>
    `);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Frontend running on port ${PORT}`);
});
