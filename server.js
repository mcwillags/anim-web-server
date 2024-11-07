const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/penis', (req, res) => {
    res.render(path.join(__dirname, 'penis.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
