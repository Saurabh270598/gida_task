import React, { useState } from "react";
import Dialoge from "./dialoge";

const FirstPage = () => {
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(true);
  return (
    <div className="mainPage">
      {show ? (
        <button
          className="btn"
          onClick={() => {
            setModal(true);
            setShow(false);
          }}
        >
          Click Me
        </button>
      ) : null}
      {modal && <Dialoge closeModal={setModal} openShow={setShow} />}
    </div>
  );
};

export default FirstPage;
