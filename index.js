const inputSpeed = document.getElementById("input-speed");
const rangeValue = document.getElementById("range-value");
const flightsTable = document.getElementById("flights-table");

flightsTable.addEventListener("mouseenter", () => {
  flightsTable.classList.add("active-border");
});
flightsTable.addEventListener("mouseleave", () => {
  flightsTable.classList.remove("active-border");
});

// document.addEventListener("DOMContentLoaded", () => console.log("loaded"));
// inputSpeed.addEventListener("input", () => {
//   rangeValue.textContent = inputSpeed.value;
// });

// setInterval(() => {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const response = xhr.responseText;
//       const responseDOM = document.createElement("div");
//       responseDOM.innerHTML = response;
//       const speed = responseDOM.querySelector("#speed").innerHTML;
//       const db_tmpWater = responseDOM.querySelector("#db-tmpWater").innerHTML;
//       console.log(speed, db_tmpWater);
//       if (speed) {
//         document.querySelector("#speed").innerHTML = speed;
//       }
//       if (db_tmpWater) {
//         document.querySelector("#db-tmpWater").innerHTML = db_tmpWater;
//       }
//     }
//   };
//   xhr.open("GET", "data.html", true);
//   xhr.send();
// }, 520);
