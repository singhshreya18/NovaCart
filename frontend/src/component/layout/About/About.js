import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";

const About = () => {
  const visitInstagram = () => {
    window.location =
      "https://www.instagram.com/shreya.singh_004?igsh=MW5pZ3AxaXBnMGdhNw==";
  };

  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>

      <div className="aboutSectionContainer">
        <Typography component="h1">About NovaCart</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
              alt="NovaCart"
            />

            <Typography>NovaCart Team</Typography>

            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>

            <span>
              NovaCart is a modern e-commerce platform built using the MERN
              Stack. Our goal is to provide customers with a seamless shopping
              experience, secure payments, fast delivery, and high-quality
              products at affordable prices.
            </span>
          </div>

          <div className="aboutSectionContainer2">
            <Typography component="h2">Connect With Us</Typography>

            <a
              href="https://www.instagram.com/shreya.singh_004?igsh=MW5pZ3AxaXBnMGdhNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;