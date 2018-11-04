/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const Clarifai = require('clarifai');

const clarifai = new Clarifai.App({
  apiKey: '5e6483e3afa545d68d5419ef07a7f4ab'
});

function log(d) {
  try {
    console.log(JSON.stringify(d, null, 2));
  } catch (e) {
    console.log(d);
  }
}

// Prediction on general model using video API
clarifai.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/3o6gb3kkXfLvdKEZs4.gif', {video: false})
  .then(log)
  .catch(log);
