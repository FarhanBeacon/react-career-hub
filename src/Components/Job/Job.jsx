import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";


const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    salary,
    location,
  } = job;
  const placeLeft = {
    "justify-content": "start",
  };
  console.log(logo);
  return (
    <div className="card card-compact bg-base-100 text-left drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] p-4">
      <figure style={placeLeft} className="px-4">
        <img src={logo} alt="logo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <h3 className="text-xl">{company_name}</h3>
        <div className="space-y-2">
          <div className="flex gap-2">
            <button className="btn btn-outline">{remote_or_onsite}</button>
            <button className="btn btn-outline">{job_type}</button>
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
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object,
};

export default Job;
