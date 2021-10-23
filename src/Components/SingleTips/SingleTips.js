import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SingleTips.css";

const SingleTips = (props) => {
  const { id, name, description, img, } = props.single;

  return (
    <div className="tips-card">
      
      <img className="img-fluid card-img mb-2" src={img} alt="" />

      <h3>{name}</h3>
      <p className="px-3">{description}</p>

      <Link to={`/details/${id}`}>
        
        <Button variant="outline-dark">See More</Button>
      </Link>
    </div>
  );
};

export default SingleTips;
