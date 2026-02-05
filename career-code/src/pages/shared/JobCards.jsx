import React from 'react';
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaClock,
} from 'react-icons/fa';

const JobCard = ({ job }) => {
  const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    company,
    company_logo,
    requirements,
  } = job;

  return (
    <div className="card bg-base-100 shadow-xl border">
      <div className="card-body">

        {/* Company Info */}
        <div className="flex items-center gap-4">
          <img
            src={company_logo}
            alt={company}
            className="w-12 h-12 rounded object-cover"
          />
          <div>
            <h2 className="card-title">{title}</h2>
            <p className="text-sm text-gray-500">{company}</p>
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 text-sm mt-3 text-gray-600">
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt /> {location}
          </span>
          <span className="flex items-center gap-1">
            <FaBriefcase /> {jobType}
          </span>
          <span className="badge badge-outline">{category}</span>
        </div>


        {/* Requirements */}
        <div className="flex flex-wrap gap-2 mt-3">
          {requirements.slice(0, 4).map((skill, index) => (
            <span
              key={index}
              className="badge badge-secondary badge-outline"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="card-actions justify-between items-center mt-4">
          <div className="text-sm text-gray-600 space-y-1">
            <p className="flex items-center gap-1">
              <FaMoneyBillWave />
              {salaryRange.min} - {salaryRange.max} {salaryRange.currency.toUpperCase()}
            </p>
            <p className="flex items-center gap-1">
              <FaClock /> Apply by {applicationDeadline}
            </p>
          </div>

          <button className="btn btn-primary btn-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
