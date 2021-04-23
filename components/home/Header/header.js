import React from 'react';
import './index.css';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-style">
      <FontAwesomeIcon className="blog-icon" icon={faBlog} />
      <Link to="/">
        <h1>React Blogs</h1>
      </Link>
    </div>
  );
};

export default Header;
