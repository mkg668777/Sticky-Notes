const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const color = document.querySelector("input");
const notesContainer = document.querySelector(".notesContainer");
let deletedNotes = [];
const  undo = document.querySelector(".undo");
 
form.addEventListener("submit" , (e)=>{
 e.preventDefault();
 const note = document.createElement("div");
 const close = document.createElement("span");
 close.classList.add("close");
 note.classList.add("note");
 if(textarea.value =="") {
     alert("Enter Some Text");
     return ;
}note.innerText  = textarea.value;
close.innerHTML  = "&times;";        // this will give x cross
close.addEventListener("click" , (e)=>{
     deletedNotes.push(e.target.closest(".note"));
     e.target.closest(".note").remove();
});
note.style.backgroundColor = color.value;
note.append(close);
notesContainer.append(note);
});

undo.addEventListener("click" , (e)=>{
    if(deletedNotes.length ==0) return ;
 let deletenote =deletedNotes.pop();
  notesContainer.append(deletenote);
})