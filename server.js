const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle all GET requests to serve the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});