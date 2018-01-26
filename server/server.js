const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

//matches all routes to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});