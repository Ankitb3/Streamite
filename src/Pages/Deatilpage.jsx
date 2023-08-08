import { useContext, useState } from "react";
import { Moviedata } from "../Components/Context/Context";
import { Col, Container, Form, Modal, Row } from "react-bootstrap";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import "./Detailpage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Deatilpage = () => {
  const { detail } = useContext(Moviedata);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const replaceunique = detail.show?.summary.replace(/<[^>]*>/g, "");
  const backgroundStyle = {
    backgroundImage: `url(${detail.show?.image.original})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  function HandleSubmit(e) {
    e.preventDefault();
    toast.success("TICKET BOOK SUCCESSFULLY🥳🥳🥳", {
      position: toast.POSITION.TOP_CENTER,
    });
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }
  return (
    <>
      <div className="movie-detail" style={backgroundStyle}>
        <ToastContainer />
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ticket Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={HandleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Movie Name</Form.Label>
                <Form.Control type="text" value={detail?.show.name} autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>genres</Form.Label>
                <Form.Control
                  type="text"
                  value={detail?.show.genres[0]}
                  autoFocus
                />
              </Form.Group>
              <button type="submit" className="button-2">
                BOOK NOW
              </button>
            </form>
          </Modal.Body>
        </Modal>
        <Container className="Container_card">
          <Row>
            <Col md={4}>
              <img
                src={detail.show?.image.original}
                alt={"fdfd"}
                className="poster"
                height={200}
              />
            </Col>
            <Col
              md={8}
              className="Card_text text-black"
              style={{ marginTop: "8rem" }}
            >
              <h2 className="fs-1 ">{detail.show?.name}</h2>
              <p className="fs-3">
                <strong>Summary:</strong> {replaceunique}
              </p>
              <p className="fs-4">
                <span>Rating</span> -⭐⭐⭐⭐
                {detail?.show?.rating.average == null
                  ? "2.2"
                  : detail?.show?.rating.average}
              </p>
              <p className="fs-4">
                <span>genres</span> -{detail?.show?.genres.join(",")}
              </p>
              <button className="button-2" onClick={handleShow}>
                BOOK TICKET
              </button>
            </Col>
          </Row>
          <Footer />
        </Container>
      </div>
    </>
  );
};

export default Deatilpage;
