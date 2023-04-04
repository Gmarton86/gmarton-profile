import React from "react";

const ContactBox = ({ children, title, value }: any) => {
  return (
    <div className="contact-box-container">
      <div className="contact-box">{children}</div>
      <div className="contact-box-title">{title}</div>
      <div className="contact-box-value">{value}</div>
    </div>
  );
};

export default ContactBox;
