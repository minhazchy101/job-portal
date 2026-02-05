import React from 'react'
import bannerOne from "../../assets/images/Team Spirit.jpeg"
import bannerTwo from "../../assets/images/download (5).jpeg"
import { motion } from "motion/react"
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[85vh] my-10">

  <div className="hero-content flex-col lg:flex-row">
    {/* photo */}
      <div className="flex-1">
    <motion.img
      src={bannerTwo}
      className="max-w-sm rounded-t-4xl rounded-bl-4xl border-s-8 border-t-8 border-blue-400 shadow-2xl"
       animate={{ y:[80, 150, 80],
        transition: { duration: 5, repeat: Infinity }, }} 
    />
    <motion.img
      
       src={bannerOne}
      className="max-w-sm rounded-t-4xl rounded-bl-4xl border-s-8 border-t-8 border-blue-400 shadow-2xl"
       animate={{ x:[70, 150, 70],
        transition: { duration: 10, repeat: Infinity }, }} 
    />
    </div>
    <div className='flex-1'>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      className="text-5xl font-bold">All Job News!</motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>

</div>
  )
}

export default Banner
