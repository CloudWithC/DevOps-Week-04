const express = require("express");
const { Pool } = require("pg");

const app = express();
const PORT = 5000;

const pool = new Pool({
    host: "database",
    port: 5432,
    user: "devopsuser",
    password: "devopspass",
    database: "devopsdb"
});

app.get("/", (req, res) => {
    res.json({
        message: "Backend container is running!",
        database: "PostgreSQL"
    });
});

app.get("/db-test", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");
        res.json({
            message: "Database connection successful!",
            time: result.rows[0].now
        });
    } catch (error) {
        res.status(500).json({
            message: "Database connection failed",
            error: error.message
        });
    }
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Backend running on port ${PORT}`);
});
