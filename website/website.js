async function getDog(endpoint) {
    let str = "http://localhost:3000"
    let url = str + endpoint

    const api_url = url
    const response = await fetch (api_url);
    const data = await response.json();
    
    const{name, age} = data;

    document.getElementById("name").textContent = name
    document.getElementById("age").textContent = age
}

async function getMsg() {
    const api_url = "http://localhost:3000"
    const response = await fetch (api_url);
    const data = await response.json();
    console.log(data)
    document.getElementById("msg").textContent = data[0].msg
}
getMsg()

function getInputValue(){
    var inputVal = document.getElementById("myInput").value;
    let x = "/dogs/" + inputVal;
    getDog(x)
}
