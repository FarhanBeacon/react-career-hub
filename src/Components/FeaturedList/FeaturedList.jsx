import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {jobs.map((job, idx) => (
          <Job job={job} key={idx}></Job>
        ))}
      </div>
    </div>
  );
};

export default FeaturedList;
