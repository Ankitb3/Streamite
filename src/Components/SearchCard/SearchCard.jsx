import { Card, Container } from "react-bootstrap";
import { Moviedata } from "../Context/Context";
import { useContext } from "react";
import "./SearchCard.css";
const SearchCard = () => {
  const { Showdetail, Searchdata } = useContext(Moviedata);

  return (
    <>
      <Container className="Card_main">
        <Card
          style={{ width: "18rem", margin: "10px", cursor: "pointer" }}
          className="Card"
        >
          <Card.Img
            className="Card_img"
            variant="top"
            src={Searchdata[0]?.show?.image?.original}
          />
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title className="fs-2">
              {Searchdata[0]?.show?.name}
            </Card.Title>
            <h4
              style={{
                backgroundColor:
                  Searchdata[0]?.show?.rating.average > 5 ? "red" : "yellow",
                position: "relative",
                bottom: "23rem",
                left: "40%",
                borderRadius: "50%",
              }}
            >
              {Searchdata[0]?.show?.rating.average == null
                ? 2.2
                : Searchdata[0]?.show?.rating.average}{" "}
            </h4>
            <h4>
              Time{" "}
              {Searchdata[0]?.show?.schedule.time !== ""
                ? Searchdata[0]?.show?.schedule.time
                : "00:00"}
              min
            </h4>
            <button
              className="button-2"
              onClick={() => Showdetail(Searchdata[0])}
            >
              Watch
            </button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default SearchCard;
