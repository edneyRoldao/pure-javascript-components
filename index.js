const port = process.env.PORT || 3000;
const express = require('express');


const app = express();
app.use(express.json());
app.use(express.static('./src/components'));


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", '*');
    next();
})


app.listen(port, () => {
    console.log('the server is working on port:', port);
})
