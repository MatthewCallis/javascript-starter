const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Allow IP passthrough from NGINX or other Proxy
app.set('trust proxy', true);
// Enable CORS
app.use(cors());
// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

module.exports = app;
