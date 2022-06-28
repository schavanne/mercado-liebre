const express = require('express');
const app = express();

app.get('/', (req,res) => res.send('levantando servidor!'))

app.listen(3030,() => console.log('Server running in port 3030'))