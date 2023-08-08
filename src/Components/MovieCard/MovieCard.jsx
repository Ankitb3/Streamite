import { Card, Container, Form, FormControl } from "react-bootstrap";
import { Moviedata } from "../Context/Context";
import { useContext } from "react";
import "./MovieCard.css";
const MovieCard = () => {
  const { filterData, Showdetail, searchfilter, setSearch } =
    useContext(Moviedata);
  return (
    <>
      <h1
        style={{ color: "#E40813", textAlign: "center", padding: "20px" }}
        className="mt-5"
      >
        Trending Movie
      </h1>
      <Container className="w-50 p-4">
        <Form>
          <Form.Group controlId="formSearch">
            <FormControl
              type="text"
              placeholder="SEARCH BY NAME"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Container>
      <Container className="Card_main">
        {searchfilter.length == 0 ? (
          filterData.map((data, index) => (
            <Card
              key={index}
              style={{ width: "18rem", margin: "10px", cursor: "pointer" }}
              className="Card"
            >
              <Card.Img
                className="Card_img"
                variant="top"
                src={data.show.image?.original}
              />
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title className="fs-2">{data.show.name}</Card.Title>
                <h4
                  style={{
                    backgroundColor:
                      data.show.rating.average > 5 ? "red" : "yellow",
                    position: "relative",
                    bottom: "23rem",
                    left: "40%",
                    borderRadius: "50%",
                  }}
                >
                  {data.show.rating.average == null
                    ? 2.2
                    : data.show.rating.average}{" "}
                </h4>
                <h4>
                  Time{" "}
                  {data.show.schedule.time !== ""
                    ? data.show.schedule.time
                    : "00:00"}
                  min
                </h4>
                <button className="button-2" onClick={() => Showdetail(data)}>
                  Watch
                </button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <Card
            style={{ width: "18rem", margin: "10px", cursor: "pointer" }}
            className="Card"
          >
            <Card.Img
              className="Card_img"
              variant="top"
              src={searchfilter[0]?.show?.image?.original}
            />
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title className="fs-2">
                {searchfilter[0]?.show?.name}
              </Card.Title>
              <h4
                style={{
                  backgroundColor:
                    searchfilter[0]?.show?.rating.average > 5
                      ? "red"
                      : "yellow",
                  position: "relative",
                  bottom: "23rem",
                  left: "40%",
                  borderRadius: "50%",
                }}
              >
                {searchfilter[0]?.show?.rating.average == null
                  ? 2.2
                  : searchfilter[0]?.show?.rating.average}{" "}
              </h4>
              <h4>
                Time{" "}
                {searchfilter[0]?.show?.schedule.time !== ""
                  ? searchfilter[0]?.show?.schedule.time
                  : "00:00"}
                min
              </h4>
              <button
                className="button-2"
                onClick={() => Showdetail(searchfilter[0])}
              >
                Watch
              </button>
            </Card.Body>
          </Card>
        )}
      </Container>
    </>
  );
};

export default MovieCard;
