import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
      <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
      <p className='text-white'>Hi! I'm Bhumika Chaturvedi, a passionate Full-Stack Developer and Data Science Enthusiast with a strong foundation in web development, machine learning, and cloud technologies. Currently pursuing my B.Tech in Computer Science (Data Science), I enjoy building responsive web applications and solving real-world problems using data-driven insights.

I have experience working with React.js, Node.js, Python, SQL, and MongoDB, along with modern frameworks like Tailwind CSS and Bootstrap. My projects range from developing dynamic websites to automating workflows using AI and analytics.

Beyond coding, I love designing intuitive user interfaces, optimizing performance, and exploring emerging tech trends. I'm always open to new opportunities where I can contribute, learn, and grow as a developer.</p>
<button className='border border-orange rounded-full py-2 px-4 txt-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>My Projects</button>

    </div>
  )
}

export default AboutMeText


