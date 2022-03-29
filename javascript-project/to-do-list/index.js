
let getButton=document.querySelector('#toDoBtn');


getButton.addEventListener('click', clickMe);
function clickMe(){
    let getInput=document.querySelector('#inputField');
    let para=document.querySelector('.todos');
    let paragraph=document.createElement("p")
    paragraph.innerText=getInput.value;
    para.appendChild(paragraph);
    inputField.value='';
    paragraph.addEventListener('click', function(){
        para.removeChild(paragraph)
    });
}