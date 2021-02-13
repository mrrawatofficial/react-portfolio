import Ztext from "react-ztext";
const index = () => {
  return (
    <section className="about--section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 className="about--sub--title">ABOUT US</h5>
            <h3 className="about--title">
              Leading the way in Creative Digital Agency
            </h3>
            <div className="bar"></div>
            <div className="about--content">
              <div>
                <i className="fas fa-user"></i>
              </div>
              <div>
                <h4>Best Digital Agency in the World</h4>
                <p>
                  We provide marketing services to startups and small businesses
                  to looking for a partner of their digital media, design &
                  development, lead generation and communications requirents. We
                  work with you, not for you. Although we have a great
                  resources.
                </p>
                <p>
                  We are an experienced and talented team of passionate
                  consultants who live and breathe search engine marketing.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-img">
              {/* <Ztext
                depth="1rem"
                direction="both"
                event="pointer"
                eventRotation="10deg"
                eventDirection="default"
                fade={false}
                layers={5}
                perspective="500px"
              >
                <span role="img" className="zImg"> */}
              <img
                src="https://gunter-react.envytheme.com/static/media/about1.07dcdda2.jpg"
                className="about-img-1"
              />
              {/* </span>
              </Ztext> */}
              <img
                src="https://gunter-react.envytheme.com/static/media/about2.01166b2e.jpg"
                className="about-img-2"
              />
              <span className="about-img-shape"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
