import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../../home/Header/header';
import Loader from '../../spinner/spinner';

const ReadBlog = props => {
  let id = props.match.params.id;

  const [blog, setBlog] = useState();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    axios
      .get(`https://react-blogs-7adb1-default-rtdb.firebaseio.com/blogs/${id}.json`)
      .then(res => {
        setBlog(res.data);
        setLoad(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  return (
    <React.Fragment>
      <Header />
      {load ? <Loader /> : <h5>{blog.body}</h5>}
    </React.Fragment>
  );
};

export default ReadBlog;
