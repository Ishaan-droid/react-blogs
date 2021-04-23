import React from 'react';
import './index.css';
import introModel from '../../../images/intro-model.jpeg';
import { Row, Col } from 'react-bootstrap';
import Content from './content/content';

const Intro = () => {
  return (
    <React.Fragment>
      <div className="intro-style">
        <Row noGutters>
          <Col lg={6} md={6} xs={12} className="img-style">
            <img src={introModel} alt="intro-model" />
          </Col>
          <Col lg={6} md={6} xs={12}>
            <Content />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};
export default Intro;
