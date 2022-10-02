//This is an example of ez GET api.
//Base url
const api_url = "http://localhost:8080/";


async function getapi(url) {
  const response = await fetch(url);

  
  var data = await response.json();
  if (response) {
    hideloader();
  }
  show(data);
}

getapi(api_url);

function hideloader() {
  document.getElementById("loading").style.display = "none";
}

function show(data) {

  //V function start here V
  var temp = `username:${data.data[0].username}, password:${data.data[0].password}`;
  console.log(data.data);
}
