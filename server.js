const express = require('express');
const cors = require('cors');
const app = express;
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/button-click', (req, res) => {
    console.log(req.body.message);
    res.json({ status: 'success', message: 'Button click received!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
