const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../frontend'))); // serve HTML & assets

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/shop.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});