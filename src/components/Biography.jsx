import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Zeecare is a leading online healthcare platform based in Baner, Pune. We connect patients with experienced doctors for virtual consultations and offer a range of lab testing services. With a focus on convenience and quality care, Zeecare brings healthcare to your doorstep, making it easier to access medical advice and test results.







          </p>
          
                 </div>
      </div>
    </>
  );
};

export default Biography;
