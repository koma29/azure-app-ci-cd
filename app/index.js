const appInsights = require('applicationinsights');

appInsights.setup()
  .setAutoCollectRequests(true)
  .setAutoCollectPerformance(true)
  .setAutoCollectExceptions(true)
  .start();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('CI/CD is working 🚀');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});