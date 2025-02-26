import React from 'react'
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { TbSql } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import SingleSkill from './SingleSkill';

const skills = [{
    skill:'Python',
    icon: FaPython,
},
{
    skill:'JavaScript',
    icon:IoLogoJavascript,
},
{
    skill:'ReactJs',
    icon:GrReactjs,
},
{
    skill:'SQL',
    icon:TbSql,
},
{
    skill:'Node.js',
    icon:FaNodeJs,
},
{
    skill:'TailwindCss',
    icon:RiTailwindCssFill,
},
{
    skill:'HTML5',
    icon:FaHtml5,
},
{
    skill:'CSS3',
    icon:FaCss3,
},
];
const AllSkills = () => {
  return (
    <div>
      <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
        {skills.map((item,index)=>{
            return <SingleSkill key={index} text={item.skill} imgSvg={<item.icon/>}/>
        })}
      </div>
    </div>
  )
}

export default AllSkills
