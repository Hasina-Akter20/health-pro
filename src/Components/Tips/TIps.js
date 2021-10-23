import React, { useEffect, useState } from "react";
import SingleTips from "../SingleTips/SingleTips";
import "./Tips.css";

const Tips = () => {
  const [tips, setTips] = useState([]);
  useEffect(() => {
    fetch("./tips.json")
      .then((res) => res.json())
      .then((data) => setTips(data));
  }, []);

  return (
    <div className="mb-5 text-color">
      <h1 className="text-primary mt-4 mb-4">Health Tips</h1>
      <div className="tips-container">
        {tips.map((single) => (
          <SingleTips key={single.id} single={single}></SingleTips>
        ))}
      </div>
    </div>
  );
};

export default Tips;
