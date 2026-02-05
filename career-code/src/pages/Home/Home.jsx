import React from 'react'
import Banner from './Banner'
import AllJobs from '../JOB/AllJobs'
import { Suspense } from 'react'

const Home =  () => {
   const jobPromise = fetch("http://localhost:3000/jobs").then(res => res.json())
  return (
    <>
     <Banner/>
     <Suspense fallback={<p className="text-xl">Loading jobs...</p>}>
     <AllJobs jobPromise={jobPromise}/>
     </Suspense>
    </>
  )
}

export default Home
