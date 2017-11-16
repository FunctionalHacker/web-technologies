
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;
var currentBook;

var table = document.createElement('table');

var th = document.createElement('th');
th.setAttribute("style", "border-style: solid; border-width: 1px; border-collapse: collapse;");
th.innerHTML = 'Title';
table.appendChild(th);

var th = document.createElement('th');
th.setAttribute("style", "border-style: solid; border-width: 1px; border-collapse: collapse;");
th.innerHTML = 'Year';
table.appendChild(th);

var th = document.createElement('th');
th.setAttribute("style", "border-style: solid; border-width: 1px; border-collapse: collapse;");
th.innerHTML = 'ISBN';
table.appendChild(th);

var th = document.createElement('th');
th.setAttribute("style", "border-style: solid; border-width: 1px; border-collapse: collapse;");
th.innerHTML = 'Authors';
table.appendChild(th);

table.setAttribute("style", "border-style: solid; border-width: 1px; border-collapse: collapse;");

for (var i=0; i < books.length; i++) {
    currentBook = i;
    console.log(books[i].title);

    var tr = document.createElement('tr');
    tr.setAttribute("style", "border-style: solid; border-width: 1px; border-collapse: collapse;");

    var td = document.createElement('td');
    td.innerHTML = books[i].title;
    td.setAttribute("style", "border-style: solid; border-width: 1px; border-collapse: collapse;");
    tr.appendChild(td);   

    var td = document.createElement('td');
    td.innerHTML = books[i].year;
    td.setAttribute("style", "border-style: solid; border-width: 1px; border-collapse: collapse;");
    tr.appendChild(td);

    var td = document.createElement('td');
    td.innerHTML = books[i].isbn;
    td.setAttribute("style", "border-style: solid; border-width: 1px; border-collapse: collapse;");
    tr.appendChild(td);

    var td = document.createElement('td');
    td.innerHTML = books[i].authors;
    td.setAttribute("style", "border-style: solid; border-width: 1px; border-collapse: collapse;");
    tr.appendChild(td);

    table.appendChild(tr);
}

table.addEventListener('click', function(e){
    if (e.target.nodeName.toUpperCase() !== "TD") return;
    var td = e.target
    document.getElementById("displaySelected").innerHTML = td.innerText;
});

document.body.appendChild(table);
document.getElementById("displaySelected").innerHTML = "Version Control with Git";
