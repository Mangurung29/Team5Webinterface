//fetch('https://462k64bxqd.execute-api.eu-west-2.amazonaws.com/Stage2/items')
// fetchRes is the promise to resolve
// it by using.then() method
//.then(response => response.json())
//.then(data => console.log(data));

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
          <th>DateTime</th>
          <th>Surname</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.list) {
        tab += `<tr> 
    <td>${r.DateTime} </td>
    <td>${r.Surname}</td>        
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("logs").innerHTML = tab;
}
