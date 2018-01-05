let notes = {data: []};

let upDateList = function(){

}

let createNote = function(){
    let input = document.querySelector('#form-add-note input[type="text"]');
    let value = input.value;

    notes.data.push(value);

    input.value =  "";
   
}

upDateList();


document.addEventListener('DOMContentLoaded', function(event){
    let formAddNotes = document.getElementById('form-add-note')
    formAddNotes.addEventListener('submit', function (e){
        e.preventDefault();
        createNote();
    });
});

document.addEventListener('click', function (e) {
    let notesTag = document.getElementById('notes');

    if(e.target.parentElement === notesTag) {
        if(confirm('Do you want to remove this note?')){
            let listOfNotes = document.querySelectorAll('#notes li');
            listOfNotes.forEach(function (item, index){
                if(e.target === item) {
                    notes.data.splice(index, 1);
                }
            });
        }
    }
});
