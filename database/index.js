const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  repo_name: String,
  link: String,
  description: String,
  owner: String,
  stars: Number,
  watchers: Number,
  forks: Number,

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (userInfo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;