const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL

  console.log('getting user info from github...');


  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'stylescode',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  console.log('getting part 2');

  axios.get(options.url, {headers: options.headers})
    .then((response) => {
      console.log('user info retrieved');
      return (JSON.stringify(response));
    })
    .catch((error) => {
      console.log('could not retrieve user info');
      return error;
    })

}

module.exports.getReposByUsername = getReposByUsername;