import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import GoogleLogin from "react-google-login";
import OneOffModelling from "./OneOffModelling";

function Toolkit() {
  const [sessionToken, setSessionToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const responseGoogle = (response) => {
    const data = { id_token: response.tokenId };
    const dataJson = JSON.stringify(data);
    const url =
      "https://opulazurefunction.azurewebsites.net/.auth/login/google";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: dataJson,
    })
      .then((response) => response.json())
      .then((data) => {
        return data.authenticationToken;
      })
      .then((authenticationToken) => {
        setSessionToken(authenticationToken);
        setIsLoggedIn(true);
      })
      .then({
          //request user inputs
          //request user results
      });
  };

  const responseGoogleFailure = (response) => {
    setIsLoggedIn(false);
  };

  return (
    <Container fluid>
      {!isLoggedIn && (
        <div>
          <br />
          <GoogleLogin
            clientId="652039174928-o32hrkqjj4a0ragvcjm6m6ido1tvg1i3.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogleFailure}
            cookiePolicy={"single_host_origin"}
          />
          <div>Your inputs will be saved</div>
        </div>
      )}
      <OneOffModelling />
    </Container>
  );
}

export default Toolkit;
