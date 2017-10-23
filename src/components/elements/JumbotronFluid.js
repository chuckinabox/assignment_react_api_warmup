import React from "react";

const JumbotronFluid = props => {
  const { heading, lead } = props;
  return (
    <div className="jumbotron">
      <h2>{heading}</h2>
      <p>{lead}</p>
    </div>
  );
};

export default JumbotronFluid;
