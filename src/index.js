const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Bot Is Online!!!'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);
const MusicBot = require("./structures/MusicClient");
const client = new MusicBot();

client.connect()

module.exports = client; 
