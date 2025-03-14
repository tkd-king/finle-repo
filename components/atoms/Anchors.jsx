import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Anchors = ({ text, level, href = '/' }) => {
    let anchorstyle = '';

    switch (level) {
        case '1':
            anchorstyle = ` capitalize font-normal text-[15px] leading-[22px] text-[#2A1454]  `;
            break;
        case '2':
            anchorstyle = 'text-[15px] font-bold text-white '
            break;
        default:
            anchorstyle = extraclass;
            break;
    }

    return (
        <div className='relative  flex flex-col'>
            <Link className={` ${anchorstyle} peer `} href={href}>
                {text}
            </Link>
            <span className='bg-gradient-to-r from-[#2A1454]  to-[#8750F7] duration-[0.1s] h-[2px] w-full absolute bottom-0 hidden peer-hover:block peer-active:block  ' ></span>
        </div>
    );
};

Anchors.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    level: PropTypes.string,
};

export default Anchors;
