import React from "react";
import { Header, Categorylist, Howto } from "../../container/";
import { Navbar, Footer } from "../../components/";

function Landing() {
  return (
    <div>
      <Header />
      <Categorylist />
      <Howto />
    </div>
  );
}

export default Landing;
