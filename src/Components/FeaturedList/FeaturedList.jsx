import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedList = () => {
  const [jobs, setJobs] = useState([]);
  // This not the right way to load limited data
  const [loadDataLength, setLoadDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="mb-6">
      <div>
        <h2 className="text-5xl">Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {jobs.slice(0, loadDataLength).map((job, idx) => (
          <Job job={job} key={idx}></Job>
        ))}
      </div>
      <div className={`my-4 ${loadDataLength === jobs.length && "hidden"}`}>
        <button onClick={() => setLoadDataLength(jobs.length)} className="btn">
          Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedList;
