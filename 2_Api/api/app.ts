import cors from '@koa/cors';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import json from 'koa-json';
import logger from 'koa-logger';
import { notesRouter } from './routers/notes.router';

const app = new Koa();

// app.use(async (ctx) => {
//   ctx.body = 'Welcome to the server side';
// });

app.use(logger());
app.use(json());
app.use(bodyParser());
app.use(cors());

app.use(notesRouter.routes()).use(notesRouter.allowedMethods());

export { app };
