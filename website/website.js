async function getDog(endpoint) {
    let str = "http://localhost:3000"
    let url = str + endpoint

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        console.log(jsonData)
        document.getElementById("name").textContent = jsonData.name
        document.getElementById("age").textContent = jsonData.age
      })
      .catch(function (error){
        console.log("Error: " + error)
      })
} 

async function getMsg() {
  let url = "http://localhost:3000"

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      console.log(jsonData)
      document.getElementById("msg").textContent = jsonData[0].msg
    })
    .catch(function (error){
        console.log("Error: " + error)      
    })
}

getMsg()

function getInputValue(){
    let inputVal = document.getElementById("indexInput").value;
    let x = "/dogs/" + inputVal;
    getDog(x)
}

let inputPressed = document.getElementById("indexInput");

inputPressed.addEventListener("keyup", function(e){
    if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById("searchBtn").click();
    }
})
