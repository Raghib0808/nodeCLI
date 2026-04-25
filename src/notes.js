import {saveDb, getDb,insertDb} from './db.js';

export const newNote = async(note,tags)=>{
    const newNote = {
        tags,
        id: Date.now(),
        content:note
    }
    await insertDb(newNote);
    return newNote;
}


export const getAllNotes = async()=>{
    const {notes} = await getDb();
    return notes;
}

export const findNotes = async(filter)=>{
    const {notes} = await getDb();
    return notes.filter((notes)=>notes.content.toLowerCase().includes(filter.toLowerCase()));
}

export const removeNote = async(id)=>{
    const {notes} = await getDb();
    const filteredNotes =  notes.filter((notes)=>notes.id !== id);
    await saveDb({notes:filteredNotes});
    return id;
}

// dont have to await here because we are not doing anything with the return value of this function, we just want to make sure it is done before we exit the process, and since this is the last thing we do in the process, we can just return the promise and let the process exit when it is done
export const removeAllNotes = ()=> saveDb({notes:[]})
