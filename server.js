const express = require('express');
const path = require('path');
const app = express();
const apiRoutes = require('./routes/api');

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());

// API routes
app.use('/api', apiRoutes);

// Route definitions
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/services.html'));
});

app.get('/digital-marketing', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/digital-marketing.html'));
});

app.get('/graphic-design', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/graphic-design.html'));
});

app.get('/website-development', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/website-development.html'));
});

app.get('/video-editing', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/video-editing.html'));
});

app.get('/virtual-assistance', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/virtual-assistance.html'));
});

app.get('/team', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/team.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/blog.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/contact.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});