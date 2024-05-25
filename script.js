document.addEventListener('DOMContentLoaded', () => {
    const notesList = document.getElementById('notesList');
    const addNoteButton = document.getElementById('addNoteButton');
    const settingsButton = document.getElementById('settingsButton');

    const loadNotes = () => {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notesList.innerHTML = '';
        notes.forEach((note, index) => {
            const li = document.createElement('li');
            li.textContent = note;
            li.addEventListener('click', () => editNote(index));
            notesList.appendChild(li);
        });
    };

    const saveNotes = (notes) => {
        localStorage.setItem('notes', JSON.stringify(notes));
        loadNotes();
    };

    const addNote = () => {
        const note = prompt('Gib deine Notiz ein:');
        if (note) {
            const notes = JSON.parse(localStorage.getItem('notes')) || [];
            notes.push(note);
            saveNotes(notes);
        }
    };

    const editNote = (index) => {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        const newNote = prompt('Bearbeite deine Notiz:', notes[index]);
        if (newNote !== null) {
            notes[index] = newNote;
            saveNotes(notes);
        }
    };

    addNoteButton.addEventListener('click', addNote);
    settingsButton.addEventListener('click', () => alert('Einstellungen'));

    loadNotes();
});
