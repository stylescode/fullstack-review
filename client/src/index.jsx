import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

import axios from 'axios';

const App = () => {

  const [repos, setRepos] = useState([]);

  const Server = 'http://localhost:1128/repos';

  const search = (term) => {
    console.log(`${term} was searched`);
    // should send POST request
    axios.post(Server, {term})
      .then((response) => {
        // response should be an updated list of repos in database
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos}/>
      <Search onSearch={search}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));