import { useState } from "react";

const Index = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [message, setMessage] = useState("");
  const [issubmiting, setissubmiting] = useState(false);
  const [successmsg, setSuccessmsg] = useState(false);
  const [error, seterror] = useState("");

  const handlefName = (e) => {
    setfirstName(e.target.value);
  };
  const handlelName = (e) => {
    setlastName(e.target.value);
  };
  const handlelemail = (e) => {
    setemail(e.target.value);
  };
  const handlelmessage = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //setissubmiting(!issubmiting);
    if (firstName.length < 3) {
      seterror("Common..! You must have a name 😅 ");
      setTimeout(() => {
        seterror("");
      }, 3000);
    } else if (email.length < 5) {
      seterror("Common..! Please enter complete email..!  😅 ");
      setTimeout(() => {
        seterror("");
      }, 3000);
    } else if (message == "") {
      seterror("Common..! Please, Write some Message..  😅 ");
      setTimeout(() => {
        seterror("");
      }, 3000);
    } else if (message.length < 10) {
      seterror("Common..! Please, Write more words..  😅 ");
      setTimeout(() => {
        seterror("");
      }, 3000);
    } else {
      setissubmiting(!issubmiting);
      setTimeout(() => {
        setfirstName("");
        setlastName("");
        setemail("");
        setMessage("");
        setissubmiting(false);
        setSuccessmsg(true);
      }, 2000);
      setTimeout(() => {
        setSuccessmsg(false);
      }, 6000);
    }
  };

  return (
    <section id="contact" className="contact--section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-8">
            <h5 className="about--sub--title">Contact</h5>
            <h3 className="about--title">Let's Talk</h3>
            <div className="bar"></div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-8 form-box">
              <h5 className="text-danger text-center">{error}</h5>
              <div className="form-group">
                <input
                  type="text"
                  className="input"
                  placeholder="First Name"
                  onChange={handlefName}
                  value={firstName}
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Last Name"
                  onChange={handlelName}
                  value={lastName}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="input"
                  placeholder="E-mail"
                  onChange={handlelemail}
                  value={email}
                />
              </div>
              <div className="form-group">
                <textarea
                  className="textarea"
                  placeholder="Message..."
                  rows="6"
                  onChange={handlelmessage}
                  value={message}
                ></textarea>
              </div>
              <div className="form-group text-center">
                {successmsg ? (
                  <span className="text-success">
                    Message Sent Successfully
                  </span>
                ) : (
                  " "
                )}
                {issubmiting ? (
                  <button type="submit" disabled className="cus-btn">
                    <span>Sending Message...</span>
                  </button>
                ) : (
                  <button type="submit" className="cus-btn primary-btn">
                    <span>Send Message</span>
                  </button>
                )}
              </div>
            </div>
            <div className="col-md-4 p-0 mt-3 mt-md-0 pl-md-3">
              <div className="form-box">
                <div>
                  <p className="text-secondary">
                    Fill up the form and our Team will get back to you as soon
                    as posible..
                  </p>
                  <p className="text-secondary">
                    Meanwhile you can find us for any query..!!
                  </p>
                </div>
                <div className="address">
                  <a
                    href="tel:+918285515165"
                    className="btn rounded text-white p-3"
                  >
                    <i className="fa fa-phone pr-3" />
                    +91 8285515165
                  </a>
                  <a
                    href="mailto:rahulrawat520@gmail.com"
                    className="btn rounded text-white p-3"
                  >
                    <i className="fa fa-envelope pr-3" />
                    rahulrawat520@gmail.com
                  </a>
                  {/* <a href="#" className="btn rounded text-white p-3">
                    <i className="fa fa-map-marker icon text-primary pr-3" />
                    102 street 2714 Don
                  </a> */}
                </div>
                {/* <div className="pt-lg-4 d-flex flex-row justify-content-start">
                  <div className="pad-icon">
                    <a className="fa fa-facebook text-white" href="#" />
                  </div>
                  <div className="pad-icon">
                    <a className="fa fa-twitter text-white" href="#" />
                  </div>
                  <div className="pad-icon">
                    <a className="fa fa-instagram text-white" href="#" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Index;
