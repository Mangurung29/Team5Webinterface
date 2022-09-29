// api url
const api_url = 
      "https://462k64bxqd.execute-api.eu-west-2.amazonaws.com/Stage2/items";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    
// Calling that async function
getapi(api_url);
  
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
