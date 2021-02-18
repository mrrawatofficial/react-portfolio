import { Link } from "react-scroll";

var cubes = [1, 2, 3, 4, 5];

const index = () => {
  return (
    <section style={{ position: "relative", overflow: "hidden" }} id="banner">
      <div className="background">
        {/* <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div> */}
        {cubes.map((item, i) => (
          <div key={i} className="cube"></div>
        ))}
      </div>

      <div className="banner--section">
        <div className="banner--content">
          <h1>We are India Based Web Development Company</h1>
          <p>
            Our team is experienced with advanced latest technologies and we try
            to use suitable ones in our client projects! We try not to let your
            project down anyway!
          </p>
          <div className="banner--btn">
            <Link to="about" className="cus-btn secondary-btn m-1 my-md-0">
              <span>More About</span>
            </Link>
            <Link to="contact" className="cus-btn primary-btn m-1 my-md-0">
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
