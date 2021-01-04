import React from 'react';
import {Modal,Button,Form} from 'react-bootstrap';


const FormModal = ({show,onClose}) => (

    <Modal
      show={show}
      onHide={()=> onClose(false)}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Form>
        <Modal.Header closeButton>
          <Modal.Title>Enter your Comment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Comment</Form.Label>   
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={()=> onClose(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> onClose(false)}>
            Added Comment
          </Button>
        </Modal.Footer>

      </Form>
    </Modal>

  )


export default FormModal;