import React from "react";

import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function Home() {
  const HeaderArray = [
    { name: "About", link: "/#about" },
    { name: "Skills", link: "/#skills" },
    { name: "Projects", link: "/#projects" },
    { name: "Contact", link: "/#contact" },
  ];

  return (
    <>
      <Header items={HeaderArray}></Header>
      <Content></Content>
      <Footer></Footer>
    </>
  );
}

export default Home;
