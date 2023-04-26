let allResume;
function fetchEverything(){
    fetch("../assets/Data.json")
    .then((response) => response.json())
    .then((data) => {
        allResume=data;        
    navigationHandler(allResume);  
    });       
}