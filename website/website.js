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
        alert(error);
        console.log("Error: " + error)
        document.getElementById("name").textContent = ''
        document.getElementById("age").textContent = ''
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
      document.getElementById("subitleH4").textContent = jsonData[0].msg
    })
    .catch(function (error){
        console.log("Error: " + error)      
    })
}

getMsg()

function getInputValueDogs(){
    let inputVal = document.getElementById("indexInputDogs").value;
    let x = "/dogs/" + inputVal;
    getDog(x)
}

let inputPressed = document.getElementById("indexInputDogs");

try {
    inputPressed.addEventListener("keyup", function(e){
        if (e.key === 'Enter') {
            e.preventDefault();
            document.getElementById("searchBtnDogs").click();
        }
    })
} catch (error) {
    console.log(error)
}
    


function getInputValueCats(){
    let inputVal = document.getElementById("indexInputCats").value;
    let x = "/cats/" + inputVal;
    getDog(x)
}

let inputPressed2 = document.getElementById("indexInputCats");
console.log(inputPressed2.value)

try {
    inputPressed2.addEventListener("keyup", function(e){
        if (e.key === 'Enter') {
            e.preventDefault();
            document.getElementById("searchBtnCats").click();
        }
    })
} catch (error) {
    console.log(error)
}


async function getCat(endpoint) {
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
        alert(error);
        console.log("Error: " + error)
        document.getElementById("name").textContent = ''
        document.getElementById("age").textContent = ''
    })
} 
