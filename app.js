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
