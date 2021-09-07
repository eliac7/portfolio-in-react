import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
};

export default App;
