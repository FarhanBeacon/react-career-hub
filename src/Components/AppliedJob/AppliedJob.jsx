import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";

const AppliedJob = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    salary,
    location,
  } = job;
  return (
    <div className="card-compact bg-base-100 drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] p-4 flex items-center mb-6">
      <div className="px-4 bg-[#d6d6d6] w-[240px] h-[240px] grid grid-cols-3 content-center">
        <div className="col-span-3">
          <img className="justify-self-center" src={logo} alt="logo" />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <h3 className="text-xl">{company_name}</h3>
        <div className="space-y-2">
          <div className="flex gap-2">
            <button className="btn btn-outline btn-primary">{remote_or_onsite}</button>
            <button className="btn  btn-outline btn-primary">{job_type}</button>
          </div>
          <div className="flex justify-start text-lg">
            <p className="flex items-center gap-1 w-fit">
              <FaLocationDot />
              {location}
            </p>
            <p className="flex items-center gap-1 w-fit">
              <AiFillDollarCircle />
              Salary: {salary}
            </p>
          </div>
        </div>
        <div className="card-actions"></div>
      </div>
      <div>
        <button className="btn btn-active btn-primary">View Details</button>
      </div>
    </div>
  );
};

AppliedJob.propTypes = {
  job: PropTypes.object,
};

export default AppliedJob;
