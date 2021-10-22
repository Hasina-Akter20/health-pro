import React from "react";
import "./Footer.css";
import footer from "../../Images/heart-fav.png";
import facebook from "../../Images/facebook.png";
import twitter from "../../Images/twitter.png";
import instagramtter from "../../Images/instagram.png";

const Footer = () => {
  return (
    <div className="bg-dark pb-3">
      <div className="d-flex justify-content-center pt-4">
        <div className="footer-img">
          <img className="img-fluid" src={footer} alt="" />
        </div>
        <h1 className="text-secondary">Health PRO</h1>
      </div>
      <p className="footer-text">
        Health PRO's mentors share their wealth of knowledge and expertise and{" "}
        <br />
        help guide you along your personal wellness journey.
      </p>

      <div className="pb-2">
        <img className="icon-img1 me-2" src={facebook} alt="" />
        <img className="icon-img2 me-2" src={twitter} alt="" />
        <img className="icon-img3" src={instagramtter} alt="" />
      </div>
      <small className="footer-text ">Copyright © 2021 || Health PRO</small>
    </div>
  );
};

export default Footer;
