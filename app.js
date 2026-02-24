let interviewApplications = [];
let rejectedApplications = [];
let currentStatus = "";

let total = document.getElementById("Total");
let interviewCount = document.getElementById("Interview");
let rejectedCount = document.getElementById("Rejected");

const totalApplication = document.getElementById("all-application");
const availableJobs = document.getElementById("total-jobs");
const noAvailableJobs = document.getElementById("No-jobs-available");
const maincontainer = document.querySelector("main");
const filterBtns = document.querySelectorAll(".filter-btn");
const filterApplications = document.getElementById("filter-application");

if (totalApplication.children.length == 0) {
  noAvailableJobs.classList.remove("hidden");
}

function counter() {
  let totalAvailableJobs = totalApplication.children.length;
  total.innerText = totalAvailableJobs;
  availableJobs.innerHTML = totalAvailableJobs;
  interviewCount.innerText = interviewApplications.length;
  rejectedCount.innerText = rejectedApplications.length;
}
counter();
function toggleStyle(id) {
  filterBtns.forEach((btn) => {
    btn.classList.remove("btn-info");
    btn.classList.add("btn-soft");
  });

  const selected = document.getElementById(id);
  currentStatus = id;
  selected.classList.remove("btn-soft");
  selected.classList.add("btn-info");

  if (id == "all-btn") {
    totalApplication.classList.remove("hidden");
    filterApplications.classList.add("hidden");
    if (totalApplication.children.length === 0) {
      noAvailableJobs.classList.remove("hidden");
    } else {
      noAvailableJobs.classList.add("hidden");
    }
  } else if (id == "Interview-btn") {
    if (interviewApplications.length == 0) {
      noAvailableJobs.classList.remove("hidden");
    } else {
      noAvailableJobs.classList.add("hidden");
    }
    totalApplication.classList.add("hidden");
    filterApplications.classList.remove("hidden");
    renderInterview();
  } else if (id == "Rejected-btn") {
    if (rejectedApplications.length == 0) {
      noAvailableJobs.classList.remove("hidden");
    } else {
      noAvailableJobs.classList.add("hidden");
    }
    totalApplication.classList.add("hidden");
    filterApplications.classList.remove("hidden");
    renderRejected();
  }
}