

function details() {
    console.log(document.forms["visitor"]["serviceno"].value);
    console.log(document.forms["visitor"]["rank"].value);
    console.log(document.forms["visitor"]["firstname"].value);
    console.log(document.forms["visitor"]["lastname"].value);
    console.log(document.forms["visitor"]["pid"].value);
    
}

function find() {
    document.getElementById("initial-search").search();
}

function find() {
    let x = document.getElementById("initial-search").value;
}
// if (x == "") {
// alert("");
// return false;