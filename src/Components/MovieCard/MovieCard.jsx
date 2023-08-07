import { Card, Container } from "react-bootstrap";
import { Moviedata } from "../Context/Context";
import { useContext } from "react";
import "./MovieCard.css";
const MovieCard = () => {
  const { filterData } = useContext(Moviedata);
  console.log(filterData);

  return (
    <>
      <h1
        style={{ color: "#E40813", textAlign: "center", padding: "20px" }}
        className="mt-5"
      >
        Trending Movie
      </h1>
      <Container className="Card_main">
        {filterData.map((data, index) => (
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
              <h4>Time {data.show.schedule.time !== "" ? data.show.schedule.time : '00:00'}min</h4>
              <button className="button-2">Watch More</button>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default MovieCard;
