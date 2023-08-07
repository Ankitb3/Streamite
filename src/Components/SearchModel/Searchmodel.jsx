import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SearchIcon from "../../assets/searchicon.png";
import { Form, FormControl } from "react-bootstrap";

function SearchModel() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img src={SearchIcon} height={30} onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formSearch">
              <FormControl type="text" placeholder="search here" />
            </Form.Group>
            <Button variant="primary" type="submit" className="m-2">
              Search
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SearchModel;
