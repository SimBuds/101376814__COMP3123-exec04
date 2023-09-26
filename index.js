const express = require('express');

const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
});

app.get('/user', (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    res.send({"firstname": firstname, "lastname": lastname});
});

app.post('/user/:firstname/:lastname', (req, res) => {
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;
    res.send({"firstname": firstname, "lastname": lastname})
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});