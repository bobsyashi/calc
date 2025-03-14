const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

//connect js file
app.use(express.static(path.join(__dirname)));

//Get html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'calc-index.html'));
});

app.post('/button-click', (req, res) => {
    console.log(req.body.message);
    res.json({ status: 'success', message: 'Button click received!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
