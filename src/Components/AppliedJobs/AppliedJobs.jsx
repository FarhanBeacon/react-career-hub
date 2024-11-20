import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
import { useEffect, useState } from "react";
import SubBanner from "../SubBanner/SubBanner";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const data = useLoaderData();
  const [appliedJobs, setAppliedJob] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  useEffect(() => {
    const storedData = getStoredJobApplication();
    if (data.length > 0) {
      // const jobsApplied = data.filter(job=>storedData.includes(job.id));
      const jobsApplied = [];
      for (const id of storedData) {
        const job = data.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJob(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [data]);

  const handleFilter = (filter)=>{
    if(filter === "All"){
      setDisplayJobs(appliedJobs);
    }else if(filter === "Remote"){
      const remoteJobs = appliedJobs.filter(job=> job.remote_or_onsite === "Remote");
      setDisplayJobs(remoteJobs);
    }else if(filter === "Onsite"){
      const onsiteJobs = appliedJobs.filter(job=> job.remote_or_onsite === "Onsite");
      setDisplayJobs(onsiteJobs);
    }
  }
  return (
    <div>
      <SubBanner value={"Applied Jobs"}></SubBanner>
      <div className="w-10/12 mx-auto">
      <div className="w-full flex justify-end my-3">
        <details className="dropdown">
          <summary className="btn m-1">Filter By</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={()=> handleFilter("All")}>
              <a>All</a>
            </li>
            <li onClick={()=> handleFilter("Remote")}>
              <a>Remote</a>
            </li>
            <li onClick={()=> handleFilter("Onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        {displayJobs.map((job, idx) => (
          <AppliedJob key={idx} job={job}></AppliedJob>
        ))}
      </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
