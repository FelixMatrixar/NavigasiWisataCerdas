import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Homepage from "./homepage/index";
import Destination from "./homepage/Destination";
import Detail from "./homepage/Detail";
import RequestToBook from "./homepage/RequestToBook";
import Booking from "./homepage/Booking";
import Wishlist from "./homepage/Wishlist";
import Faq from "./homepage/Faq";
import Contact from "./homepage/Contact";
import Personal from "./homepage/Profile/Personal";
import LoginSecurity from "./homepage/Profile/LoginSecurity";
import Payment from "./homepage/Profile/Payment";
import Notification from "./homepage/Profile/Notification";
import Privacy from "./homepage/Profile/Privacy";

const Index = (props) => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/request-to-book" element={<RequestToBook />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/personal" element={<Personal />} />
          <Route path="/profile/security" element={<LoginSecurity />} />
          <Route path="/profile/payment" element={<Payment />} />
          <Route path="/profile/notification" element={<Notification />} />
          <Route path="/profile/privacy" element={<Privacy />} />
          {/* Add a default route or redirect if needed */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default Index;
