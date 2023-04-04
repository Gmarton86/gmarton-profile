import { Send } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { Outlet } from "react-router-dom";
import Location from "../../assets/svg/Location";
import Mail from "../../assets/svg/Mail";
import Phone from "../../assets/svg/Phone";
import ProfileBox from "../../component/profileBox/ProfileBox";
import ContactBox from "./Contact-box";

const Contact = () => {
  return (
    <div>
      <Outlet />
      <motion.div
        className="page__title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Contact
      </motion.div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="contact-icons-container"
      >
        <ContactBox title="Location" value={<div>Hladovka 86</div>}>
          <Location />
        </ContactBox>
        <ContactBox
          title="Phone Number"
          value={<a href="tel:0944 413 624">0944 413 624</a>}
        >
          <Phone />
        </ContactBox>
        <ContactBox
          title="E-mail"
          value={
            <a href="mailto:zurvalecerik@gmail.com">zurvalecerik@gmail.com</a>
          }
        >
          <Mail />
        </ContactBox>
      </motion.section>
      <div className="contact__container">
        <motion.section
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
          className="contact__container__left-section"
        >
          <form className="contact__form_container">
            <TextField id="name" label="Name" variant="standard" />
            <TextField id="lastname" label="Lastname" variant="standard" />
            <TextField id="email" label="Email" variant="standard" />
            <TextField
              id="message"
              label="Message"
              multiline
              rows={4}
              variant="standard"
            />
            <Button variant="contained" endIcon={<Send />}>
              Send
            </Button>
          </form>
        </motion.section>
        <motion.section
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
        >
          <ProfileBox />
        </motion.section>
      </div>
    </div>
  );
};

export default Contact;
