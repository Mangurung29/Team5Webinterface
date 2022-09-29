
// api url
const api_url = 
      "https://462k64bxqd.execute-api.eu-west-2.amazonaws.com/Stage2/items";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>Service Number</th>
          <th>Surname</th>
          <th>DateTime</th>
          <th>ID Stamp</th>
          <th>Building Number</th>
          <th>Access Granted</th>
          <th>Authorised Access?</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.list) {
        tab += `<tr> 
    <td>${r.ServiceNumber} </td>
    <td>${r.surname}</td>
    <td>${r.DateTime}</td> 
    <td>${r.IDStamp}</td>  
    <td>${r.BuildingNumber}</td>
    <td>${r.AccessGranted}</td> 
    <td>${r.AuthorisedAccess}</td> 
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("logs").innerHTML = tab;
}


function find() {
    document.getElementById("initial-search").search();
}



function details() {
    console.log(document.forms["visitor"]["serviceno"].value);
    console.log(document.forms["visitor"]["rank"].value);
    console.log(document.forms["visitor"]["firstname"].value);
    console.log(document.forms["visitor"]["lastname"].value);
    console.log(document.forms["visitor"]["pid"].value);
    
}




function find() {
    let x = document.getElementById("initial-search").value;
}
// if (x == "") {
// alert("");
// return false;
