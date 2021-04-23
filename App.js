import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Blogs from './components/blogs/blogs';
import Login from './components/login/login';
import CreateBlog from './components/createBlog/createBlog';
import ReadBlog from './components/blogs/readBlog/readBlog';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/blogs/:id" component={ReadBlog} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/createBlog" component={CreateBlog} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
