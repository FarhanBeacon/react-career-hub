import { useLoaderData, useParams } from "react-router-dom";
import { CiDollar, CiMail, CiLocationOn } from "react-icons/ci";
import "./View.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { storedAppliedJob } from "../../Utility/LocalStorage";
import SubBanner from "../SubBanner/SubBanner";

const View = () => {
  const id = parseInt(useParams().id);
  const details = useLoaderData();
  const jobDetails = details.find((job) => job.id === id);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = jobDetails;
  const notify = () => {
    storedAppliedJob(id);
    toast("You have applied successfully!!!");
  };
  return (
    <div className="mb-4">
      <SubBanner value={"Applied Details"}></SubBanner>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 border-2 rounded-xl space-y-2 p-4">
          <p className="text-lg">
            <span className="font-semibold">Job Description: </span>
            {job_description}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Job Responsibility: </span>
            {job_responsibility}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Educational Requirements: </span>
            {educational_requirements}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Experiences: </span>
            {experiences}
          </p>
        </div>
        <div className="col-span-1 border-2 rounded-xl p-5 flex flex-col">
          <div className="flex-1 space-y-3">
            <div className="space-y-1">
              <h3 className="text-xl">Job Details</h3>
              <hr />
              <h4>
                <span className="font-semibold">Salary:</span> {salary}
              </h4>
              <h4>
                <span className="font-semibold">Job-Title:</span> {job_title}
              </h4>
            </div>
            <div className="space-y-1">
              <h3 className="text-xl">Contact Information</h3>
              <hr />
              <h4 className=" flex items-center gap-1">
                <CiDollar />
                <span className="font-semibold">Phone:</span>{" "}
                {contact_information.phone}
              </h4>
              <h4 className=" flex items-center gap-1">
                <CiMail />
                <span className="font-semibold">Email:</span>{" "}
                {contact_information.email}
              </h4>
              <h4 className=" flex flex-wrap items-center gap-1">
                <CiLocationOn />
                <span className="font-semibold">Address:</span>{" "}
                {contact_information.address}
              </h4>
            </div>
          </div>
          <div>
            <button onClick={notify} className="btn w-full">
              Apply Now
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
