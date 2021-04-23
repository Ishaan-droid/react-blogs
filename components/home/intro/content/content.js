import React from 'react';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Button } from 'react-bootstrap';
import './index.css';
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <div className="content-style">
      <Row noGutters>
        <FontAwesomeIcon icon={faQuoteLeft} className="quote_color" />
      </Row>
      <Row noGutters className="content">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.
        </p>
      </Row>
      <Row noGutters>
        <FontAwesomeIcon icon={faQuoteRight} className="quote_color" />
      </Row>
      <Row className="button-style">
        <Link to="/blogs">
          <Button variant="primary" size="lg">
            View Blogs
          </Button>
        </Link>
      </Row>
    </div>
  );
};

export default Content;
