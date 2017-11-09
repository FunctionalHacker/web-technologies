'use strict';
var notes = new Array();
loadList();

function getItemText(){
    var textbox = document.getElementById('item');
    var itemText = textbox.value;
    textbox.value = '';
    textbox.focus();
    return itemText;
}

function addItem(){
    var itemText = getItemText();
    var newItem = {title: itemText, quantity: 1};
    var duplicate = 0;

    notes.forEach(function(el){
        if (el.title == itemText){
            el.quantity++;
            duplicate = 1;
        }
    });
    if (duplicate == 0){
        notes.push(newItem);
    }
    displayList();
    saveList();
}

function displayList(){
    var table = document.getElementById('list');
    table.innerHTML = '';
    for (var i = 0; i<notes.length; i++){
        var node = undefined;
        var note = notes[i];
        node = document.createElement('tr');
        var html = '<td>'+note.title+'</td><td>'+note.quantity+'</td><td><a href="#" onClick="deleteIndex('+i+')">delete</td>';
        node.innerHTML = html;
        table.appendChild(node);
    }
}

function deleteIndex(i){
    notes.splice(i, 1);
    displayList();
    saveList();
}

function saveList(){
    localStorage.notes = JSON.stringify(notes);
}

function loadList(){
    console.log('loadList');
    if (localStorage.notes){
        notes = JSON.parse(localStorage.notes);
        displayList();
    }
}

var button = document.getElementById('add');
button.onclick = addItem;
