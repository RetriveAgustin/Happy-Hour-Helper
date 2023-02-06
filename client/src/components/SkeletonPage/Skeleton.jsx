import React from "react";
import Header from "../Header/Header";

function Skeleton({ view }) {
  return (
    <>
      <Header />
      {view}
    </>
  );
}

export default Skeleton;
