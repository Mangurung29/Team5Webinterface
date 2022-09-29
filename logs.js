fetch("https://462k64bxqd.execute-api.eu-west-2.amazonaws.com/Stage2/items").then(
  res => {
    res.json().then(
      data => {
        console.log(data.data);
        if (data.data.length > 0) {

          var temp = "";
          data.data.forEach((itemData) => {
            temp += "<tr>";
            temp += "<td>" + itemData.servicenumber + "</td>";
            temp += "<td>" + itemData.Surname + "</td>";
            temp += "<td>" + itemData.DateTime + "</td>";
            temp += "<td>" + itemData.IDstamp + "</td>";
            temp += "<td>" + itemData.buildingnumber + "</td>";
            temp += "<td>" + itemData.accessgranted + "</td>;                
            temp += "<td>" + itemData.servicenumber + "</td>";
                </tr>";
          });
          document.getElementById('logs').innerHTML = temp;
        }
      }
    )
  }
  )
