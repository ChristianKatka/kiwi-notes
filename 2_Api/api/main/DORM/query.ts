import { getEntityManager } from '@typedorm/core';
import { Context, Next } from 'koa';
import { Employee } from './employee';

export const query = async (ctx: Context, next: Next) => {
  // we first get entityManager for current connection
  const entityManger = getEntityManager();

  // Get Employee by employeee ID
  await entityManger.findOne(Employee, { id: '1234' });

  // Get all employees that report to given employee
  await entityManger.find(
    Employee,
    { reportsTo: '1234' },
    { queryIndex: 'GSI1' }
  );

  ctx.response.body = {};

  await next();
};
