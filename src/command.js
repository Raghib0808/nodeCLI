#!/usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { findNotes, getAllNotes, newNote, removeAllNotes, removeNote } from './notes.js';
const printNotes = (notes)=>{
    notes.forEach((note)=>{
        console.log(` id:  ${note.id}\n content: ${note.content}\n tags: [${note.tags.join(',')} ]\n`);
    });
}
yargs(hideBin(process.argv))
  .command('new <note>', 'create a new note', yargs => {
    return yargs.positional('note', {
      describe: 'The content of the note you want to create',
      type: 'string'
    })
  }, async (argv) => {
     const tags = argv.tags ? argv.tags.split(',') : [];
     const notes = await newNote(argv.note,tags);
     console.log("new Note!",notes);
  })
  .option('tags', {
    alias: 't',
    type: 'string',
    description: 'tags to add to the note'
  })
  .command('all', 'get all notes', () => {}, async (argv) => {
      const allNotes = await getAllNotes();
      printNotes(allNotes);
  })
  .command('find <filter>', 'get matching notes', yargs => {
    return yargs.positional('filter', {
      describe: 'The search term to filter notes by, will be applied to note.content',
      type: 'string'
    })
  }, async (argv) => {
        const filteredNotes = await findNotes(argv.filter);
        printNotes(filteredNotes);
  })
  .command('remove <id>', 'remove a note by id', yargs => {
    return yargs.positional('id', {
      type: 'number',
      description: 'The id of the note you want to remove'
    })
  }, async (argv) => {
        let id = await removeNote(argv.id);
        printNotes("removed id:",id);
  })
  .command('web [port]', 'launch website to see notes', yargs => {
    return yargs
      .positional('port', {
        describe: 'port to bind on',
        default: 5000,
        type: 'number'
      })
  }, async (argv) => {
    
  })
  .command('clean', 'remove all notes', () => {}, async (argv) => {
        await removeAllNotes();
        console.log("All notes removed!");
  })
  .demandCommand(1)
  .parse()
//  to do this without yargs simply do this const const [, , command, ...args] = process.argv;
// runtime ,script, command, args
