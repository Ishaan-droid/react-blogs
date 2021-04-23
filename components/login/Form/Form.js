import React, { useState } from 'react';
import './index.css';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { STORE_DATA } from '../../../store/actions';

const Form = props => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleUserName = e => {
    setForm({
      ...form,
      username: e.target.value,
    });
  };

  const handlePassword = e => {
    setForm({
      ...form,
      password: e.target.value,
    });
  };

  return (
    <div className="form-style">
      <div className="field_style">
        <label>Username</label>
        <br />
        <input type="text" name="username" autoComplete="off" onChange={handleUserName} />
      </div>
      <div className="field_style">
        <label>Password</label>
        <br />
        <input type="password" name="password" onChange={handlePassword} />
      </div>
      <div>
        {form.username === 'test' && form.password === 'test' ? (
          <Link to="./createBlog">
            <Button
              variant="primary"
              size="lg"
              onClick={() => props.storeData(form.username, form.password)}
            >
              Login
            </Button>
          </Link>
        ) : (
          <Button variant="primary" size="lg" disabled>
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.formData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    storeData: (username, password) =>
      dispatch({
        type: STORE_DATA,
        payload: {
          userName: username,
          password: password,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
