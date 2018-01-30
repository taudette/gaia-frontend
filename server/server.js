const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');
var cors = require('cors')

app.use(cors())
app.use(express.static(publicPath));

//matches all routes to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});