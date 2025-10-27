const express = require('express');
const app = express();
const {nosController} = require("./api/metaInfoController");

app.use(express.static('resources'));

app.get('/nos', nosController.numberOfFiles);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});