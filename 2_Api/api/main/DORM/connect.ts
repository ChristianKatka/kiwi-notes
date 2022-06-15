import {createConnection} from '@typedorm/core';

// initialize with specifying list of entities
createConnection({
  table: myGlobalTable,
  entities: [Employee, Product, ...other entities],
});