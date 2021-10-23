import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import "./TipsDetails.css";
const TipsDetails = () => {
  const { id } = useParams();
  const [tipsDetails, setTipsDetails] = useState([]);
  const [singleTipsDetails, setSingleTipsDetails] = useState({});
  // load all the tips detail
  useEffect(() => {
    fetch("/tipsDetail.json")
      .then((res) => res.json())
      .then((data) => setTipsDetails(data.tipsDetail));
  }, []);
  //load the single tips details
  useEffect(() => {
    const showTipsDetail = tipsDetails.find(
      (tipsDetail) => tipsDetail.id === id
    );
    setSingleTipsDetails(showTipsDetail);
  }, [tipsDetails]);
  return (
    <div className="container mt-5 mb-5">
      <div className="tips-detail row">
        <div className="col-md-6 col-sm-12 text-start tips-tags">
          <h6 className="fw-bolder">{singleTipsDetails?.name}</h6>
          <p className="text-muted fw-bolder">
            {singleTipsDetails?.more_description}
          </p>

          <Button variant="outline-dark">Feedback</Button>
        </div>
        <div className="col-md-6 col-sm-12">
          <img
            className="tipsDetail-img"
            src={singleTipsDetails?.image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TipsDetails;
