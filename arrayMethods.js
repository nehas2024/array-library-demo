let jobsArray = [];
function addJob(job) {
    if (job.title && job.type && job.company) {
        jobsArray.push(job);
    }
}
addJob({
    title: "Senior React Developer",
    type: "Full-Time",
    description: "We are seeking a talented Front-End Developer...",
    location: "Boston, MA",
    salary: "$70K - $80K",
    company: {
        name: "NewTek Solutions",
        description: "Leading technology company.",
        contactEmail: "contact@teksolutions.com",
        contactPhone: "555-555-5555"
    }
});
console.log(jobsArray);
function updateJob(title, updatedDetails) {
    const job = jobsArray.find(job => job.title === title);
    if (job) {
        Object.assign(job, updatedDetails);
    }
}
updateJob("Senior React Developer", {
    salary: "$80K - $90K"
});
console.log(jobsArray);
function removeJob(title) {
    jobsArray = jobsArray.filter(job => job.title !== title);
}


