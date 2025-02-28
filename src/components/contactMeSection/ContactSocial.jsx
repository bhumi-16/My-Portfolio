import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";


const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
      <SingleContactSocial link='https://github.com/bhumi-16' Icon={FiGithub}/>
      <SingleContactSocial link='https://www.linkedin.com/in/bhumikachaturvedi16/' Icon={FaLinkedinIn}/>
      <SingleContactSocial link='https://web.telegram.org/k/' Icon={FaTelegramPlane}/>
    </div>
  );
};

export default ContactSocial
