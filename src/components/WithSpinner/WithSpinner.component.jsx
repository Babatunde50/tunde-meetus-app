import React from "react";


import { SpinnerContainer, SpinnerOverlay } from "./WithSpinner.styles";
import Modal from "../UI/Modal/Modal.component"

const withSpinner = WrappedComponent => ({
  isLoading,
  errorMessage,
  ...otherProps
}) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : errorMessage ? (
    <Modal title="An error occured">
        <p> { errorMessage } </p>
    </Modal>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default withSpinner;
