let noteList = [];
let id =0;
let view = "grid"; //default view is grid-view


function saveNote() {
    let taskTitle = document.getElementById("TaskTitle").value;
    let taskDetails = document.getElementById("TaskDetails").value;

    if(taskTitle == null || taskTitle == ""){
        let userElemnt = document.querySelector("#TaskTitle");
        userElemnt.style.border="2px solid red";
        document.querySelector("#titleSpan").innerHTML="Title cannot be blank";
        return false;
    }
    else if(taskDetails == null || taskDetails == ""){
        let userElemnt = document.querySelector("#TaskDetails");
        userElemnt.style.border="2px solid red";
        document.querySelector("#detailsSpan").innerHTML="TaskDetails cannot be blank";
        return false;
    }else{
        let task = {
            "id":id,
            "taskTitle":taskTitle,
            "taskDetails":taskDetails
        };
        id = id+1;
        noteList.push(task);
        console.log(noteList)
      alert("Form submitted");
      document.querySelector("form").reset();
    }
}

function fetchNotes() {
    let section = document.querySelector("section");
    if(section != null){
    section.remove();
    }
    noteList.forEach(task=>{
        let section = document.createElement("section");
        let body = document.querySelector(".accordion-body");
        body.appendChild(section);

        let h2 = document.createElement("h2");
        let h2Text = document.createTextNode(task.taskTitle);
        h2.appendChild(h2Text);
        section.appendChild(h2);

        let p = document.createElement("p");
        let pText = document.createTextNode(task.taskDetails);
        p.appendChild(pText);
        section.appendChild(p);

        let btn = document.createElement("button");
        let btntext = document.createTextNode("Delete user");
        btn.appendChild(btntext);
        section.appendChild(btn);
        btn.addEventListener("click", function(){
            deleteNote(task.id);
        })
    });
}
function deleteNote(id) {

    let sections = document.querySelectorAll("section");
    for(let i=0; i<sections.length; i++)
    {
     sections[i].remove();
    }
    noteList.splice(id, 1);
    
    noteList.forEach(task=>{
        console.log(task.id);
        let section = document.createElement("section");
        let body = document.querySelector(".accordion-body");
        body.appendChild(section);

        let h2 = document.createElement("h2");
        let h2Text = document.createTextNode(task.taskTitle);
        h2.appendChild(h2Text);
        section.appendChild(h2);

        let p = document.createElement("p");
        let pText = document.createTextNode(task.taskDetails);
        p.appendChild(pText);
        section.appendChild(p);

        let btn = document.createElement("button");
        let btntext = document.createTextNode("Delete Task");
        btn.appendChild(btntext)
        console.log(id + "second");
        section.appendChild(btn);  
        btn.addEventListener("click", function(){
            console.log("task id " + task.id);
            deleteNote(task.id);
        })
         
    })
    
}

function loadNoteData() {
    
}

function updateNoteData(note) {
    
}

function createNoteCard(note) {
    
}

function toggleView() {
    
}
