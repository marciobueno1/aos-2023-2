import 'dotenv/config';
import express from 'express';

console.log('Hello ever running Node.js project.');
console.log('process.env.MY_SECRET', process.env.MY_SECRET);

const app = express();

app.get('/', (req, res) => {
    res.send("Olá Mundo!");
});

app.listen(3000, () => {
    console.log('Exemplo de app escutando a porta 3000');
});
