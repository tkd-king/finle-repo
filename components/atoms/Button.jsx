import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, text, variant, type }) => {
  let buttonStyle = '';

  switch (variant) {
    case 'header-button':
      buttonStyle = " text-white rounded-[50px] w-[114px] md:w-[154px] h-[39px]  md:h-[49px] bg-gradient-to-r from-[#8750F7] via-[#2A1454] to-[#8750F7] text-center";
      break;
      case 'heeder-button':
      buttonStyle = "mt-4 md:mt-0 text-white rounded-[50px] w-[154px] h-[49px] bg-gradient-to-r from-[#8750F7] via-[#2A1454] to-[#8750F7] text-center";
      break;
      case 'icon-button':
      buttonStyle = " text-white absolute  md:text-[20px] text-[10px] top-1 p-2 md:p-3 text-xl rounded-[100%] bg-gradient-to-r from-[#8750F7] via-[#2A1454] to-[#8750F7] text-center";
      break;
      case 'loading-button':
      buttonStyle = "cursor-progress text-white rounded-[50px] w-[114px] md:w-[154px] h-[39px]  md:h-[49px] bg-gradient-to-r from-[#8750F7]/80 via-[#2A1454]/80 to-[#8750F7]/80 text-center";
      break;

    default:
      buttonStyle = "w-[154px] h-[49px] text-center";
      break;
  }

  return (
    <button className={buttonStyle} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
