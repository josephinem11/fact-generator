let request = new XMLHttpRequest();
let url = "http://numbersapi.com/random/year?json"; 
request.open("GET", url,true);

request.onload = function(){
    let data = JSON.parse(this.response);
    let number = document.getElementById("number");
    if (request.status >= 200 && request.status < 400){
       number.innerHTML = data.text;
       
      
    }
};
request.send();
