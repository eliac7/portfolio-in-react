import { useState } from "react";

import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function Home() {
  const HeaderArray = [
    { name: "About", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];
  const [headerFixed, setHeaderFixed] = useState(false);

  const fixed = (fixed) => {
    setHeaderFixed(fixed);
  };

  return (
    <>
      <Header items={HeaderArray} fixed={fixed}></Header>
      <Content fixed={headerFixed}></Content>
      <Footer></Footer>
    </>
  );
}

export default Home;
