import React from "react";
import { Button, Spinner } from "react-bootstrap";
import "../styles.scss";

const button = {
  form: {
    background: "#EE4E54",
    borderColor: "#EE4E54",
    color: "white !important"
  }
};

export default ({
                  isLoading,
                  text,
                  loadingText,
                  className = "",
                  disabled = false,
                  ...props
                }) =>
  <Button
    className={`LoaderButton ${className}`}
    // disabled={disabled || isLoading}
    {...props}
    style={ button.form }
  >
    {isLoading && <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />}
    {!isLoading ? text : loadingText}
  </Button>;
