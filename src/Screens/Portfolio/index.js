import { useState } from "react";
import OwlCarousel from "react-owl-carousel2";

const options = {
  items: 4,
  nav: true,
  rewind: true,
  autoplay: true,
  margin: 10,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
      nav: true,
      loop: false,
    },
  },
};

const Index = () => {
  const [sliders, setSliders] = useState([
    {
      id: "1",
      imgurl:
        "https://images.pexels.com/photos/343701/pexels-photo-343701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Project 1",
      type: "Web Design",
    },
    {
      id: "2",
      imgurl:
        "https://images.pexels.com/photos/1617294/pexels-photo-1617294.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Project 2",
      type: "Web Design",
    },
    {
      id: "3",
      imgurl:
        "https://images.pexels.com/photos/4574925/pexels-photo-4574925.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Project 3",
      type: "Web Design",
    },
    {
      id: "4",
      imgurl:
        "https://images.pexels.com/photos/2874111/pexels-photo-2874111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Project 4",
      type: "Web Design",
    },
    {
      id: "5",
      imgurl:
        "https://images.pexels.com/photos/158330/steppe-eagle-eagle-steppe-nature-158330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Project 5",
      type: "Web Design",
    },
    {
      id: "6",
      imgurl:
        "https://images.pexels.com/photos/2074746/pexels-photo-2074746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Project 6",
      type: "Web Design",
    },
  ]);
  return (
    <section id="portfolio" className="protfolio--section">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8">
            <h5 className="about--sub--title">portfolio</h5>
            <h3 className="about--title">Some of our latest Projects</h3>
            <div className="bar"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel options={options}>
              {sliders.map((slider) => (
                <div className="portfolio--item" key={slider.id}>
                  <img src={slider.imgurl} alt={slider.title} />
                  <div className="portfolio--text">
                    <h3>{slider.title}</h3>
                    <p>{slider.type}</p>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
