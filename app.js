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
maincontainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-accent")) {
    const parentNodes = e.target.parentNode.parentNode;
    const companyName = parentNodes.querySelector(".companyName").innerText;
    const jobName = parentNodes.querySelector(".jobName").innerText;
    const jobinfo = parentNodes.querySelector(".jobinfo").innerText;
    const discription = parentNodes.querySelector(".discription").innerText;
    const changeStatus = parentNodes.querySelector(".Status");
    changeStatus.innerHTML = "Interview";
    changeStatus.classList.add("btn-accent");
    changeStatus.classList.remove("btn-error");
    const cardInfo = {
      companyName,
      jobName,
      jobinfo,
      changeStatus: "Interview",
      discription,
    };

    let jobExist = interviewApplications.find(
      (item) => item.companyName == cardInfo.companyName
    );
    if (!jobExist) {
      interviewApplications.push(cardInfo);
    }
    rejectedApplications = rejectedApplications.filter(
      (item) => item.companyName != cardInfo.companyName
    );
    counter();

    if (currentStatus == "Rejected-btn") {
      renderRejected();
    }
  }else if (e.target.classList.contains("btn-error")) {
    const parentNodes = e.target.parentNode.parentNode;
    const companyName = parentNodes.querySelector(".companyName").innerText;
    const jobName = parentNodes.querySelector(".jobName").innerText;
    const jobinfo = parentNodes.querySelector(".jobinfo").innerText;
    const discription = parentNodes.querySelector(".discription").innerText;
    const changeStatus = parentNodes.querySelector(".Status");
    changeStatus.innerHTML = "Rejected";
    changeStatus.classList.remove("btn-accent");
    changeStatus.classList.add("btn-error");

    const cardInfo = {
      companyName,
      jobName,
      jobinfo,
      changeStatus: "Rejected",
      discription,
    };

    let jobExist = rejectedApplications.find(
      (item) => item.companyName == cardInfo.companyName
    );
    if (!jobExist) {
      rejectedApplications.push(cardInfo);
    }

    interviewApplications = interviewApplications.filter(
      (item) => item.companyName != cardInfo.companyName
    );

    counter();

    if (currentStatus == "Interview-btn") {
      renderInterview();
    }
  }else if (e.target.closest(".btn-circle")) {
    const card = e.target.closest(".card");
    const companyName = card.querySelector(".companyName").innerText;

    interviewApplications = interviewApplications.filter(
      (item) => item.companyName !== companyName
    );
    rejectedApplications = rejectedApplications.filter(
      (item) => item.companyName !== companyName
    );

    const allCards = totalApplication.querySelectorAll(".card");
    allCards.forEach((item) => {
      if (item.querySelector(".companyName").innerText === companyName) {
        item.remove();
      }
    });

    card.remove();
    counter();

    if (currentStatus === "Interview-btn") {
      if (interviewApplications.length === 0) {
        noAvailableJobs.classList.remove("hidden");
      }
    } else if (currentStatus === "Rejected-btn") {
      if (rejectedApplications.length === 0) {
        noAvailableJobs.classList.remove("hidden");
      }
    } else {
      if (totalApplication.children.length === 0) {
        noAvailableJobs.classList.remove("hidden");
      }
    }
  }
});
function renderInterview() {
  filterApplications.innerHTML = "";
  interviewApplications.forEach((interview) => {
    let div = document.createElement("div");
    div.className = "card bg-base-100 w-full shadow-sm";
    div.innerHTML = `
      <div class="card-body space-y-2 relative">
        <h3 class="companyName text-[#002C5C] font-extrabold text-[20px]">
          ${interview.companyName}
        </h3>
        <p class="jobName">${interview.jobName}</p>
        <button class="btn btn-circle btn-sm absolute right-6">
          <img src="./assets/Trash.png" alt="" />
        </button>
        <p class="jobinfo text-[13px]">${interview.jobinfo}</p>
        <div>
          <button class="btn btn-accent Status">${interview.changeStatus}</button>
        </div>
        <p class="discription">${interview.discription}</p>
        <div class="space-x-2">
          <button class="btn btn-outline btn-accent">INTERVIEW</button>
          <button class="btn btn-outline btn-error">REJECTED</button>
        </div>
      </div>`;
    filterApplications.appendChild(div);
  });
}
function renderRejected() {
  filterApplications.innerHTML = "";
  for (let rejected of rejectedApplications) {
    let div = document.createElement("div");
    div.className = "card bg-base-100 w-full shadow-sm";
    div.innerHTML = `
      <div class="card-body space-y-2 relative">
        <h3 class="companyName text-[#002C5C] font-extrabold text-[20px]">
          ${rejected.companyName}
        </h3>
        <p class="jobName">${rejected.jobName}</p>
        <button class="btn btn-circle btn-sm absolute right-6">
          <img src="./assets/Trash.png" alt="" />
        </button>
        <p class="jobinfo text-[13px]">${rejected.jobinfo}</p>
        <div>
          <button class="btn btn-error Status">${rejected.changeStatus}</button>
        </div>
        <p class="discription">${rejected.discription}</p>
        <div class="space-x-2">
          <button class="btn btn-outline btn-accent">INTERVIEW</button>
          <button class="btn btn-outline btn-error">REJECTED</button>
        </div>
      </div>`;
    filterApplications.appendChild(div);
  }
}