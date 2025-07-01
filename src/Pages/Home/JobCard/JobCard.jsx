import React from "react";
import { motion } from "framer-motion";

const JobCard = ({ jobs }) => {
  const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange: { min, max, currency },
    description,
    company,
    requirements,
    responsibilities,
    status,
    company_logo,
  } = jobs;

  return (
    <motion.div
      className="max-w-md mx-auto bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 shadow-xl rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* হেডিং */}
      <div className="bg-white p-6 rounded-t-xl">
        <h1 className="text-3xl font-extrabold text-purple-600 mb-3 text-center">
          {title}
        </h1>
        <p className="text-gray-700 text-center">
          Join the leading industry with endless possibilities and exciting
          opportunities.
        </p>
      </div>

      {/* লোগো এবং তথ্য */}
      <div className="p-6 text-white space-y-4">
        <motion.img
          src={company_logo}
          alt="Company Logo"
          className="w-24 h-24 mx-auto rounded-full shadow-md border-4 border-white"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.4 }}
        />
        <h2 className="text-2xl font-bold text-center">{title}</h2>
        <div className="space-y-2 text-center">
          <p>
            <span className="font-semibold">Company:</span> {company}
          </p>
          <p>
            <span className="font-semibold">Location:</span> {location}
          </p>
          <p>
            <span className="font-semibold">Job Type:</span> {jobType}
          </p>
          <p>
            <span className="font-semibold">Salary:</span> {min} - {max}{" "}
            {currency.toUpperCase()}
          </p>
          <p>
            <span className="font-semibold">Deadline:</span>{" "}
            {applicationDeadline}
          </p>
        </div>
      </div>

      {/* Apply Button */}
      <motion.button
        className="w-full bg-white text-purple-600 py-3 px-4 font-bold rounded-b-xl hover:bg-purple-600 hover:text-white focus:ring-4 focus:ring-purple-300 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        Apply Now
      </motion.button>
    </motion.div>
  );
};

export default JobCard;
