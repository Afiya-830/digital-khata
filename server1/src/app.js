const express = require('express');
const mysql = require('./config/db_mysql');
const connectMongo = require('./config/db_mongo');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
connectMongo();

app.get('/test', async (req,res) => {
    try {
        const[rows] = await mysql.query("SELECT 'MySQL Ready' AS status");
        res.json({
            mysql:rows[0].status, mongodb: "connected"});
    } catch (error) {
        res.status(500).json({error:"Database Connection Error"});
    }
})
app.listen(process.env.PORT, ()=>{
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});