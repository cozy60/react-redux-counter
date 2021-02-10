import React from "react";

const Count = ({ value }) => {
  // App.js로 부터 받은 Redux의 value 값 출력
  return (
    <div>
      <h1>Redux Count</h1>
      <h1>{value}</h1>
    </div>
  );
};

export default Count;
