import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SearchIcon from "../../assets/searchicon.png";
import { Form, FormControl } from "react-bootstrap";
import { Moviedata } from "../Context/Context";

function SearchModel() {
  const { setSearch, HandleSearch, show, handleShow, handleClose } =
    useContext(Moviedata);

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
              <FormControl
                type="text"
                placeholder="search here"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="m-2"
              onClick={HandleSearch}
            >
              Search
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SearchModel;
