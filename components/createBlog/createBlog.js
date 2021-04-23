import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Header from '../home/Header/header';
import { Button, Row } from 'react-bootstrap';
import { postBlog } from '../../store/actions';
import { Link } from 'react-router-dom';
import './index.css';

const CreateBlog = props => {
  const [blog, setBlog] = useState();

  return (
    <React.Fragment>
      {props.data.username === 'test' && props.data.password === 'test' ? (
        <div>
          <Header />
          <div className="create_blog">
            <Row>
              <textarea
                name="createBlog"
                rows="10"
                cols="70"
                onChange={e => setBlog(e.target.value)}
              />
            </Row>
            <Row style={{ flexDirection: 'row-reverse' }}>
              <Link to="/blogs">
                <Button
                  variant="primary"
                  size="lg"
                  className="button_style"
                  onClick={() => props.postBlog(blog)}
                >
                  Post
                </Button>
              </Link>
            </Row>
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    data: state.formData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postBlog: blog => dispatch(postBlog(blog)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlog);
