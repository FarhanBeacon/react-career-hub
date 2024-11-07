import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
import { useEffect, useState } from "react";
import SubBanner from "../SubBanner/SubBanner";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const data = useLoaderData();
  const [appliedJobs, setAppliedJob] = useState([]);
  useEffect(() => {
    const storedData = getStoredJobApplication();
    if(data.length > 0){
        const JobsApplied = data.filter(job=>storedData.includes(job.id));
        setAppliedJob(JobsApplied);
    }
  }, [data]);
  return (
    <div>
      <SubBanner value={"Applied Jobs"}></SubBanner>
      <div className="w-10/12 mx-auto">
      {
        appliedJobs.map((job, idx)=><AppliedJob key={idx} job={job}></AppliedJob>)
      }
      </div>
    </div>
  );
};

export default AppliedJobs;
