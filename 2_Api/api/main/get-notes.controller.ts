import { Context, Next } from 'koa';
import { dynamodbGetAllNotes } from './services/dynamodb/dynamodb-get-all-notes.service';

export const getNotes = async (ctx: Context, next: Next) => {
  const notes = await dynamodbGetAllNotes();

  // ctx.response.status = 200;
  ctx.response.body = notes;

  await next();
};
