import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="bhumikachaturvedi10@gmail.com" Icon={HiOutlineMail} link="mailto:bhumikachaturvedi10@gmail.com" />
      <SingleInfo text="+91-7427802555" Icon={FiPhone} link="tel:+917427802555" />
      <SingleInfo text="Bikaner, Rajasthan 334001" Icon={IoLocationOutline} link="https://www.google.com/maps/place/Bikaner,+Rajasthan+334001" />
    </div>
  );
};

export default ContactInfo;
