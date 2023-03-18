import { Send } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { Outlet } from "react-router-dom";
import ProfileBox from "../../component/profileBox/ProfileBox";

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
      <div className="contact__container">
        <section className="contact__container__left-section">
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
        </section>
        <section>
          <ProfileBox />
        </section>
      </div>
    </div>
  );
};

export default Contact;
