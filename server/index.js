const express = require('express');
const github = require('../helpers/github.js');



let app = express();

app.use(express.json());



// TODO - your code here!
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  console.log('on server side');

  console.log(req.body);

  let userName = req.body.name;

  github.getReposByUsername(userName, (error, result) => {
    if (error) {
      callback(error);
    } else {
      console.log('back in server/index.js');
      console.log(result);
      return;
    }
  })

  // then put result into database


});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  console.log(req.body);
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

