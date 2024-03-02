import React, { useState, Fragment, useRef } from "react";
import { NavLink } from "react-router-dom";
import CardTrip from "../../component/Card/CardTrip";
import Filter from "../../component/Modal/FIlter";
import Footer from "../../component/Other/Footer";
import Navbar from "../../component/Other/Navbar";
import Navstep from "../../component/Other/Navstep";
const Destination = (props) => {
  const destinations = [
    {
      img: "./../images/Rectangle 1.png",
      title: "Pantai Kesirat",
      location: "Indonesia",
      rating: "4.8",
      date: "Jul 20-24",
      price: "140",
    },
    {
      img: "./../images/dsd.png",
      title: "Grand Maerakaca",
      location: "Indonesia",
      rating: "4.8",
      date: "Jul 20-24",
      price: "200",
    },
    {
      img: "./../images/Rectangle 1 (2).png",
      title: "Taman Sungai Mudal",
      location: "Indonesia",
      rating: "4.8",
      date: "Jul 20-24",
      price: "100",
    },
    {
      img: "./../images/Rectangle 1 (1).png",
      title: "Gunung Papandayan",
      location: "Indonesia",
      rating: "4.8",
      date: "Jul 20-24",
      price: "120",
    },
    {
      img: "./../images/Rectangle 1.png",
      title: "Pantai Kesirat",
      location: "Indonesia",
      rating: "4.8",
      date: "Jul 20-24",
      price: "140",
    },
    {
      img: "./../images/dsd.png",
      title: "Grand Maerakaca",
      location: "Indonesia",
      rating: "4.8",
      date: "Jul 20-24",
      price: "200",
    },
    {
      img: "./../images/Rectangle 1 (2).png",
      title: "Taman Sungai Mudal",
      location: "Indonesia",
      rating: "4.8",
      date: "Jul 20-24",
      price: "100",
    },
    {
      img: "./../images/Rectangle 1 (1).png",
      title: "Gunung Papandayan",
      location: "Indonesia",
      rating: "4.8",
      date: "Jul 20-24",
      price: "120",
    },
    {
      img: "./../images/Rectangle 1.png",
      title: "Pantai Kesirat",
      location: "Indonesia",
      rating: "4.8",
      date: "Jul 20-24",
      price: "140",
    },
    {
      img: "./../images/dsd.png",
      title: "Grand Maerakaca",
      location: "Indonesia",
      rating: "4.8",
      date: "Jul 20-24",
      price: "200",
    },
    {
      img: "./../images/Rectangle 1 (2).png",
      title: "Taman Sungai Mudal",
      location: "Indonesia",
      rating: "4.8",
      date: "Jul 20-24",
      price: "100",
    },
    {
      img: "./../images/Rectangle 1 (1).png",
      title: "Gunung Papandayan",
      location: "Indonesia",
      rating: "4.8",
      date: "Jul 20-24",
      price: "120",
    },
  ];

  const [modalFilter, setModalFilter] = useState(false);
  const onCLickModalFilter = () => {
    if (!modalFilter) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    setModalFilter(!modalFilter);
  };

  return (
    <Fragment>
      <Filter
        modalFilter={modalFilter}
        onCLickModalFilter={() => onCLickModalFilter()}
      />
      <div className="overflow-hidden">
        <Navbar />

        <section>
          <div className="container">
            <Navstep now={"Destinations"} />
            <div className="mt-4 mb-5">
              <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-3">
                Explore Destinations!
              </h2>
              <div className="d-flex align-items-center">
                <div className="wrapper__rounded-green color__green semi-bold font__size--14 text__14-1024">
                  11,300+
                </div>
                <span className="medium font__size--14 text__14-1024 ml-2 color__gray-2">
                  destinations worldwide{" "}
                </span>
              </div>
            </div>

            <div className="d-flex align-items-start flex-sm-nowrap flex-wrap justify-content-between mb-4">
              <ul
                class="nav nav-pills wrapper__nav-travel mb-4 mb-lg-0"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item">
                  <a
                    class="nav-link medium font__size--14 text__14-1024 color__black active"
                    id="pills-Popular-tab"
                    data-toggle="pill"
                    href="#pills-Popular"
                    role="tab"
                    aria-controls="pills-Popular"
                    aria-selected="true"
                  >
                    Popular nearby
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link medium font__size--14 text__14-1024 color__black"
                    id="pills-Islands-tab"
                    data-toggle="pill"
                    href="#pills-Islands"
                    role="tab"
                    aria-controls="pills-Islands"
                    aria-selected="false"
                  >
                    Islands
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link medium font__size--14 text__14-1024 color__black"
                    id="pills-Surfing-tab"
                    data-toggle="pill"
                    href="#pills-Surfing"
                    role="tab"
                    aria-controls="pills-Surfing"
                    aria-selected="false"
                  >
                    Surfing
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link medium font__size--14 text__14-1024 color__black"
                    id="pills-Nation-tab"
                    data-toggle="pill"
                    href="#pills-Nation"
                    role="tab"
                    aria-controls="pills-Nation"
                    aria-selected="false"
                  >
                    Nation parks
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link medium font__size--14 text__14-1024 color__black"
                    id="pills-Lake-tab"
                    data-toggle="pill"
                    href="#pills-Lake"
                    role="tab"
                    aria-controls="pills-Lake"
                    aria-selected="false"
                  >
                    Lake
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link medium font__size--14 text__14-1024 color__black"
                    id="pills-Beach-tab"
                    data-toggle="pill"
                    href="#pills-Beach"
                    role="tab"
                    aria-controls="pills-Beach"
                    aria-selected="false"
                  >
                    Beach
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link medium font__size--14 text__14-1024 color__black"
                    id="pills-Camp-tab"
                    data-toggle="pill"
                    href="#pills-Camp"
                    role="tab"
                    aria-controls="pills-Camp"
                    aria-selected="false"
                  >
                    Camp
                  </a>
                </li>
              </ul>
              <div
                onClick={() => onCLickModalFilter()}
                className="pointer btn__filter d-flex align-items-center"
              >
                <span className="medium font__size--14 text__14-1024 mr-2">
                  Filters
                </span>
                <img src="./../images/setting-4.png" alt="" />
              </div>
            </div>
            <div class="tab-content mb-4" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-Popular"
                role="tabpanel"
                aria-labelledby="pills-Popular-tab"
              >
                <div className="row">
                  {destinations.map((obj) => {
                    return (
                      <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                        <CardTrip data={obj} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-Islands"
                role="tabpanel"
                aria-labelledby="pills-Islands-tab"
              >
                <div className="row">
                  {destinations.map((obj) => {
                    return (
                      <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                        <CardTrip data={obj} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-Surfing"
                role="tabpanel"
                aria-labelledby="pills-Surfing-tab"
              >
                <div className="row">
                  {destinations.map((obj) => {
                    return (
                      <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                        <CardTrip data={obj} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-Nation"
                role="tabpanel"
                aria-labelledby="pills-Nation-tab"
              >
                <div className="row">
                  {destinations.map((obj) => {
                    return (
                      <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                        <CardTrip data={obj} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-Lake"
                role="tabpanel"
                aria-labelledby="pills-Lake-tab"
              >
                <div className="row">
                  {destinations.map((obj) => {
                    return (
                      <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                        <CardTrip data={obj} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-Beach"
                role="tabpanel"
                aria-labelledby="pills-Beach-tab"
              >
                <div className="row">
                  {destinations.map((obj) => {
                    return (
                      <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                        <CardTrip data={obj} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-Camp"
                role="tabpanel"
                aria-labelledby="pills-Camp-tab"
              >
                <div className="row">
                  {destinations.map((obj) => {
                    return (
                      <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                        <CardTrip data={obj} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="pointer btn__filter d-inline-block medium font__size--16 text__16-1024">
                View all
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6 my-auto">
                <img src="./../images/ththt.png" alt="" />
              </div>
              <div className="col-md-6 my-auto">
                <h5 className="medium font__size--18 text__18-1024 color__green line__left mb-3">
                  Newslatter
                </h5>
                <h1 className="semi-bdol font__size--48 text__48-1024 text__48-md text__48-sm mb-4">
                  We send you the <br />
                  latest travel deals <br />
                  every day.
                </h1>
                <div className="d-flex align-items-center flex-wrap flex-lg-nowrap">
                  <div className="wrapper__subscribe-form d-flex align-items-center w__md-100 mb-3 mb-lg-0">
                    <img
                      src="./../images/sms (1).png"
                      className="mr-2"
                      alt=""
                    />
                    <input
                      type="text"
                      placeholder="Input email adress"
                      className="normal font__size--16 text__16-1024 w__md-100"
                    />
                  </div>
                  <a
                    href="#!"
                    className="medium font__size--16 text__16-1024 btn btn__blue shadow color__white ml-lg-3 rounded__50"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Destination;
