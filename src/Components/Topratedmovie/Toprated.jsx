import { useContext } from "react";
import { Moviedata } from "../Context/Context";
import { Container } from "react-bootstrap";
import "./Toprated.css";
import { Link } from "react-router-dom";
const Toprated = () => {
  const { filterData } = useContext(Moviedata);
  const highestRatingShow = filterData.filter((item) => {
    return item?.show?.rating.average > 8;
  });
  const removetag = highestRatingShow[0]?.show?.summary
    .replace(/<[^>]*>/g, "")
    .slice(0, 80);
  console.log(removetag);

  return (
    <Container>
      <div className="main_top">
        <img
          src={highestRatingShow[0]?.show?.image.original}
          alt="sdsds"
          height={500}
          className="Top_image"
          style={{ float: "left", textAlign: "center", padding: "4px" }}
        />
        <h1
          style={{ borderBottom: "2px solid #e40813", fontFamily: "cursive" }}
        >
          Top Rated Movie Of The Year
        </h1>
        <h2>{highestRatingShow[0]?.show?.name}</h2>
        <p className="fs-4">{removetag}.</p>
        <p className="fs-4">
          <span>Rating</span> -⭐⭐⭐⭐
          {highestRatingShow[0]?.show?.rating.average}
        </p>

        <p className="fs-4">
          <span>Duration</span> -{highestRatingShow[0]?.show?.schedule.time}min
        </p>

        <p className="fs-4">
          <span>genres</span> -{highestRatingShow[0]?.show?.genres.join(",")}
        </p>
        <button className="button-2 p-3">
          <Link
            to={highestRatingShow[0]?.show?.url}
            style={{ color: "black" }}
          >
            Play Now
          </Link>
        </button>
      </div>
    </Container>
  );
};

export default Toprated;
