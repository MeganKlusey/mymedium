require('dotenv').config();
const axios = require('axios'); 
const express = require('express')
const app = express()

app.use(express.static('front-end/src/pages'));

const cors = require('cors');
app.use(cors({ origin: '*' }));

const API_KEY = process.env.API_KEY;

app.get('/data', async (req, res) => {
  try {
    const url = `https://content.guardianapis.com/technology?show-fields=thumbnail,body&show-tags=contributor&api-key=${API_KEY}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.get('/creators', async (req, res) => {
  try {
    const url = `https://content.guardianapis.com/technology?show-tags=contributor&api-key=${API_KEY}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.get('/topics', async (req, res) => {
  try {
    const url = `https://content.guardianapis.com/sections?api-key=${API_KEY}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.get('/article/:id/:wildcard', async (req, res) => {
  const { id, wildcard } = req.params;

  try {
    const url = `https://content.guardianapis.com/${id}/${wildcard}?show-fields=thumbnail,body&show-tags=contributor&show-elements=image&api-key=${API_KEY}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

const port = 8000;
app.listen(port, '0.0.0.0', () => {console.log(`Running on http://0.0.0.0:${port}`)});