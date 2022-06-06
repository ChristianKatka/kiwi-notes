import { Context, Next } from 'koa';
import { v4 as uuidv4 } from 'uuid';
import { dynamodbCreateNote } from './services/dynamodb/dynamodb-create-note.service';

export const createNote = async (ctx: Context, next: Next) => {
  const note = {
    id: uuidv4(),
    createdAt: Date.now(),
    ...ctx.request.body,
  };

  console.log('MUN LOGAUAS BOIII');
  

  await dynamodbCreateNote(note);

  ctx.response.body = note;

  await next();
};
