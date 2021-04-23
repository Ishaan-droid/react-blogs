import React, { useEffect } from 'react';
import Header from '../home/Header/header';
import { OPEN_MODAL, displayBlog, deleteBlog } from '../../store/actions';
import { connect } from 'react-redux';
import Blog from './blog/blog';
import Loader from '../spinner/spinner';
import Pop from '../modal/modal';
import './index.css';

const Blogs = props => {
  const {
    blogs: [data],
  } = props;

  let readBlog, readKey;
  const finalBlog = [];

  useEffect(() => {
    props.displayBlogs();
    // eslint-disable-next-line
  }, []);

  if (data) readBlog = Object.values(data);

  if (data) readKey = Object.keys(data);

  data && readBlog.forEach((cur, idx) => finalBlog.push({ ...cur, fb_id: readKey[idx] }));

  return (
    <React.Fragment>
      <Header />
      {props.load ? (
        <Loader />
      ) : (
        data &&
        finalBlog.map(cur => {
          return (
            <Blog
              key={cur.id}
              body={cur.body}
              uuid={cur.fb_id}
              blogEdit={() => props.openModal(cur.fb_id, cur.body)}
              blogDelete={() => props.deleteBlog(cur.fb_id)}
            >
              <Pop body={props.modalBody} id={props.modalId} />
            </Blog>
          );
        })
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    blogs: state.readBlogs,
    load: state.load,
    modalBody: state.modalBody,
    modalId: state.modalId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    displayBlogs: () => dispatch(displayBlog()),
    openModal: (id, body) =>
      dispatch({
        type: OPEN_MODAL,
        payload: {
          id: id,
          body: body,
        },
      }),
    deleteBlog: id => dispatch(deleteBlog(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
