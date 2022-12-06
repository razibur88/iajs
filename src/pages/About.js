import React from "react";
import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";
import Aboutgroup from "../components/aboutgroup/Aboutgroup";
import Aboutimprovment from "../components/aboutimprovment/Aboutimprovment";
import Aboutprocess from "../components/aboutprocess/Aboutprocess";
import Aboutinspire from "../components/aboutinspire/Aboutinspire";
import Aboutbenefit from "../components/aboutbenefit/Aboutbenefit";
import Aboutteam from "../components/aboutteam/Aboutteam";

const About = () => {
  return (
    <div>
      <Menu />
      <Aboutgroup />
      <Aboutimprovment />
      <Aboutprocess />
      <Aboutinspire />
      <Aboutbenefit />
      <Aboutteam />
      <Footer />
    </div>
  );
};

export default About;
