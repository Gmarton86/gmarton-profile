import { Send, CheckCircle, ErrorSharp } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { motion } from "framer-motion";
import React, { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import Location from "../../assets/svg/Location";
import Mail from "../../assets/svg/Mail";
import Phone from "../../assets/svg/Phone";
import ProfileBox from "../../component/profileBox/ProfileBox";
import ContactBox from "./Contact-box";
import emailjs from "@emailjs/browser";
import LoadingButton from "@mui/lab/LoadingButton";
import isEmail from "validator/lib/isEmail";

const Contact = () => {
  const toSendDefaultState = {
    from_name: "",
    from_lastname: "",
    message: "",
    from_email: "",
  };

  const buttonDefaultState = {
    text: "Send",
    icon: <Send />,
    loading: false,
  };

  const [toSend, setToSend] = useState(toSendDefaultState);
  const [button, setButton] = useState(buttonDefaultState);

  const handleChange = (e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: any) => {
    setButton((prev) => {
      return { ...prev, loading: true };
    });
    e.preventDefault();
    emailjs
      .send(
        `${process.env.REACT_APP_GMAIL_SERVICE_ID}`,
        `${process.env.REACT_APP_GMAIL_TEMPLATE_ID}`,
        toSend,
        `${process.env.REACT_APP_GMAIL_PUBLIC_KEY}`
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setButton({ loading: false, icon: <CheckCircle />, text: "Success" });
        },
        (err) => {
          console.log("FAILED...", err);
          setButton({
            loading: false,
            icon: <ErrorSharp />,
            text: "An error occurs :(",
          });
        }
      )
      .finally(() => {
        setTimeout(() => {
          setToSend(toSendDefaultState);
          setButton(buttonDefaultState);
        }, 3000);
      });
  };

  const disabled = useMemo(() => {
    if (
      toSend.from_email === "" ||
      toSend.from_lastname === "" ||
      toSend.from_name === "" ||
      toSend.message === "" ||
      !isEmail(toSend.from_email)
    )
      return true;
    return false;
  }, [toSend]);

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
          <form className="contact__form_container" onSubmit={onSubmit}>
            <TextField
              required={true}
              id="name"
              label="Name"
              variant="standard"
              name="from_name"
              value={toSend.from_name}
              onChange={handleChange}
            />
            <TextField
              required={true}
              id="lastname"
              label="Lastname"
              variant="standard"
              name="from_lastname"
              value={toSend.from_lastname}
              onChange={handleChange}
            />
            <TextField
              required={true}
              id="email"
              label="Email"
              name="from_email"
              variant="standard"
              error={!isEmail(toSend.from_email) && toSend.from_email !== ""}
              helperText={
                !isEmail(toSend.from_email) && toSend.from_email !== ""
                  ? "Incorrect e-mail format"
                  : null
              }
              value={toSend.from_email}
              onChange={handleChange}
            />
            <TextField
              required={true}
              id="message"
              label="Message"
              multiline
              rows={4}
              name="message"
              variant="standard"
              value={toSend.message}
              onChange={handleChange}
            />
            <LoadingButton
              loading={button.loading}
              disabled={disabled}
              type="submit"
              variant="contained"
              endIcon={button.icon}
            >
              {button.text}
            </LoadingButton>
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
