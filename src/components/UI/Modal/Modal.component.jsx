import React from "react";
import Button from "../Button/Button.component";

import "./Modal.component.jsx";
import "./Modal.styles.css";

export default ({ handleClose, title, children, footer }) => {
  return (
    <>
      <div className="modal-backdrop" onClick={handleClose}></div>
      <div className="modal">
        <h1>{title}</h1>
        <div className="content">{children}</div>
        <footer className="footer">
          {footer}
          <Button click={handleClose}> Close </Button>
        </footer>
      </div>
    </>
  );
};
