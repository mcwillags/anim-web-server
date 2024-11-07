const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} Request to ${req.url}`);
    next();
});

app.use(cors());

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

console.log('Static files directory:', path.join(__dirname, 'public'));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    console.log('Serving index.html');
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log('=================================');
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Available endpoints:');
    console.log(`- http://localhost:${PORT}/ (index page)`);
    console.log(`- http://localhost:${PORT}/static/Animation.js (animation file)`);
    console.log('=================================');
});