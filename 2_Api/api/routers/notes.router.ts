import Router from 'koa-router';
import { getNotes } from '../main/get-notes.controller';
import { createNote } from './../main/create-note.controller';

const notesRouter = new Router({ prefix: '/notes' });

notesRouter.get('/', getNotes);
notesRouter.post('/', createNote);

export { notesRouter };
