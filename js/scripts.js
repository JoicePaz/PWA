let notes = window.localStorage.getItem('notes') || '{"data": []}';
notes = JSON.parse(notes);

let upDateList = function(){
    console.log('[Application] start watch');

    Array.observe(notes.data, function(changes){
        let index = null;
        let value = '';
        let status = null;

        if(changes[0].type === 'splice'){
            index = changes[0].index;
            value = changes[0].object[index];
            status = (changes[0].addedCount > 0) ? 'created' : 'removed';
        }

        if(changes[0].type === 'update'){
            index = changes[0].name;
            value = changes[0].object[index];
            status = 'updated';
        }

        if(value && status === 'created' && status === 'updated'){
            return;
        }

        let notesTag = document.getElementById('notes');

        if(status === 'updated'){
            //,,,,,,,,
        }

        
        if(status === 'removed'){
            let listOfNotes = document.querySelectorAll("#notes li");
            notesTag.removeChild(listOfNotes[index]);
        }

        
        if(status === 'created'){
            let newLi = document.createElement('li');
            newLi.innerHTML = value;
            notesTag.appendChild(newLi);
        }

        window.localStorage.setItem('notes', JSON.stringify(notes));
    });
}

let createNote = function(){
    let input = document.querySelector('#form-add-note input[type="text"]');
    let value = input.value;

    notes.data.push(value);

    input.value =  "";
   
}

upDateList();


document.addEventListener('DOMContentLoaded', function(event){
    let listOfNotes = document.getElementById('notes');
    let listHTML = '';

    for(let i=0; i < notes.data.length; i++){
        listHTML += '<li>' + notes.data[i] + '</li>';
    }

    listOfNotes.innerHTML = listHTML;

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
