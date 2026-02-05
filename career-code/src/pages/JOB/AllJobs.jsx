import React from 'react'
import { use } from 'react'
import JobCard from '../shared/JobCards';

const AllJobs = ({jobPromise}) => {
    const jobData = use(jobPromise);
    console.log(jobData)
  return (
    <div className='my-10'>
      <h1 className='text-3xl font-bold'>ALL JOBS: {jobData.length}</h1>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
      {jobData.map(job => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
    </div>
  )
}

export default AllJobs
