fetch("https://462k64bxqd.execute-api.eu-west-2.amazonaws.com/Stage2/items").then(
  res => {
    res.json().then(
      data => {
        console.log(data.data);
        if (data.data.length > 0) {

          var temp = "";
          data.data.forEach((itemData) => {
            temp += "<tr>";
            temp += "<td>" + itemData.Surname + "</td>";
            temp += "<td>" + itemData.DateTime + "</td>";
                 </tr>";
          });
          document.getElementById('logs').innerHTML = temp;
        }
      }
    )
  }
  )
