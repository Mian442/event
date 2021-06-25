import axios from "axios";
import { useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Saving from "./Saving";
import moment from "moment";
const url = "http://localhost:3000/api";
const SUCCESS = (msg) => {
  return toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const ERROR = (msg) => {
  return toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
function App() {
  const initialManager = {
    society_name: "",
    head_name: "",
    email: "",
    password: "",
  };
  const [manager, setManager] = useState(initialManager);
  const initialOrganizer = {
    society_name: "",
    head_name: "",
    email: "",
    password: "",
  };
  const [organizer, setOrganizer] = useState(initialOrganizer);
  const initialEvent = {
    event_name: "",
    event_desc: "",
    pic: "",
    date: new Date(),
    start_time: new Date(),
    end_time: new Date(),
    last_time: new Date(),
  };
  const [event, setEvent] = useState(initialEvent);
  const initialContactUs = {
    name: "",
    subject: "",
    email: "",
    message: "",
  };
  const [contact, setContact] = useState(initialContactUs);
  const [model, setModel] = useState(false);
  const managerHandler = async () => {
    setModel(true);
    await axios
      .post(url + "/manager", manager)
      .then((res) => {
        SUCCESS("Manager is Added!");
        setModel(false);
        setManager(initialManager);
      })
      .catch((error) => {
        if (error.response) {
          ERROR(error.response.data);
        } else if (error.request) {
          ERROR(error.request.data);
        } else {
          ERROR(error.message);
        }
        setModel(false);
      });
  };
  const eventHandler = async () => {
    console.log(event);
    setModel(true);
    await axios
      .post(url + "/events", event)
      .then((res) => {
        SUCCESS("Event is Added");
        setEvent(initialEvent);
        setModel(false);
      })
      .catch((error) => {
        if (error.response) {
          ERROR(error.response.data);
        } else if (error.request) {
          ERROR(error.request.data);
        } else {
          ERROR(error.message);
        }
        setModel(false);
      });
  };
  const organizerHandler = async () => {
    setModel(true);
    await axios
      .post(url + "/organizer", organizer)
      .then((res) => {
        SUCCESS("Organizer is Added!");
        setModel(false);
        setOrganizer(initialOrganizer);
      })
      .catch((error) => {
        if (error.response) {
          ERROR(error.response.data);
        } else if (error.request) {
          ERROR(error.request.data);
        } else {
          ERROR(error.message);
        }
        setModel(false);
      });
  };
  const contactUsHandler = async () => {
    setModel(true);
    await axios
      .post(url + "/contactUs", contact)
      .then((res) => {
        SUCCESS("Message Has been Delivered!");
        setModel(false);
        setContact(initialContactUs);
      })
      .catch((error) => {
        if (error.response) {
          ERROR(error.response.data);
        } else if (error.request) {
          ERROR(error.request.data);
        } else {
          ERROR(error.message);
        }
        setModel(false);
      });
  };
  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };
  return (
    <div className="App">
      <ToastContainer />
      <Saving visible={model} title="Registering" />
      <header id="header">
        <div className="container">
          <div id="logo" className="pull-left">
            <h1>
              <a href="#intro">
                Event<span>MS</span>
              </a>
            </h1>
            {/* <a href="index.html" className="scrollto"><img src="assets/img/logo.png" alt="" title=""></a> */}
          </div>

          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active">
                <a href="#intro">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#speakers">Organizers</a>
              </li>
              <li>
                <a href="#schedule">Schedule</a>
              </li>
              <li>
                <a href="#venue">Venue</a>
              </li>
              {/* <li><a href="#hotels">Hotels</a></li> */}
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#supporters">Sponsors</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li className="buy-tickets">
                <a href="#buy-tickets">Sign Up</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="intro">
        <div
          className="intro-container"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h1 className="mb-4 pb-0">
            Looking for how to plan an <br />
            <span>Event</span> or advice on event planning?
          </h1>
          <p className="mb-4 pb-0">You’ve come to the right place</p>
          {/* <a href="#" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a> */}
          <a href="#about" className="about-btn scrollto">
            About Us
          </a>
        </div>
      </section>

      <main id="main">
        <section id="about">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-12">
                <h2>About Us</h2>
                <p>
                  We’ve seen a lot of organizations’ events over the years, and
                  there are few steps we’ve identified as key to a successful
                  event. While we can't identify all of the details you’ll need
                  to think about, since much of it will depend on the type of
                  event you are holding, we can suggest some best practices that
                  are important to follow for any event.{" "}
                </p>
              </div>
              {/* <div className="col-lg-3">
            <h3>Where</h3>
            <p>Downtown Conference Center, New York</p>
          </div>
          <div className="col-lg-3">
            <h3>When</h3>
            <p>Monday to Wednesday<br>10-12 December</p>
          </div>  */}
            </div>
          </div>
        </section>

        <section id="speakers">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Event Organizers</h2>
              <p>Here are some of our Organizers</p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div
                  className="speaker"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="assets/img/speakers/1.jpg"
                    alt="Speaker 1"
                    className="img-fluid"
                  />
                  <div className="details">
                    <h3>
                      <a href="speaker-details.html">Brenden Legros</a>
                    </h3>
                    <p>Quas alias incidunt</p>
                    <div className="social">
                      <a href="">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  className="speaker"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <img
                    src="assets/img/speakers/2.jpg"
                    alt="Speaker 2"
                    className="img-fluid"
                  />
                  <div className="details">
                    <h3>
                      <a href="speaker-details.html">Hubert Hirthe</a>
                    </h3>
                    <p>Consequuntur odio aut</p>
                    <div className="social">
                      <a href="">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="speaker"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <img
                    src="assets/img/speakers/3.jpg"
                    alt="Speaker 3"
                    className="img-fluid"
                  />
                  <div className="details">
                    <h3>
                      <a href="speaker-details.html">Cole Emmerich</a>
                    </h3>
                    <p>Fugiat laborum et</p>
                    <div className="social">
                      <a href="">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="speaker"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="assets/img/speakers/4.jpg"
                    alt="Speaker 4"
                    className="img-fluid"
                  />
                  <div className="details">
                    <h3>
                      <a href="speaker-details.html">Jack Christiansen</a>
                    </h3>
                    <p>Debitis iure vero</p>
                    <div className="social">
                      <a href="">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="speaker"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <img
                    src="assets/img/speakers/5.jpg"
                    alt="Speaker 5"
                    className="img-fluid"
                  />
                  <div className="details">
                    <h3>
                      <a href="speaker-details.html">Alejandrin Littel</a>
                    </h3>
                    <p>Qui molestiae natus</p>
                    <div className="social">
                      <a href="">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="speaker"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <img
                    src="assets/img/speakers/6.jpg"
                    alt="Speaker 6"
                    className="img-fluid"
                  />
                  <div className="details">
                    <h3>
                      <a href="speaker-details.html">Willow Trantow</a>
                    </h3>
                    <p>Non autem dicta</p>
                    <div className="social">
                      <a href="">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="schedule" className="section-with-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Event Schedule</h2>
              <p>Here is our event schedule</p>
            </div>

            <ul
              className="nav nav-tabs"
              role="tablist"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#day-1"
                  role="tab"
                  data-toggle="tab"
                >
                  Day 1
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#day-2"
                  role="tab"
                  data-toggle="tab"
                >
                  Day 2
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#day-3"
                  role="tab"
                  data-toggle="tab"
                >
                  Day 3
                </a>
              </li>
            </ul>

            <h3 className="sub-heading">
              Voluptatem nulla veniam soluta et corrupti consequatur neque
              eveniet officia. Eius necessitatibus voluptatem quis labore
              perspiciatis quia.
            </h3>

            <div
              className="tab-content row justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                role="tabpanel"
                className="col-lg-9 tab-pane fade show active"
                id="day-1"
              >
                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>09:30 AM</time>
                  </div>
                  <div className="col-md-10">
                    <h4>Registration</h4>
                    <p>
                      Fugit voluptas iusto maiores temporibus autem numquam
                      magnam.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>10:00 AM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img
                        src="assets/img/speakers/1.jpg"
                        alt="Brenden Legros"
                      />
                    </div>
                    <h4>
                      Keynote <span>Brenden Legros</span>
                    </h4>
                    <p>Facere provident incidunt quos voluptas.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>11:00 AM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img
                        src="assets/img/speakers/2.jpg"
                        alt="Hubert Hirthe"
                      />
                    </div>
                    <h4>
                      Et voluptatem iusto dicta nobis.{" "}
                      <span>Hubert Hirthe</span>
                    </h4>
                    <p>
                      Maiores dignissimos neque qui cum accusantium ut sit sint
                      inventore.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>12:00 AM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img
                        src="assets/img/speakers/3.jpg"
                        alt="Cole Emmerich"
                      />
                    </div>
                    <h4>
                      Explicabo et rerum quis et ut ea.{" "}
                      <span>Cole Emmerich</span>
                    </h4>
                    <p>
                      Veniam accusantium laborum nihil eos eaque accusantium
                      aspernatur.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>02:00 PM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img
                        src="assets/img/speakers/4.jpg"
                        alt="Jack Christiansen"
                      />
                    </div>
                    <h4>
                      Qui non qui vel amet culpa sequi.{" "}
                      <span>Jack Christiansen</span>
                    </h4>
                    <p>
                      Nam ex distinctio voluptatem doloremque suscipit iusto.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>03:00 PM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img
                        src="assets/img/speakers/5.jpg"
                        alt="Alejandrin Littel"
                      />
                    </div>
                    <h4>
                      Quos ratione neque expedita asperiores.{" "}
                      <span>Alejandrin Littel</span>
                    </h4>
                    <p>
                      Eligendi quo eveniet est nobis et ad temporibus odio quo.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>04:00 PM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img
                        src="assets/img/speakers/6.jpg"
                        alt="Willow Trantow"
                      />
                    </div>
                    <h4>
                      Quo qui praesentium nesciunt <span>Willow Trantow</span>
                    </h4>
                    <p>
                      Voluptatem et alias dolorum est aut sit enim neque
                      veritatis.
                    </p>
                  </div>
                </div>
              </div>

              <div
                role="tabpanel"
                className="col-lg-9  tab-pane fade"
                id="day-2"
              >
                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>10:00 AM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img
                        src="assets/img/speakers/1.jpg"
                        alt="Brenden Legros"
                      />
                    </div>
                    <h4>
                      Libero corrupti explicabo itaque.{" "}
                      <span>Brenden Legros</span>
                    </h4>
                    <p>Facere provident incidunt quos voluptas.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>11:00 AM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img
                        src="assets/img/speakers/2.jpg"
                        alt="Hubert Hirthe"
                      />
                    </div>
                    <h4>
                      Et voluptatem iusto dicta nobis.{" "}
                      <span>Hubert Hirthe</span>
                    </h4>
                    <p>
                      Maiores dignissimos neque qui cum accusantium ut sit sint
                      inventore.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>12:00 AM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img
                        src="assets/img/speakers/3.jpg"
                        alt="Cole Emmerich"
                      />
                    </div>
                    <h4>
                      Explicabo et rerum quis et ut ea.{" "}
                      <span>Cole Emmerich</span>
                    </h4>
                    <p>
                      Veniam accusantium laborum nihil eos eaque accusantium
                      aspernatur.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>02:00 PM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img
                        src="assets/img/speakers/4.jpg"
                        alt="Jack Christiansen"
                      />
                    </div>
                    <h4>
                      Qui non qui vel amet culpa sequi.{" "}
                      <span>Jack Christiansen</span>
                    </h4>
                    <p>
                      Nam ex distinctio voluptatem doloremque suscipit iusto.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>03:00 PM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img
                        src="assets/img/speakers/5.jpg"
                        alt="Alejandrin Littel"
                      />
                    </div>
                    <h4>
                      Quos ratione neque expedita asperiores.{" "}
                      <span>Alejandrin Littel</span>
                    </h4>
                    <p>
                      Eligendi quo eveniet est nobis et ad temporibus odio quo.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>04:00 PM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img
                        src="assets/img/speakers/6.jpg"
                        alt="Willow Trantow"
                      />
                    </div>
                    <h4>
                      Quo qui praesentium nesciunt <span>Willow Trantow</span>
                    </h4>
                    <p>
                      Voluptatem et alias dolorum est aut sit enim neque
                      veritatis.
                    </p>
                  </div>
                </div>
              </div>

              <div
                role="tabpanel"
                className="col-lg-9  tab-pane fade"
                id="day-3"
              >
                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>10:00 AM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img
                        src="assets/img/speakers/2.jpg"
                        alt="Hubert Hirthe"
                      />
                    </div>
                    <h4>
                      Et voluptatem iusto dicta nobis.{" "}
                      <span>Hubert Hirthe</span>
                    </h4>
                    <p>
                      Maiores dignissimos neque qui cum accusantium ut sit sint
                      inventore.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>11:00 AM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img
                        src="assets/img/speakers/3.jpg"
                        alt="Cole Emmerich"
                      />
                    </div>
                    <h4>
                      Explicabo et rerum quis et ut ea.{" "}
                      <span>Cole Emmerich</span>
                    </h4>
                    <p>
                      Veniam accusantium laborum nihil eos eaque accusantium
                      aspernatur.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>12:00 AM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img
                        src="assets/img/speakers/1.jpg"
                        alt="Brenden Legros"
                      />
                    </div>
                    <h4>
                      Libero corrupti explicabo itaque.{" "}
                      <span>Brenden Legros</span>
                    </h4>
                    <p>Facere provident incidunt quos voluptas.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>02:00 PM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img
                        src="assets/img/speakers/4.jpg"
                        alt="Jack Christiansen"
                      />
                    </div>
                    <h4>
                      Qui non qui vel amet culpa sequi.{" "}
                      <span>Jack Christiansen</span>
                    </h4>
                    <p>
                      Nam ex distinctio voluptatem doloremque suscipit iusto.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>03:00 PM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img
                        src="assets/img/speakers/5.jpg"
                        alt="Alejandrin Littel"
                      />
                    </div>
                    <h4>
                      Quos ratione neque expedita asperiores.{" "}
                      <span>Alejandrin Littel</span>
                    </h4>
                    <p>
                      Eligendi quo eveniet est nobis et ad temporibus odio quo.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>04:00 PM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img
                        src="assets/img/speakers/6.jpg"
                        alt="Willow Trantow"
                      />
                    </div>
                    <h4>
                      Quo qui praesentium nesciunt <span>Willow Trantow</span>
                    </h4>
                    <p>
                      Voluptatem et alias dolorum est aut sit enim neque
                      veritatis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="venue">
          <div className="container-fluid" data-aos="fade-up">
            <div className="section-header">
              <h2>Event Venue</h2>
              <p>Event venue location info and gallery</p>
            </div>

            <div className="row no-gutters">
              <div className="col-lg-6 venue-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.308894892659!2d73.07935481468807!3d33.64915724631216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df952e017d0acd%3A0xf20be4a76782ceaf!2sPir%20Mehr%20Ali%20Shah%20Arid%20Agriculture%20University%20-%20PMAS%20AAUR!5e0!3m2!1sen!2s!4v1611858354315!5m2!1sen!2s"
                  width="600"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>

              <div className="col-lg-6 venue-info">
                <div className="row justify-content-center">
                  <div className="col-11 col-lg-8">
                    <h3>PMAS Arid Agriculture University, Rawalpindi</h3>
                    <p>
                      We’ve seen a lot of organizations’ events over the years,
                      and there are few steps we’ve identified as key to a
                      successful event.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="container-fluid venue-gallery-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a
                    href="assets/img/venue-gallery/8.jfif"
                    className="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="assets/img/venue-gallery/8.jfif"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a
                    href="assets/img/venue-gallery/10.jfif"
                    className="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="assets/img/venue-gallery/10.jfif"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a
                    href="assets/img/venue-gallery/11.jfif"
                    className="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="assets/img/venue-gallery/11.jfif"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a
                    href="assets/img/venue-gallery/12.jfif"
                    className="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="assets/img/venue-gallery/12.jfif"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a
                    href="assets/img/venue-gallery/18.jfif"
                    className="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="assets/img/venue-gallery/18.jfif"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a
                    href="assets/img/venue-gallery/19.jfif"
                    className="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="assets/img/venue-gallery/19.jfif"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a
                    href="assets/img/venue-gallery/20.jpg"
                    className="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="assets/img/venue-gallery/20.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a
                    href="assets/img/venue-gallery/21.jfif"
                    className="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="assets/img/venue-gallery/21.jfif"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Gallery</h2>
              <p>Check our gallery from the recent events</p>
            </div>
          </div>

          <div
            className="owl-carousel gallery-carousel"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <a
              href="assets/img/gallery/1.jpg"
              className="venobox"
              data-gall="gallery-carousel"
            >
              <img src="assets/img/gallery/1.png" alt="" />
            </a>
            <a
              href="assets/img/gallery/2.jpg"
              className="venobox"
              data-gall="gallery-carousel"
            >
              <img src="assets/img/gallery/2.jpg" alt="" />
            </a>
            <a
              href="assets/img/gallery/3.jpg"
              className="venobox"
              data-gall="gallery-carousel"
            >
              <img src="assets/img/gallery/3.jpg" alt="" />
            </a>
            <a
              href="assets/img/gallery/4.jpg"
              className="venobox"
              data-gall="gallery-carousel"
            >
              <img src="assets/img/gallery/4.jpg" alt="" />
            </a>
            <a
              href="assets/img/gallery/5.jpg"
              className="venobox"
              data-gall="gallery-carousel"
            >
              <img src="assets/img/gallery/5.jpg" alt="" />
            </a>
            <a
              href="assets/img/gallery/6.jpg"
              className="venobox"
              data-gall="gallery-carousel"
            >
              <img src="assets/img/gallery/6.jpg" alt="" />
            </a>
            <a
              href="assets/img/gallery/7.jpg"
              className="venobox"
              data-gall="gallery-carousel"
            >
              <img src="assets/img/gallery/7.jpg" alt="" />
            </a>
            <a
              href="assets/img/gallery/8.jfif"
              className="venobox"
              data-gall="gallery-carousel"
            >
              <img src="assets/img/gallery/8.jfif" alt="" />
            </a>
          </div>
        </section>

        <section id="supporters" className="section-with-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Sponsors</h2>
            </div>

            <div
              className="row no-gutters supporters-wrap clearfix"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img
                    src="assets/img/supporters/1.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img
                    src="assets/img/supporters/2.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img
                    src="assets/img/supporters/3.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img
                    src="assets/img/supporters/4.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img
                    src="assets/img/supporters/5.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img
                    src="assets/img/supporters/6.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img
                    src="assets/img/supporters/7.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img
                    src="assets/img/supporters/8.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="subscribe">
          <div className="container" data-aos="zoom-in">
            <div className="section-header">
              <h2>letter</h2>
              <p>Rerum numquam illum recusandae quia mollitia consequatur.</p>
            </div>

            <form method="POST" action="#">
              <div className="form-row justify-content-center">
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="col-auto">
                  <button type="submit">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </section>

        <section id="buy-tickets" className="section-with-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Sign Up</h2>
              <p>
                Velit consequatur consequatur inventore iste fugit unde omnis
                eum aut.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    {/* <h5 className="card-title text-muted text-uppercase text-center">Standard Access</h5> */}
                    <h6 className="card-price text-center">Add Event</h6>
                    <br />
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn"
                        data-toggle="modal"
                        data-target="#add-event"
                        data-ticket-type="standard-access"
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h6 className="card-price text-center">Add Manager</h6>
                    <br />
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn"
                        data-toggle="modal"
                        data-target="#add-manager"
                        data-ticket-type="pro-access"
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-price text-center">Add Organizer</h4>
                    <br />
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn"
                        data-toggle="modal"
                        data-target="#add-organizer"
                        data-ticket-type="premium-access"
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="add-event" className="modal fade">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Sign Up</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="event_name"
                        placeholder="Event Name"
                        value={event.event_name}
                        onChange={(e) =>
                          setEvent({ ...event, event_name: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="event_desc"
                        placeholder="Event Description"
                        value={event.event_desc}
                        onChange={(e) =>
                          setEvent({ ...event, event_desc: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="file"
                        className="form-control-file"
                        id="exampleFormControlFile1"
                        accept="image/*"
                        onChange={(e) => {
                          getBase64(e.target.files[0], (pic) => {
                            setEvent({
                              ...event,
                              pic,
                            });
                          });
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="date"
                        className="form-control"
                        name="date"
                        placeholder="Event Description"
                        value={event.date}
                        onChange={(e) =>
                          setEvent({ ...event, date: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Start Time</label>
                      <input
                        type="time"
                        className="form-control"
                        name="start_time"
                        value={event.start_time}
                        onChange={(e) =>
                          setEvent({ ...event, start_time: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>End Time</label>
                      <input
                        type="time"
                        className="form-control"
                        name="end_time"
                        value={event.end_time}
                        onChange={(e) =>
                          setEvent({ ...event, end_time: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Last date of registry</label>
                      <input
                        type="date"
                        className="form-control"
                        name="last_time"
                        value={event.last_time}
                        onChange={(e) =>
                          setEvent({ ...event, last_time: e.target.value })
                        }
                      />
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn"
                        style={{ background: "#000", color: "white" }}
                        onClick={eventHandler}
                      >
                        Submit
                      </button>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>

          <div id="add-manager" className="modal fade">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Sign Up</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="society_name"
                        placeholder="Society Name"
                        value={manager.society_name}
                        onChange={(event) =>
                          setManager({
                            ...manager,
                            society_name: event.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="head_name"
                        placeholder="Head Name"
                        value={manager.head_name}
                        onChange={(event) =>
                          setManager({
                            ...manager,
                            head_name: event.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        value={manager.email}
                        onChange={(event) =>
                          setManager({
                            ...manager,
                            email: event.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        value={manager.password}
                        onChange={(event) =>
                          setManager({
                            ...manager,
                            password: event.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn"
                        style={{ background: "#000", color: "white" }}
                        onClick={managerHandler}
                      >
                        Submit
                      </button>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>

          <div id="add-organizer" className="modal fade">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Sign Up</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="society_name"
                        placeholder="Society Name"
                        value={organizer.society_name}
                        onChange={(event) =>
                          setOrganizer({
                            ...organizer,
                            society_name: event.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="head_name"
                        placeholder="Head Name"
                        value={organizer.head_name}
                        onChange={(event) =>
                          setOrganizer({
                            ...organizer,
                            head_name: event.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        value={organizer.email}
                        onChange={(event) =>
                          setOrganizer({
                            ...organizer,
                            email: event.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        value={organizer.password}
                        onChange={(event) =>
                          setOrganizer({
                            ...organizer,
                            password: event.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn"
                        style={{ background: "#000", color: "white" }}
                        onClick={organizerHandler}
                      >
                        Submit
                      </button>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Contact Us</h2>
              <p>Nihil officia ut sint molestiae tenetur.</p>
            </div>

            <div className="row contact-info">
              <div className="col-md-4">
                <div className="contact-address">
                  <i className="ion-ios-location-outline"></i>
                  <h3>Address</h3>
                  <address>
                    Shamsabad, Muree Road, Punjab Rawalpindi, 46000, Pakistan
                  </address>
                </div>
              </div>

              <div className="col-md-4">
                <div className="contact-phone">
                  <i className="ion-ios-telephone-outline"></i>
                  <h3>Phone Number</h3>
                  <p>
                    <a href="tel:+923438338223">+92 343 8338223</a>
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="contact-email">
                  <i className="ion-ios-email-outline"></i>
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:info@ems.com">info@ems.com</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="form">
              <>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                      value={contact.name}
                      onChange={(e) =>
                        setContact({ ...contact, name: e.target.value })
                      }
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                      value={contact.email}
                      onChange={(e) =>
                        setContact({ ...contact, email: e.target.value })
                      }
                    />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                    value={contact.subject}
                    onChange={(e) =>
                      setContact({ ...contact, subject: e.target.value })
                    }
                  />
                  <div className="validate"></div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                    value={contact.message}
                    onChange={(e) =>
                      setContact({ ...contact, message: e.target.value })
                    }
                  ></textarea>
                  <div className="validate"></div>
                </div>
                <div className="text-center">
                  <button type="submit" onClick={contactUsHandler}>
                    Send Message
                  </button>
                </div>
              </>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-info">
                <h1>
                  <a href="#intro">
                    Event<span>MS</span>
                  </a>
                </h1>
                <p>
                  In alias aperiam. Placeat tempore facere. Officiis voluptate
                  ipsam vel eveniet est dolor et totam porro. Perspiciatis ad
                  omnis fugit molestiae recusandae possimus. Aut consectetur id
                  quis. In inventore consequatur ad voluptate cupiditate debitis
                  accusamus repellat cumque.
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="fa fa-angle-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="fa fa-angle-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  Shamsabad, Muree Road, Punjab Rawalpindi, 46000, Pakistan{" "}
                  <br />
                  <strong>Phone:</strong> +92 343 8338223
                  <br />
                  <strong>Email:</strong> info@ems.com
                  <br />
                </p>

                <div className="social-links">
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#" className="google-plus">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong>EMS</strong>. All Rights Reserved
          </div>
        </div>
      </footer>

      <a href="#" className="back-to-top">
        <i className="fa fa-angle-up"></i>
      </a>
    </div>
  );
}

export default App;
