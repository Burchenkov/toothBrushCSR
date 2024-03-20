import Main from "./Main";
import About from "./About";
import Footer from "./Footer";
import Modal from "./Modal";
import React, { useState } from "react";

function App() {
  const [modalActive, setModalActive] = useState(false);
  // console.log(modalActive);
  return (
    <div className="App">
      <Main active={modalActive} setActive={setModalActive} />
      <About />
      <Modal active={modalActive} setActive={setModalActive} />
      <Footer />
    </div>
  );
}

export default App;
