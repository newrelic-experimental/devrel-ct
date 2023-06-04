if (process.env.NODE_ENV === 'dev') {
  require('dotenv').config();
}

const newrelic = require('newrelic');
const logger = require('./logger');
const express = require('express');
const app = express();

// middleware to add delays
app.use((req, res, next) => {
  const delay = Math.random() * 5000;
  setTimeout(next, delay);
});

// R1: hello world
app.get('/', (req, res) => {
  logger.log("debug", "hello world")
  logger.debug("The is the home '/' route.");
  res.send('hello world!');
});

// R2: Slow
app.get('/slow', (req, res) => {
  logger.log("debug", "adding delay")
  const delay = Math.random() * 5000; 
  setTimeout(() => logger.info('delaying'), delay)
  res.send('Slow Route');
});

// R3: Fast
app.get('/fast', (req, res) => {
  logger.log("debug", "fast route")
  res.send('Fast Route');
});


// R4: Post
app.post('/postData', (req, res) => {
  const { message } = req.body;
  if (message) {
    logger.info('message received');
    res.send(`Received message: ${message}`);
  } else {
    logger.error('Invalid request')
    res.status(400).send('Invalid request');
  }
});


// R5: Intentional Error Route
app.get('/error', (req, res) => {
  logger.error("Intentional error")
  throw new Error('Intentional error');
});

// R6: 404
app.use((req, res) => {
    logger.error("Page Not Found")
    res.status(404).send('404: Page not found!');
  
});

// Start the server
app.listen(3000, () => {
  logger.info('Server is listening on port 3000');
});
