const appInsights = require('applicationinsights');

appInsights.setup()
  .setAutoCollectRequests(true)
  .setAutoCollectPerformance(true)
  .setAutoCollectExceptions(true)
  .start();

const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const vaultName = "cody-ci-cd-kv-8392";
const url = `https://${vaultName}.vault.azure.net`;
const client = new SecretClient(url, new DefaultAzureCredential());

app.get('/', async (req, res) => {
  try {
    const secret = await client.getSecret("app-message");
    res.send(secret.value);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching secret");
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});