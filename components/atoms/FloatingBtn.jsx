import React from "react";

const FloatingBtin = ({ onClick, icon, text }) => {
  return (
    <button
      onClick={onClick}
      className="border-[1pt] border-white fixed bottom-5 right-5 bg-[#2A1454] text-white text-xl p-2 rounded-full shadow-lg hover:bg-[#2A1454]/90 transition-all flex items-center gap-2"
    >
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
};

export default FloatingBtin;
