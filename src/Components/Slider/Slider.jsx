import { useContext } from "react";
import { Container, Carousel } from "react-bootstrap";
import { Moviedata } from "../Context/Context";
import "./Slider.css";
const MySlider = () => {
  const { Allapidata } = useContext(Moviedata);
  const filterData = Allapidata.filter((item) => {
    return item.show.image !== null;
  });

  return (
    <Container>
      <Carousel>
        {filterData.map((data, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 sliderimage"
              src={data.show.image?.original}
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default MySlider;
