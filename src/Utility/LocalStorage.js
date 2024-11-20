const getStoredJobApplication = () => {
  const getJobApplications = localStorage.getItem("job-application");
  if (getJobApplications) {
    return JSON.parse(getJobApplications);
  }
  return [];
};

const storedAppliedJob = (id) => {
  const storedAppliedJob = getStoredJobApplication();
  
  const exists = storedAppliedJob.find((jobId) => jobId === id);
  if(!exists){
    storedAppliedJob.push(id);
    localStorage.setItem("job-application", JSON.stringify(storedAppliedJob));
  }
};

export { storedAppliedJob, getStoredJobApplication };
