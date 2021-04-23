import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { CLOSE_MODAL, EDIT_MODAL, updateBlog } from '../../store/actions';

const Pop = props => {
  const [newBlog, setNewBlog] = useState();

  return (
    <React.Fragment>
      <Modal show={props.modal} onHide={props.closeModal}>
        {props.editModal ? (
          <textarea
            rows="10"
            defaultValue={props.body}
            onChange={e => setNewBlog(e.target.value)}
          />
        ) : (
          <Modal.Body id={props.id}> {props.body} </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="warning" onClick={props.controlEditModal}>
            Edit
          </Button>
          <Button variant="primary" onClick={() => props.updateBlog(props.id, newBlog)}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={props.closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    modal: state.modal,
    editModal: state.editModal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch({ type: CLOSE_MODAL }),
    controlEditModal: () => dispatch({ type: EDIT_MODAL }),
    updateBlog: (id, body) => dispatch(updateBlog(id, body)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pop);
