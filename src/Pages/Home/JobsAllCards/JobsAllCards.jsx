import React, { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";
// Jobs All Card
const JobsAllCards = () => {
  const [jobsCards, setJobsCards] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobsCards(data);
      });
  }, []);
  return (
    <div>
      <div>
        {/* উপরের শিরোনাম */}
        <h1 className="text-4xl mt-20 font-bold text-center text-blue-500 mb-4">
          Explore Your Next Career Opportunity
        </h1>
        <p className="text-gray-600 text-center w-4/6 mx-auto mb-6">
          Join our team and take the next step in your professional journey. We
          offer competitive packages, a collaborative environment, and exciting
          projects to work on.
        </p>
      </div>
      <div className="grid grid-cols-1 mt-10 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {jobsCards.map((jobs) => (
          <JobCard key={jobs._id} jobs={jobs}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default JobsAllCards;
