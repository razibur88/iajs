import React from "react";

const Workreuseable = ({ title, paragrap, icon }) => {
  return (
    <>
      <div class="card-1">
        <img src={icon} alt="" />
        <h5>{title}</h5>
        <p>{paragrap}</p>
      </div>
    </>
  );
};

export default Workreuseable;
