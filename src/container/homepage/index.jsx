import React, { useState, Fragment, useRef } from "react";
import { NavLink } from "react-router-dom";
import CardTrip from "../../component/Card/CardTrip";
import Filter from "../../component/Modal/FIlter";
import Footer from "../../component/Other/Footer";
import Navbar from "../../component/Other/Navbar";

const Index = (props) => {
  const video = useRef(null);

  const [play, setPlay] = useState(false);

  const tootlePlay = () => {
    if (!play) {
      video.current.play();
    } else {
      video.current.pause();
    }

    setPlay(!play);
  };

  const destinations = [
    {
      img: "./../images/Rectangle 1.png",
      title: "Pantai Kesirat",
      location: "Indonesia",
      rating: "4.8",
      date: "Mar 1-5",
      price: "30-100k",
    },
    {
      img: "./../images/dsd.png",
      title: "Grand Maerakaca",
      location: "Indonesia",
      rating: "4.8",
      date: "Mar 1-5",
      price: "30-100k",
    },
    {
      img: "./../images/Rectangle 1 (2).png",
      title: "Taman Sungai Mudal",
      location: "Indonesia",
      rating: "4.8",
      date: "Mar 1-5",
      price: "30-100k",
    },
    {
      img: "./../images/Rectangle 1 (1).png",
      title: "Gunung Papandayan",
      location: "Indonesia",
      rating: "4.8",
      date: "Mar 1-5",
      price: "30-100k",
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
            <div className="row">
              <div className="col-lg-6 my-auto">
                <h5 className="medium font__size--18 text__18-1024 color__green line__left mb-3">
                  It's time to go🚀
                </h5>
                <h1 className="semi-bdol font__size--64 text__65-1024 text__65-sm text__65-xxs">
                  Don't just dream about it, plan it. Travel.
                </h1>
                <p className="normal font__size--16 text__16-1024 color__gray-2 mb-3 mb-sm-5">
                  When you're traveling, do you want to make sure your hotel has
                  a nice pool? Or maybe a happy hour with good deals on drinks?
                  There
                </p>

                <div className="wrapper__tab-filter-travel my-4 mb-sm-5">
                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link medium color__gray-3 font__size--14 text__14-1024 active"
                        id="pills-Stays-tab"
                        data-toggle="pill"
                        href="#pills-Stays"
                        role="tab"
                        aria-controls="pills-Stays"
                        aria-selected="true"
                      >
                        Stays
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link medium color__gray-3 font__size--14 text__14-1024"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Profile
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link medium color__gray-3 font__size--14 text__14-1024"
                        id="pills-contact-tab"
                        data-toggle="pill"
                        href="#pills-contact"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content" id="pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="pills-Stays"
                      role="tabpanel"
                      aria-labelledby="pills-Stays-tab"
                    >
                      <div className="wrapper__tab-grid">
                        <div className="d-flex align-items-start items">
                          <img
                            src="./../images/send-2.png"
                            className="icon"
                            alt=""
                          />
                          <div className="ml-2">
                            <h5 className="medium font__size--16 text__16-1024">
                              Location
                            </h5>
                            <input
                              type="text"
                              placeholder="Search destinations"
                              className="normal font__size--14 text__14-1024"
                            />
                          </div>
                        </div>
                        <div className="line"></div>
                        <div className="d-flex align-items-start items">
                          <img
                            src="./../images/calendar-add.png"
                            className="icon"
                            alt=""
                          />
                          <div className="ml-2">
                            <h5 className="medium font__size--16 text__16-1024">
                              Check in
                            </h5>
                            <input
                              type="text"
                              placeholder="Add dates"
                              className="normal font__size--14 text__14-1024"
                            />
                          </div>
                        </div>
                        <div className="line sm-none"></div>
                        <div className="d-flex align-items-start items">
                          <img
                            src="./../images/calendar-remove.png"
                            className="icon"
                            alt=""
                          />
                          <div className="ml-2">
                            <h5 className="medium font__size--16 text__16-1024">
                              Check out
                            </h5>
                            <input
                              type="text"
                              placeholder="Add dates"
                              className="normal font__size--14 text__14-1024"
                            />
                          </div>
                        </div>
                        <div className="line"></div>
                        <div className="d-flex align-items-start items">
                          <img
                            src="./../images/profile-2user.png"
                            className="icon"
                            alt=""
                          />
                          <div className="ml-2">
                            <h5 className="medium font__size--16 text__16-1024">
                              Who
                            </h5>
                            <input
                              type="text"
                              placeholder="Add guests"
                              className="normal font__size--14 text__14-1024"
                            />
                          </div>
                        </div>
                        <div className="line none"></div>
                        <button className="btn btn__blue color__white shadow rounded__50">
                          <div className="d-flex align-items-center">
                            <img src="./../images/search-normal.png" alt="" />
                            <span className="semi-bold font__size--16 text__16-1024 ml-2">
                              Search
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div className="wrapper__tab-grid">
                        <div className="d-flex align-items-start items">
                          <img
                            src="./../images/send-2.png"
                            className="icon"
                            alt=""
                          />
                          <div className="ml-2">
                            <h5 className="medium font__size--16 text__16-1024">
                              Location
                            </h5>
                            <input
                              type="text"
                              placeholder="Search destinations"
                              className="normal font__size--14 text__14-1024"
                            />
                          </div>
                        </div>
                        <div className="line"></div>
                        <div className="d-flex align-items-start items">
                          <img
                            src="./../images/calendar-2.png"
                            className="icon"
                            alt=""
                          />
                          <div className="ml-2">
                            <h5 className="medium font__size--16 text__16-1024">
                              Date
                            </h5>
                            <input
                              type="text"
                              placeholder="Add dates"
                              className="normal font__size--14 text__14-1024"
                            />
                          </div>
                        </div>
                        <div className="line sm-none"></div>
                        <div className="d-flex align-items-start items">
                          <img
                            src="./../images/profile-2user.png"
                            className="icon"
                            alt=""
                          />
                          <div className="ml-2">
                            <h5 className="medium font__size--16 text__16-1024">
                              Who
                            </h5>
                            <input
                              type="text"
                              placeholder="Add guests"
                              className="normal font__size--14 text__14-1024"
                            />
                          </div>
                        </div>
                        <div className="line none"></div>
                        <button className="btn btn__blue color__white shadow rounded__50">
                          <div className="d-flex align-items-center">
                            <img src="./../images/search-normal.png" alt="" />
                            <span className="semi-bold font__size--16 text__16-1024 ml-2">
                              Search
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <div className="wrapper__tab-grid">
                        <div className="d-flex align-items-start items">
                          <img
                            src="./../images/send-2.png"
                            className="icon"
                            alt=""
                          />
                          <div className="ml-2">
                            <h5 className="medium font__size--16 text__16-1024">
                              Location
                            </h5>
                            <input
                              type="text"
                              placeholder="Search destinations"
                              className="normal font__size--14 text__14-1024"
                            />
                          </div>
                        </div>
                        <div className="line"></div>
                        <div className="d-flex align-items-start items">
                          <img
                            src="./../images/calendar-2.png"
                            className="icon"
                            alt=""
                          />
                          <div className="ml-2">
                            <h5 className="medium font__size--16 text__16-1024">
                              Date
                            </h5>
                            <input
                              type="text"
                              placeholder="Add dates"
                              className="normal font__size--14 text__14-1024"
                            />
                          </div>
                        </div>
                        <div className="line sm-none"></div>
                        <div className="d-flex align-items-start items">
                          <img
                            src="./../images/profile-2user.png"
                            className="icon"
                            alt=""
                          />
                          <div className="ml-2">
                            <h5 className="medium font__size--16 text__16-1024">
                              Who
                            </h5>
                            <input
                              type="text"
                              placeholder="Add guests"
                              className="normal font__size--14 text__14-1024"
                            />
                          </div>
                        </div>
                        <div className="line none"></div>
                        <button className="btn btn__blue color__white shadow rounded__50">
                          <div className="d-flex align-items-center">
                            <img src="./../images/search-normal.png" alt="" />
                            <span className="semi-bold font__size--16 text__16-1024 ml-2">
                              Search
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrapper__people d-flex align-items-center">
                  <div className="d-flex align-items-center flex-shrink-0">
                    <img src="./../images/dfd.png" className="item" alt="" />
                    <img
                      src="./../images/Image (2).png"
                      className="item"
                      alt=""
                    />
                    <img
                      src="./../images/Image (3).png"
                      className="item"
                      alt=""
                    />
                    <img
                      src="./../images/Image (4).png"
                      className="item"
                      alt=""
                    />
                    <div className="item count medium font__size--12 text__12-1024 color__white bg__green">
                      +15
                    </div>
                  </div>

                  <span className="ml-3 normal font__size--12 text__12-1024">
                    16 people <span className="medium">booked</span> a visit in
                    last 24 hours
                  </span>
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block my-auto">
                <img
                  src="./../images/Image (1).png"
                  className="images__head-1"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm">
                Explore the site through a <br className="d-none d-sm-block" />{" "}
                visual journey
              </h2>
              <p className="normal font__size--16 text__16-1024 color__gray-2">
                Find and book a great experience.
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row justify-content-center">
                  <div className="col-md-6 mb-4 mb-lg-0 col-lg-4">
                    <div className="d-flex align-items-center wrapper__card-list-explore">
                      <img
                        src="./../images/as (1).png"
                        className="circle"
                        alt=""
                      />
                      <div className="ml-3">
                        <h5 className="medium font__size--18 text__18-1024">
                          Luxury resort at the sea
                        </h5>
                        <div className="tag medium font__size--14 text__14-1024 color__black">
                          8,342 places
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 mb-lg-0 col-lg-4">
                    <div className="d-flex align-items-center wrapper__card-list-explore">
                      <img
                        src="./../images/as (3).png"
                        className="circle"
                        alt=""
                      />
                      <div className="ml-3">
                        <h5 className="medium font__size--18 text__18-1024">
                          Camping amidst the wild
                        </h5>
                        <div className="tag medium font__size--14 text__14-1024 color__black">
                          7,231 places
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 mb-lg-0 col-lg-4">
                    <div className="d-flex align-items-center wrapper__card-list-explore">
                      <img
                        src="./../images/as (2).png"
                        className="images__circle"
                        alt=""
                      />
                      <div className="ml-3">
                        <h5 className="medium font__size--18 text__18-1024">
                          Luxury resort at the sea
                        </h5>
                        <div className="tag medium font__size--14 text__14-1024 color__black">
                          8,326 places
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-6 my-auto">
                <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-0">
                  Navigasi Wisata Cerdas <br />
                </h2>
              </div>
              <div className="col-md-6 my-auto">
                <p className="normal font__size--16 text__16-1024 color__gray-2 mb-0">
                  Temukan keindahan dunia dengan panduan yang bijak dan
                  teknologi yang cedas. Navigasi Wisata Cerdas: Membawa Anda ke
                  petualangan yang tepat, di destinasi yang Anda impikan
                </p>
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
                    Recommended
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
              <div className="col-md-6 d-none d-lg-block my-auto">
                <img src="./../images/sdsad.png" alt="" />
              </div>
              <div className="col-lg-6 my-auto">
                <h5 className="medium font__size--18 text__18-1024 color__green line__left mb-3">
                  Travel is your friend
                </h5>
                <h1 className="semi-bdol font__size--48 text__48-1024 text__48-md text__48-sm">
                  All the best places to travel, curated by you
                </h1>
                <p className="normal font__size--16 text__16-1024 color__gray-2 mb-4">
                  Get the most out of your travel experience. At Trav.id, we
                  help you find the best travel deals through our simple and
                  transparent travel booking service. Find cheap flights, last
                  minute trips and hotels from a range of travel brands,
                </p>
                <div className="wrapper__list-archivment d-flex flex-wrap align-items-center">
                  <div className="item mb-4 mb-xl-0 d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <img src="./../images/award.png" alt="" />
                      <h5 className="mb-0 semi-bold font__size--24 text__24-1024 ml-2">
                        15
                      </h5>
                    </div>
                    <p className="normal color__gray-2 font__size--14 text__14-1024 color__white mb-0 ml-2 lh__4">
                      Years of <br />
                      experience
                    </p>
                  </div>
                  <div className="item mb-4 mb-xl-0 d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <img src="./../images/close-circle.png" alt="" />
                      <h5 className="mb-0 semi-bold font__size--24 text__24-1024 ml-2">
                        12k
                      </h5>
                    </div>
                    <p className="normal color__gray-2 font__size--14 text__14-1024 color__white mb-0 ml-2 lh__4">
                      Succesfull <br />
                      trips
                    </p>
                  </div>

                  <div className="item mb-4 mb-xl-0 d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <img src="./../images/happyemoji.png" alt="" />
                      <h5 className="mb-0 semi-bold font__size--24 text__24-1024 ml-2">
                        95%
                      </h5>
                    </div>
                    <p className="normal color__gray-2 font__size--14 text__14-1024 color__white mb-0 ml-2 lh__4">
                      Happy <br />
                      customers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm">
                Why choose us
              </h2>
              <p className="normal font__size--16 text__16-1024 color__gray-2">
                Find and book a great experience.
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-md-4 mb-4 mb-md-0 text-center">
                    <div className="px-3">
                      <img src="./../images/map.png" className="mb-4" alt="" />
                      <h5 className="medium font__size--24 text__24-1024">
                        Best guide
                      </h5>
                      <p className="normal font__size--16 text__16-1024 color__gray-2">
                        Our expert tour guide knows the best about traveling
                        they will guide you alltime
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4 mb-md-0 text-center">
                    <div className="px-3">
                      <img
                        src="./../images/24-support.png"
                        className="mb-4"
                        alt=""
                      />
                      <h5 className="medium font__size--24 text__24-1024">
                        Support 24/7
                      </h5>
                      <p className="normal font__size--16 text__16-1024 color__gray-2">
                        Our customer experience team is avaiable arround the
                        clock to answer your questions
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4 mb-md-0 text-center">
                    <div className="px-3">
                      <img
                        src="./../images/buildings.png"
                        className="mb-4"
                        alt=""
                      />
                      <h5 className="medium font__size--24 text__24-1024">
                        Luxury hotels
                      </h5>
                      <p className="normal font__size--16 text__16-1024 color__gray-2">
                        We realize ideas from simple to complex, everything
                        becomes easy to use.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm">
                Looking to get away? Here are the top 5{" "}
                <br className="d-none d-md-block" /> places you should visit!
              </h2>
            </div>
            <div
              className={
                "wrapper__play-video position-relative " +
                (play ? "active" : "")
              }
            >
              <img src="./../images/ffggfd.png" className="cover" alt="" />
              <div className="play pointer" onClick={() => tootlePlay()}>
                <img src="./../images/play-circle.png" alt="" />
              </div>
              <video ref={video} className="video" loop controls={false}>
                <source
                  src="https://assets.mixkit.co/videos/preview/mixkit-white-sand-beach-background-1564-large.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="wrap">
                <div className="d-md-flex text-center text-md-left align-items-center justify-content-between">
                  <h4 className="medium font__size--48 text__48-1024 text__48-md text__48-sm mb-3 mb-md-0">
                    Save up to <span className="semi-bold">40% off</span> your!
                  </h4>
                  <a
                    href="#!"
                    className="btn btn__blue rounded__50 shadow color__white semi-bold font__size--16 text__16-1024"
                  >
                    Book now
                  </a>
                </div>
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

export default Index;
