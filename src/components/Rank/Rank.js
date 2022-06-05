import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3" style={{ paddingTop: "15px" }}>
        {`${name}, your current entry count is...`}
      </div>
      <div className="white f1">{entries}</div>
    </div>
  );
};

export default Rank;
