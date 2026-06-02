import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  logo,
  logoWidth: "18vmax",

  burgerColor: "#2563EB",
  burgerColorHover: "#1D4ED8",

  navColor1: "white",

  logoHoverSize: "8px",
  logoHoverColor: "#2563EB",

  link1Text: "Home",
link2Text: "Shop",
link3Text: "Contact",
link4Text: "Login",

link1Url: "/",
link2Url: "/products",
link3Url: "/contact",
link4Url: "/login",

  link1Size: "1.1vmax",

  link1Color: "#374151",
  link1ColorHover: "#2563EB",

  link1Margin: "1vmax",

  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",

  profileIconUrl: "/login",

  profileIconColor: "#374151",
  searchIconColor: "#374151",
  cartIconColor: "#374151",

  profileIconColorHover: "#2563EB",
  searchIconColorHover: "#2563EB",
  cartIconColorHover: "#2563EB",

  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;