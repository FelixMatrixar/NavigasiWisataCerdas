import React, { Fragment } from "react";
import CardTrip from "../../component/Card/CardTrip";
import BookList from "../../component/Other/BookList";
import Footer from "../../component/Other/Footer";
import Navbar from "../../component/Other/Navbar";
const Wishlist = (props) => {
  const destinations = [
    {
      img: "./../images/Rectangle 1.png",
      title: "Luxury resort",
      location: "Indonesia",
      rating: "4.8",
      date: "Jul 20-24",
      price: "140",
    },
    {
      img: "./../images/dsd.png",
      title: "Pasir putih resort",
      location: "Indonesia",
      rating: "4.8",
      date: "Jul 20-24",
      price: "200",
    },
    {
      img: "./../images/Rectangle 1 (2).png",
      title: "Sorangan resort",
      location: "Indonesia",
      rating: "4.8",
      date: "Jul 20-24",
      price: "100",
    },
    {
      img: "./../images/Rectangle 1 (1).png",
      title: "Abiansemal",
      location: "Indonesia",
      rating: "4.8",
      date: "Jul 20-24",
      price: "120",
    },
  ];
  return (
    <Fragment>
      <div className="overflow-hidden">
        <Navbar />

        <section>
          <div className="container">
            <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm">
              Start your adventure
            </h2>
            <p className="normal font__size--16 text__16-1024 color__gray-2 mb-5">
              Start here and discover how far a little travel can go.
            </p>

            <div className="row mb-4">
              {destinations.map((obj) => {
                return (
                  <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                    <CardTrip data={obj} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm">
              Booking
            </h2>
            <p className="normal font__size--14 text__14-1024 color__gray-2 mb-4">
              To reserve your spot, go here now.
            </p>

            <ul
              class="nav nav-pills wrapper__nav-travel mb-4"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="nav-link medium font__size--14 text__14-1024 color__black active"
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
                  class="nav-link medium font__size--14 text__14-1024 color__black"
                  id="pills-Flight-tab"
                  data-toggle="pill"
                  href="#pills-Flight"
                  role="tab"
                  aria-controls="pills-Flight"
                  aria-selected="false"
                >
                  <div className="d-flex align-items-center">
                    Flight
                    <span className="normal font__size--14 text__14-1024 color__white count ml-2">
                      2
                    </span>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link medium font__size--14 text__14-1024 color__black"
                  id="pills-Experience-tab"
                  data-toggle="pill"
                  href="#pills-Experience"
                  role="tab"
                  aria-controls="pills-Experience"
                  aria-selected="false"
                >
                  Experience
                </a>
              </li>
            </ul>

            <div class="tab-content mb-4" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-Stays"
                role="tabpanel"
                aria-labelledby="pills-Stays-tab"
              >
                <div className="wrapper__title-tab-booking d-none d-lg-block">
                  <div className="row">
                    <div className="col-md-7">
                      <h5 className="medium font__size--16 text__16-1024 color__gray-2 mb-0">
                        Destinations
                      </h5>
                    </div>
                    <div className="col-md-2">
                      <h5 className="medium font__size--16 text__16-1024 color__gray-2 mb-0">
                        Dates
                      </h5>
                    </div>
                    <div className="col-md-3">
                      <h5 className="medium font__size--16 text__16-1024 color__gray-2 mb-0">
                        Passanger
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="mb-md-4 mb-md-0">
                    <BookList />
                    <hr className="my-4 d-block d-lg-none" />
                  </div>

                  <div className="mb-md-4 mb-md-0">
                    <BookList />
                    <hr className="my-4 d-block d-lg-none" />
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-Flight"
                role="tabpanel"
                aria-labelledby="pills-Flight-tab"
              >
                <div className="wrapper__title-tab-booking d-none d-lg-block">
                  <div className="row">
                    <div className="col-md-7">
                      <h5 className="medium font__size--16 text__16-1024 color__gray-2 mb-0">
                        Destinations
                      </h5>
                    </div>
                    <div className="col-md-2">
                      <h5 className="medium font__size--16 text__16-1024 color__gray-2 mb-0">
                        Dates
                      </h5>
                    </div>
                    <div className="col-md-3">
                      <h5 className="medium font__size--16 text__16-1024 color__gray-2 mb-0">
                        Passanger
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="mb-md-4 mb-md-0">
                    <BookList />
                    <hr className="my-4 d-block d-lg-none" />
                  </div>

                  <div className="mb-md-4 mb-md-0">
                    <BookList />
                    <hr className="my-4 d-block d-lg-none" />
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-Experience"
                role="tabpanel"
                aria-labelledby="pills-Experience-tab"
              >
                <div className="wrapper__title-tab-booking d-none d-lg-block">
                  <div className="row">
                    <div className="col-md-7">
                      <h5 className="medium font__size--16 text__16-1024 color__gray-2 mb-0">
                        Destinations
                      </h5>
                    </div>
                    <div className="col-md-2">
                      <h5 className="medium font__size--16 text__16-1024 color__gray-2 mb-0">
                        Dates
                      </h5>
                    </div>
                    <div className="col-md-3">
                      <h5 className="medium font__size--16 text__16-1024 color__gray-2 mb-0">
                        Passanger
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="mb-md-4 mb-md-0">
                    <BookList />
                    <hr className="my-4 d-block d-lg-none" />
                  </div>

                  <div className="mb-md-4 mb-md-0">
                    <BookList />
                    <hr className="my-4 d-block d-lg-none" />
                  </div>
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

export default Wishlist;
