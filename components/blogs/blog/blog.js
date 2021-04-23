import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';

const Blog = props => {
  return (
    <Container>
      <Row className="row_style">
        <div className="body-style">
          <p>{props.body}</p>
          <Link to={'/blogs/' + props.uuid}>
            <Button variant="primary" className="button_style">
              Read More
            </Button>
          </Link>
          <Button variant="outline-primary" className="button_style" onClick={props.blogEdit}>
            Edit
          </Button>
          <Button variant="danger" className="button_style" onClick={props.blogDelete}>
            Delete
          </Button>
          {props.children}
        </div>
      </Row>
    </Container>
  );
};

export default Blog;
