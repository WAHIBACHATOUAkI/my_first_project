const data = [];
const showFormBtn = document.querySelector("#showFormBtn");
const overlay = document.querySelector(".overlay");
const form = document.querySelector(".form");

showFormBtn.addEventListener("click", () => {
  overlay.classList.add("showOverlay");
  form.style.bottom = "0%";
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("showOverlay");
  form.style.bottom = "-100%";
});
let NotId=0

function addNewNote(text) {
  if (text.trim() === "") {
    return;
  }
  
  const newNote = {
    id:NotId++,
    text: text.trim(),
    createdAt: new Date().toISOString(),
    status: "pending",
  };

  data.push(newNote);
}

// get add button
const addNoteBtn = document.getElementById("addNoteBtn");
const textarea = document.querySelector("textarea");
addNoteBtn.addEventListener("click", () => {
  const text = textarea.value;
  addNewNote(text);
  textarea.value = "";
  overlay.classList.remove("showOverlay");
  form.style.bottom = "-100%";
  addNotes(data);
  

});

const notesContainer = document.querySelector(".notes-container");
function addNotes(data) {
  notesContainer.innerHTML = "";
  data.forEach((note) => {
    const noteHTML = `<div class="note ${note.status === "done" ? "note-done" : "note-pending"}" id="${note.id}">
          <p>${note.text}</p>
          <button class='but'></button>
          <span>${note.createdAt}</span>
        </div>`;
    notesContainer.innerHTML += noteHTML;
     
 
  });
  let AllNote=document.querySelector(".All");
    AllNote.textContent=data.length
    let Done=document.querySelector('.Don').textContent=data.filter(elt=>elt.status=='done').length
     let Pending=document.querySelector('.Pen').textContent=data.filter(elt=>elt.status=='pending').length
}
let input=document.querySelector('input')
function recherer(data,valeur)
{
  let newData=data.filter(elt=>elt.text.toLowerCase().includes(valeur.toLowerCase()));
  return addNotes(newData);
}
input.addEventListener('input',()=>{
  let valeur=input.value;
  recherer(data,valeur);
  

})
// let button=document.querySelectorAll('.but').forEach(elt=>{

//   elt.addEventListener('click',()=>{
//   let not=elt.parentElement;
//    let id=parseInt(not.getAttribute('id'))


//   let note=data.find(item=>item.id==id)
//   if(note) {
//     note.status='done';
//    addNotes(data)

//   }
    
  
 
// })
  
// });
notesContainer.addEventListener('click',(e)=>{
  if(e.target.classList.contains('but'))
  {
    let div=e.target.parentElement;
    let id=parseInt(div.getAttribute('id'))
    let note=data.find(elt=>elt.id==id);
    if(note) note.status='done';
    addNotes(data);
  }
  
})




  

