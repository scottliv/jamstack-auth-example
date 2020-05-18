import React, { useState } from "react";
import { Link } from "gatsby";
import IdentityModal from "react-netlify-identity-widget";
import Layout from "../components/layout";
export default () => {
  const [isVisible, setVisibility] = useState(false);
  const toggleModal = (toggle) => setVisibility(toggle);
  return (
    <Layout>
      <h1>This App Rules</h1>
      <p>Log in to find out why!</p>
      <Link to="/dashboard">Go to the dashboard</Link>

      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => toggleModal(false)}
      />
    </Layout>
  );
};
