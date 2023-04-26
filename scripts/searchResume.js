const resume = document.getElementById("resume");
const noResume = document.getElementById("noResult");
noResume.classList.add("hidden");
let counter = 0;
let inputElem = document.getElementById("searchResume");
inputElem.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    fetchData(e.target.value);
  }
});
function fetchData(val) {
  fetch("../assets/Data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const inputValue = document
        .getElementById("searchResume")
        .value.toLowerCase();
        const filteredData = {
            ...data,
            resume: data.resume.filter((item) => {
              const appliedFor = item.basics.AppliedFor.toLowerCase();
              return appliedFor.includes(inputValue);
            }),
          };if(filteredData.resume[0]){

            resume.classList.remove("hidden");            
            noResume.classList.add("hidden");
            navigationHandler(filteredData);
          } else {
            document.getElementById("next").classList.add("hidden");
            document.getElementById("previous").classList.add("hidden");           
            resume.classList.add("hidden");            
            noResume.classList.remove("hidden");
          }     
         
    });
}