import React  from "react";

const Container = ({ children }) => {
  return (
    <div className=" w-[100%] px-[9%] border-box ">
      {" "}
      {children}
      {" "}
    </div>
  );
};

export default Container;
