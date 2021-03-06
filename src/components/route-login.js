import React from "react";
import { useIdentityContext } from "react-netlify-identity";
import { navigate } from "gatsby";

export default ({ toggleModal }) => {
  const identity = useIdentityContext();

  if (identity && identity.isLoggedIn) {
    navigate("/dashboard/secret/", { replace: true });
  }
  return (
    <>
      <h1>Log in or sign up</h1>
      <button onClick={() => toggleModal(true)}>Log In</button>
    </>
  );
};
