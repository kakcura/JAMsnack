/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const Clarifai = require('clarifai');

const clarifai = new Clarifai.App({
  apiKey: '5e6483e3afa545d68d5419ef07a7f4ab'
});

clarifai.models.predict(Clarifai.GENERAL_MODEL, 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg')
  .then(response => {
    const { concepts } = response.outputs[0].data

    if (concepts && concepts.length > 0) {
      for (const prediction of concepts) {
        if (prediction.name === 'healthy' && prediction.value >= 0.50) {
          console.log("{ result: 'Healthy' }")
        } else if (prediction.name === 'unhealthy' && prediction.value >= 0.50) {
          console.log("{ result: 'Unhealthy' }")
        }
      }
    }
  });