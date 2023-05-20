let arr = [
    {id:1,name:"john",age:"18",profession:"developer"},
    {id:2, name:"jack",age:"20", profession:"developer"},
    {id:3, name:"karen", age:"19",profession:"admin"}
];

//add table
let table = document.getElementById('table');
createTable(arr);
function createTable(arr){
    for (var i=0;i<arr.length;i++) {
        let tr = document.createElement('tr');
        
        let td1 = document.createElement('td');
        td1.textContent = arr[i].id;
        tr.appendChild(td1);
        
        let td2 = document.createElement('td');
        td2.textContent = arr[i].name;
        tr.appendChild(td2);
        
        let td3 = document.createElement('td');
        td3.textContent = arr[i].age;
        tr.appendChild(td3);

        let td4 = document.createElement('td');
        td4.textContent = arr[i].profession;
        tr.appendChild(td4);
        
        table.appendChild(tr);
    }
}

function myFilter(){
    if(choice=='') {
        alert("Please select a profession to filter");
        return;
    }
    table.innerHTML='';
    createTable(arr2);
}
let arr2,choice='';
function getProfession(){
     choice = document.getElementById('choice').value;
     arr2 = arr.filter((item)=>item.profession==choice);
}

function addUser(){
    var Name = document.getElementById('name').value;
    var Age = document.getElementById('age').value;
    var Profession = document.getElementById('profession').value;
    var Id = arr.length+1;
    var obj = {id:Id,name:Name,age:Age,profession:Profession};
    arr.push(obj);
    console.log(arr);
    return false;
}