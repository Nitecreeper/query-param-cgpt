import express from 'express';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT ?? 3000;

dotenv.config();

app.get('/endpoint', (req, res) => {
    // Acceder a los query parameters
    const { parametro1, parametro2 } = req.query;

    res.send(`Parametro1: ${parametro1}, Parametro2: ${parametro2}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});