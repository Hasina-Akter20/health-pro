import React from "react";
import { useParams } from "react-router";
import SingleTips from "../SingleTips/SingleTips";

const TipsDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>hjdsfhdajskfhsdjkas:  {id} </h1>
    </div>
  );
};

export default TipsDetails;
