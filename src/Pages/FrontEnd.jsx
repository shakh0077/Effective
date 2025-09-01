import React from 'react'
import { Link } from 'react-router-dom'

function FrontEnd() {
  return (
    <div className='Box'>
      <Link to='/my-courses'>
        <button className='btn py-2 px-7 bg-blue-600 rounded-xl text-white cursor-pointer'>←Back</button>
      </Link>

      <h1 className='text-3xl font-bold text-center mt-10 mb-10'>Front-End Development</h1>
      <div className='text-center text-lg font-medium'>
        <p>Front-end development is the practice of converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data. The aim of front-end development is to provide an intuitive and engaging user experience.</p>
        <p className='mt-5'>Front-end developers are responsible for the design, layout, and interactivity of a website or web application. They work closely with designers to ensure that the visual elements of a site are consistent with the overall brand and user experience. They also collaborate with back-end developers to ensure that the front-end and back-end of a site work seamlessly together.</p>
        <p className='mt-5'>Some of the key skills required for front-end development include proficiency in HTML, CSS, and JavaScript, as well as knowledge of front-end frameworks such as React, Angular, or Vue.js. Front-end developers should also have a good understanding of user experience (UX) design principles and be able to create responsive designs that work well on a variety of devices.</p>
        <p className='mt-5'>Overall, front-end development is a critical component of modern web development, as it plays a key role in shaping the user experience and ensuring that websites and web applications are engaging, intuitive, and easy to use.</p>
      </div>
      <div className='text-center mt-10'>
        <Link to='/my-courses'>
          <button className='btn py-2 px-7 bg-lime-600 rounded-xl text-white cursor-pointer'>Get Started</button>
        </Link>
      </div>


    </div>
  )
}

export default FrontEnd