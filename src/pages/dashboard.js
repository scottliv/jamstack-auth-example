import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";
import { navigate } from "gatsby";
import IdentityModal from "react-netlify-identity-widget";
import Layout from "../components/layout";
import Profile from "../components/profile";
import RouteBase from "../components/route-base";
import PrivateRoute from "../components/private-route";
import RouteSecret from "../components/route-secret";
import RouteLogin from "../components/route-login";

import "react-netlify-identity-widget/styles.css";

export default ({ location }) => {
  const [isVisible, setVisibility] = useState(false);
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true });
    }
  }, []);
  const toggleModal = (toggle) => setVisibility(toggle);
  return (
    <Layout>
      <Profile toggleModal={toggleModal} />
      <Router>
        <PrivateRoute component={RouteBase} path="/dashboard/base" />
        <PrivateRoute component={RouteSecret} path="/dashboard/secret" />
        <RouteLogin path="/dashboard/login" toggleModal={toggleModal} />
      </Router>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => toggleModal(false)}
      />
    </Layout>
  );
};
