let valueTask = document.getElementById('valueTask');
let btnAdd = document.getElementById('btnAdd');
let image = document.getElementById('image');
let clearAll = document.getElementById('clearAll');
let dataTask =[];
// + ADD TASK
btnAdd.onclick = function() {
    let dataObj = {
        task: valueTask.value,
    }
    dataTask.push(dataObj);
    localStorage.setItem("task" , JSON.stringify(dataTask));
    clearValue()
    showData()
}

// Save Data Tasl In Local Storage
if ( localStorage.task !=null ) {
    dataTask = JSON.parse(localStorage.task)
}else {
    dataTask = [];
}

// Show Data

function showData() {
    let addData = '';
    for (let i = 0 ; i < dataTask.length ; i++) {
        addData += `
         <tr>
            <td class="td-1 animate__animated animate__fadeInDown">${dataTask[i].task}</td>
            <td class="td-2"><img onclick="deleteSome(${i})" class="animate__animated animate__fadeInRight" id="image" src="./image/delete.png" alt=""></td>
            </tr>
        `
    }
     document.getElementById('tbody').innerHTML = addData;
     document.getElementById("numWorks").innerText = `${dataTask.length} works pending...`;
    
}

//Delete-1 
function deleteSome(i){
    dataTask.splice(i,1);
    localStorage.task = JSON.stringify(dataTask);
    showData()
}

//Delete All
function deleteAll(){
    localStorage.clear()
    dataTask.splice(0)
    showData()
}
//clear inputs 
function clearValue(){
    valueTask.value = '';
}