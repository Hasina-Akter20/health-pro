import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Expert from "../Expert/Expert";

const Experts = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch("./experts.json")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);

  return (
    <div className="container mt-5 text-color  ">
      <h1 className="text-primary pb-4">Our Experts</h1>
      <Row xs={1} md={3} className="g-2 card-margin">
        {experts.map((expert) => (
          <Expert key={expert.name} expert={expert}></Expert>
        ))}
      </Row>
    </div>
  );
};

export default Experts;
