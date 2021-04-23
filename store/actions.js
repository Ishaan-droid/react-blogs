import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const STORE_DATA = 'STORE_DATA';
const POST_BLOG = 'POST_BLOG';
const DISPLAY_BLOG = 'DISPLAY_BLOG';
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
const EDIT_MODAL = 'EDIT_MODAL';
const UPDATE_BLOG = 'UPDATE_BLOG';
const DELETE_BLOG = 'DELETE_BLOG';

export const postBlog = blog => {
  return async dispatch => {
    axios
      .post('https://react-blogs-7adb1-default-rtdb.firebaseio.com/blogs.json', {
        id: uuidv4(),
        body: blog,
      })
      .then(response => {
        return dispatch({
          type: POST_BLOG,
          payload: {
            id: response.id,
            body: response.body,
          },
        });
      })
      .catch(err => console.log(err));
  };
};

export const displayBlog = () => {
  return dispatch => {
    axios
      .get('https://react-blogs-7adb1-default-rtdb.firebaseio.com/blogs.json')
      .then(response => {
        return dispatch({
          type: DISPLAY_BLOG,
          payload: {
            data: response.data,
          },
        });
      })
      .catch(err => console.log(err));
  };
};

export const updateBlog = (id, blog) => {
  return dispatch => {
    axios
      .patch(`https://react-blogs-7adb1-default-rtdb.firebaseio.com/blogs/${id}.json`, {
        id: id,
        body: blog,
      })
      .then(response => {
        return dispatch({
          type: UPDATE_BLOG,
          payload: {
            body: response.body,
          },
        });
      })
      .catch(err => console.log(err));
  };
};

export const deleteBlog = id => {
  return dispatch => {
    axios
      .delete(`https://react-blogs-7adb1-default-rtdb.firebaseio.com/blogs/${id}.json`)
      .then(response => {
        return dispatch({
          type: DELETE_BLOG,
        });
      })
      .catch(err => console.log(err));
  };
};

export { STORE_DATA, OPEN_MODAL, CLOSE_MODAL, EDIT_MODAL, UPDATE_BLOG, DELETE_BLOG };
