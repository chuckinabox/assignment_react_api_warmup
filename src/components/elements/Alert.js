import React from "react";

const Alert = ({ type, children, error }) => {
  if (error) {
    return (
      <div className={`alert alert-${type}`} role="alert">
        {children}
      </div>
    );
  } else {
    return <div />;
  }
};

Alert.defaultProps = {
  type: "success"
};

export default Alert;
