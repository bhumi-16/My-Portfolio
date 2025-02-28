import React from 'react';

const SingleInfo = ({ text, Icon, link }) => {
  return (
    <div className="flex gap-4 items-center justify-start">
      <a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
        <Icon className="w-8 h-8 text-white" />
      </a>
      <p className="text-white">{text}</p>
    </div>
  );
};

export default SingleInfo;
