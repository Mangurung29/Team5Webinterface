fetch('https://462k64bxqd.execute-api.eu-west-2.amazonaws.com/Stage2/items')
// fetchRes is the promise to resolve
// it by using.then() method
.then(response => response.json())
.then(data => console.log(data));
